<template>
  <div class="circle-pack">
    <svg 
      :viewBox="`0, 0 ${width} ${height}`"
      :width="width"
      :height="height">
      <g
        v-for="item in layoutData.children"
        :id="item.data[0]"
      >
      <circle
      class="group-cluster"
      fill="none"
      stroke="black"
      stroke-width=".5"
      :r="item.r"
			:style="{
			        transform: `translate(${item.x}px, ${item.y}px)`
			      }"
      />
	     <g
        v-for="(node, n) in item.children"
        :id="node.data.id"
        :style="{
          transform: `translate(${node.x}px, ${node.y}px)`
        }"
        >
          <el-drawer
            v-model="drawer"
            title="I am the title"
            direction="rtl"
          ><span>Hi, there!</span>
          </el-drawer>

		      <circle
		      class="plant-node"
		      :name="node.data.latinname"
		      :value="node.data.ediblerating"
		      :r="node.data.usefulness/1.5"
          @mouseover="mouseOverChildren(node, $event)"
          @mouseout="mouseOutChildren($event)"
          @click="drawer = true"
		      />
			</g>
      <rect class="label"
      	fill="rgba(255,255,255,.8)"
      	height= "30"
      	width= "150"
				:style="{
	        transform: `translate(${item.x-120}px, ${item.y-70}px)`
	      }">
    	</rect>
				<text
				fill="black"
				class="group-label"
				:style="{
	        transform: `translate(${item.x-100}px, ${item.y-50}px)`
	      }">
	        {{ item.data[0] }}
	      </text>
    </g>
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

import * as d3 from 'd3';
import { hierarchy, pack } from 'd3-hierarchy'

import mitt from 'mitt';
const emitter = mitt();

const drawer = ref(false);

// import PlantOverlay from '@/components/PlantOverlay.vue'

export default {
  name: 'PlantPack',
  components: {
    // PlantOverlay
  },
  props: {
    onFilterChange: Function,
    nPlants: Object,
    gPlants: Object,
    data: { type: Object, required: true },
  },
  data() {
    return {
      width: 1200,
      height: 1200,
      // value: this.data.value,
    }
  }, //close data
  computed: {
  	useColor() {
      let petri = ["#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"];
      let values = [1, 2, 3, 4, 5];
			// return d3.quantize(d3.interpolateDiscrete(petri), petri.length)
			
			// const color = d3.scaleLinear()
			//     .domain([1, 2, 3, 4, 5])
			//     .range([ "#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"]);
			
			// const color = d3.scaleOrdinal()
			//     .domain([1, 2, 3, 4, 5])
			//     .range([ "#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"]);

			// const color = d3.quantize(d3.interpolateDiscrete(petri), 5)
			
			// const color = d3.quantize(d3.interpolateCool, values.length)
			
			// const colorInterpolator = d3.quantize(d3.interpolateHcl("#3C6962", "#73F009"), 5)
			const colorInt = d3.interpolateDiscrete(petri)

			const colorScale = d3.scaleQuantize()
			.domain([1, 5])
			.range(d3.quantize(colorInt, 5))

			return colorScale(this.value)
	    },
    layoutData() {
      const rootHierarchy = hierarchy(this.data)
        .sum(d => d.usefulness)
        .sort((a, b) => {
          return b.usefulness - a.usefulness
        })
      return pack()
        .size([1200, 1200])
        .padding(1)(rootHierarchy)
    } 
  }, //close computed
  methods: {
    openTooltip(h, event) {
      const details = {
        name: h.data.latinname,
        cname: h.data.commonname,
        sname: h.data.synonyms,
        growth: h.data.growth,
				hardinessuse: h.data.hardinessuse,
        edible: h.data.ediblerating,
        medicinal: h.data.medicinalrating,
        material: h.data.materialrating,
        value: h.value,
      }
      // console.log(item.parent)
      this.emitter.emit('openTooltip', { details, event })
    },
    closeTooltip(event) {
      this.emitter.emit('closeTooltip', { event })
    },
    mouseOverChildren(details, event) {
      this.openTooltip(details, event)
      event.target.style.stroke = 'rgba(255, 255, 255, .5)'
    },
    mouseOutChildren(event) {
      this.closeTooltip(event)
      event.target.style.stroke = 'rgba(255, 255, 255, 0)'
    }
  }, // close methods
}; // close export
</script>

<style>
circle[value="1"] {
	fill: var(--low-edible);
}
circle[value="2"] {
	fill: var(--lowmed-edible);
}
circle[value="3"] {
	fill: var(--med-edible);
}
circle[value="4"] {
	fill: var(--medhigh-edible);
}
circle[value="5"] {
	fill: var(--high-edible);
}
</style>