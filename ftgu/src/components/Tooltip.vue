<template>
  <div
    id="tooltip"
    class="tooltip"
  >
    <div class="tt-current" />
    <div class="tt-ed" />
    <div class="tt-med" />
    <div class="tt-over" />
    
  </div>
</template>

<script>
import * as d3 from 'd3'
import mitt from 'mitt';
const emitter = mitt();

export default {
  name: "Tooltip",
  data(){
    return {
      details: {},
      event: {},
      label: ''
    }
  },
  created(){
    this.emitter.on('openTooltip', (data) => {
      this.details = data.details
      this.event = data.event
      this.openTooltip()
    })

    this.emitter.on('closeTooltip', (data) => {
      this.event = data.event
      this.closeTooltip()
    })
  },
  methods: {
    openTooltip() {
      const tooltip = d3.select('#tooltip')
      const format = d3.format(",");

      tooltip
        .select('.tt-current')
        .text(`${this.details.name} / `+`${this.details.cname}`)

      tooltip
        .select('.tt-ed')
        .text(`Rated `+`${format(this.details.edible)}`+` out of 5 for edible uses and`)

      tooltip
        .select('.tt-med')
        .text(`rated `+`${format(this.details.medicinal)}`+` and `+`${format(this.details.material)}`+` out of 5 for medicinal and material uses.`)

      tooltip
        .select('.tt-over')
        .text(`Mostly `+`${this.details.hardinessuse}`)

      const tooltipElement = tooltip.node().getBoundingClientRect()
      const { height } = tooltipElement

      tooltip
        .style('opacity', 1)
        .style('left', `${this.event.pageX}px`)
        .style('top', `${this.event.pageY - height}px`)
    },
    closeTooltip() {
      d3
        .select('#tooltip')
        .style('opacity', 0)
    }
  }
}
</script>

<style>
.tooltip {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  max-width: 400px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 1px 5px rgba(51, 51, 51, 0.5);
  padding: 1rem;
}

.tt-current,
.tt-over,
.tt-ed,
.tt-med, 
.tt-mat {
  margin: 0;
}

.tt-current {
  font-size: 1.2em;
  font-weight: bold;
  padding-bottom: 10px;
}

.tt-over {
  font-size: .8em;
  font-style: oblique;
  padding-top: 10px;
}

.tt-ed,
.tt-med {
  font-size: .8em;
}
</style>
