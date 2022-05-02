<template>
  <div class="plant-form-subset">
   <div class="graphCol">
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
        :r="nPlants.filtered*(height/2)/nPlants.all"
        :cy="height-(nPlants.filtered*(height/2)/nPlants.all)"
        class="collection"
        id="filtered-form"
        />
      </g>
      <g>
        <circle
        :r="nPlants.med*(height/2)/nPlants.all"
        :cy="height-(nPlants.med*(height/2)/nPlants.all)"
        class="collection"
        id="filtered-med"
        />
      </g>
    </svg>    
   </div>
   <div class="numCol">
      <div class="num-block">
        <p class="num2">{{ nPlants.all }}</p>
        <p class="num-label">plants suited for temperate zones have edible properties</p>
        <a class="num-link" href="/#/search" target="_blank"><div class="label-line"></div>see all plants ></a>
      </div>
      <div class="num-block">
        <p class="num1">{{ nPlants.filtered }}</p>
        <p class="num-label">edible plants compatible with your environment</p>
        <a class="num-link" href="/#/search" target="_blank"><div class="label-line"></div>see filtered plants ></a>
      </div>
      <div class="num-block">
        <p class="num2">{{ nPlants.med }}</p>
        <p class="num-label">of these have additional medicinal properties</p>
        <a class="num-link"  href="/#/search" target="_blank"><div class="label-line"></div>see these plants ></a>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Graph',
  props: {
    filters: Object,
    onFilterChange: Function,
    nPlants: Object,
  },
  data() {
    return {
      width: 300,
      height: 300,
    }
  }
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

.graphCol,
.numCol {
  width: 50%;
  display: block;
  float: left;
}

.num-block{
  margin: 0 0 10% 10%;
  height: 30%;
  text-align: right;
}

.num1,
.num2 {
  margin: 0;
}

.num-label {
  font-size: .7em;
  margin: 0;
  width: 100%;
  text-align: right;
}

.label-line {
  width: 135%;
  border-bottom: 1px dotted black;
  margin: 0 0 0 -75%;
  padding: 15px 10px 0 0;
  float: left;
}

.num-link {
  font-weight: bold;
  font-style: italic;
  font-size: .8em;
}

</style>