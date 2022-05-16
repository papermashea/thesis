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
        <a class="num-link" href="/dig" target="_blank">
          <p class="num2">{{ nPlants.all }}</p>
          <p class="num-label">total plants suited for temperate zones with edible properties</p>
        <div class="label-line"></div><el-icon class="forward"><back /></el-icon></a>
      </div>
      <div class="num-block">
        <router-link :to="`/dig?`+query" class="num-link">
          <!-- <a :href="`/dig?`+query" :id="query" target="_blank"> -->
            <p class="num1">{{ nPlants.filtered }}</p>
            <p class="num-label">edible plants compatible with your environment</p>
            <div class="label-line"></div><el-icon class="forward"><back /></el-icon>
          <!-- </a> -->
        </router-link>
      </div>
      <div class="num-block">
        <a class="num-link"  href="/dig" target="_blank">
          <p class="num2">{{ nPlants.med }}</p>
          <p class="num-label">of these have additional medicinal properties</p>
        <div class="label-line"></div><el-icon class="forward"><back /></el-icon></a>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Graph',
  props: {
    onFilterChange: Function,
    nPlants: Object,
    query: String,
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

.collection:hover {
  fill: rgba(61, 112, 104, .6);
  stroke: 2px solid rgba(61, 112, 104, 1);
}

.graphCol {
  width: 33%;
  display: block;
  float: left;
}

.numCol {
  width: 67%;
  display: block;
  float: left;
}

.num-block{
  margin: 0 10% 2% 0;
  height: 25%;
  text-align: right;
}

.num1,
.num2 {
  font-family: var(--technical);
  margin: 0;
}

.num1 {
  font-size: 2.2em;
}

.num2 {
  font-size: 1em;
  font-color: black!important;
}

.num-label {
  font-size: .7em;
  margin-left: 50%;
  width: 50%;
  text-align: right;
}

.label-line {
  width: 122%;
  border-bottom: 1px dotted black;
  margin: 0 0 0 -27%;
  padding: 15px 10px 0 0;
  float: left;
}

.num-link {
  font-weight: bold;
  text-decoration: none;
  font-size: .8em;
}

.forward {
  transform: rotate(0.5turn);
  vertical-align: bottom;
}

</style>