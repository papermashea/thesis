<template>
<tooltip />
  <div :class="$style.cluster">
    <Circlepack
      v-bind="{ data: pack, width, height }"
    />
  </div>
</template>

<script>
import * as d3 from 'd3'
import * as d3Collection from 'd3-collection';
import Tooltip from '@/components/tooltip.vue'
import Circlepack from '@/components/circlepack.vue'

export default {
  name: "PlantPack",
  components: {
    Tooltip,
    Circlepack,
  },
  data() {
    return {
      data: [],
      groupOrder: ['type', 'latinname'],
      name: ['type'],
      selected: 'pack',
      height: 600,
      width: 600,
    }
  },
  computed: {
    colors() {
      let petri = ["#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"];
      let bamako = ["#00404D", "#134B42", "#265737", "#3A652A", "#52741C", "#71870B", "#969206", "#C5AE32", "#E7CD68", "#FFE599"];
      return d3.quantize(d3.interpolateDiscrete(petri), petri.length)

      },
    hierarchy() {
      let i = -1
      let colors = this.colors
      let h = d3.hierarchy(this.nestedData, v => v.values)
      // console.log(h)

      // totals used for usefulness
      h.sum(v => v.value)
      h.sort((a, b) => d3.ascending(a, b))

      return h.each(function(d) {
        if (d.depth >= 1) {
          d.color = colors[i]
        }
        i++
      })
    },
    pack() {
      return this.packLayout(this.hierarchy)
    },
    nestedData() {
      return {
        name: 'Plants',
        values: this.nester.entries(this.data)
      }
    },
    nester() {
      const n = d3Collection.nest()
      this.groupOrder.forEach(v => {
        n.key(node => node[v])
      })
      return n
    },
    packLayout() {
      return d3
        .pack()
        .size([this.width, this.height])
        .padding(2)
    }
  },
  async mounted() {
    const url = await d3.json('src/assets/data/plants.json')
    this.data = Object.freeze(url)
    // console.log(this.data)
  }
}
</script>

<style module>
.cluster {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
