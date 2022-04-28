<template>
  <div class="total">
    <svg 
      :viewBox="`0, 0 ${width} ${height}`"
      :width="width"
      :height="height">
      <g>
        <circle
        :r="height/2"
        :cy="height/2"
        class="collection"
        id="total"
        />
      </g>
      <g>
        <circle
        :r="filtered*(height/2)/counts"
        :cy="height-(filtered*(height/2)/counts)"
        class="collection"
        id="filtered-form"
        />
      </g>
      <g>
        <circle
        :r="(filtered*(height/2)/counts)-10"
        :cy="height-((filtered*(height/2)/counts)-10)"
        class="collection"
        id="filtered-med"
        />
      </g>
    </svg>    
  </div>
</template>

<script>
import * as d3 from 'd3'
import mitt from 'mitt';
const emitter = mitt();
// console.log(data)

export default {
  name: 'Graph',

  props: {
    counts: { type: Number, required: true },
    filtered: { type: Number, required: true },
    med: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },

  },
  computed: {
    scaled() {
      const totalR = height/2
      const filterR = filtered*(height/2)/counts;
      const medR = med*(height/2)/counts;
      
      return this.filterR
    },
  } // close computed
  // methods: {
    // openGraphTooltip(h, event) {
    //   const label = 'Edible uses: '
    //   const item = {
    //     value: h.value,      
    //   }
    //   // console.log(item.parent)
    //   this.emitter.emit('openGraphTooltip', { item, event, label })
    // },
    // closeGraphTooltip(event) {
    //   this.emitter.emit('closeGraphTooltip', { event })
    // },
    // mouseOverCircle(item, event) {
    //   this.openGraphTooltip(item, event)
    //   event.target.style.fill = 'rgba(0, 0, 0, .25)'
    //   event.target.style.stroke = 'rgba(255, 255, 255, .75)'
    // },
    // mouseOutCircle(event) {
    //   this.closeGraphTooltip(event)
    //   event.target.style.fill = 'rgba(0, 0, 0, 0)'
    //   event.target.style.stroke = 'rgba(255, 255, 255, .5)'
    // }
  // }
}; // close export
</script>

<style>
.collection {
  fill: rgba(61, 112, 104, .3);
  cx: 50%;
}


</style>