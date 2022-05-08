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
	      <a
	      v-for="(node, n) in item.children"
	      :href="node.data.id"
	      :id="node.data.id"
				:style="{
	        transform: `translate(${node.x}px, ${node.y}px)`
	      }"
	      >
		      <circle
		      class="plant-node"
		      :name="node.data.latinname"
		      :value="node.data.value"
		      :fill="useColor"
		      :r="node.value*1.7"
          @mouseover="mouseOverChildren(node, $event)"
          @mouseout="mouseOutChildren($event)"
		      />
			</a>
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
import * as d3 from 'd3';
import { hierarchy, pack } from 'd3-hierarchy'
import mitt from 'mitt';
const emitter = mitt();


export default {
  name: 'PlantPack',
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
    }
  }, //close data
  computed: {
  	useColor() {
      // let petri = ["#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"];
			// return d3.quantize(d3.interpolateDiscrete(petri), petri.length)
			
			// const color = d3.scaleLinear()
			//     .domain([1, 2, 3, 4, 5])
			//     .range([ "#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"]);
			
			const color = d3.scaleOrdinal()
			    .domain([1, 2, 3, 4, 5])
			    .range([ "#3C6962", "#309172","#20C387", "#4BDA45", "#73F009"]);

				return color(this.value);
	    },
    layoutData() {
      // Generate a D3 hierarchy
      const rootHierarchy = hierarchy(this.data)
        .sum(d => d.value)
        .sort((a, b) => {
          return b.value - a.value
        })
       //  .each(function(d) {
	      //   if (d.depth >= 1) {
	      //     d.color = colors[i]
	      //   }
	      //   i++
      	// })
        console.log(rootHierarchy)

      // Pack the circles inside the viewbox
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

</style>