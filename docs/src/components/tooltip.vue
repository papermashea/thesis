<template>
  <div
    id="tooltip"
    class="tooltip"
  >
    <div class="tt-current" />
    <div class="tt-over" />
    
    <div class="tt-ed" />
    <div class="tt-med" />
    <div class="tt-mat" />
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
        .select('.tt-over')
        .text(`mostly `+`${this.details.hardinessuse}`)

      tooltip
        .select('.tt-ed')
        .text(`${format(this.details.edible)}`+` edible uses`)

      tooltip
        .select('.tt-med')
        .text(`${format(this.details.medicinal)}`+` medicinal uses`)

      tooltip
        .select('.tt-mat')
        .text(`${format(this.details.material)}`+` material uses`)

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

.tt-over {
  padding-bottom: 2px;
}
.tt-current {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
