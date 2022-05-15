<template>
  <div
    id="ggtooltip"
    class="ggtooltip"
  >
    <div class="tt-parent" />
    <div class="tt-current" />
    <div class="tt-value" />
  </div>
</template>

<script>
import * as d3 from 'd3'
import mitt from 'mitt';
const emitter = mitt();

export default {
  name: "GraphTooltip",
  data(){
    return {
      item: {},
      event: {},
      label: ''
    }
  },
  created(){
    this.emitter.on('openGraphTooltip', (data) => {
      this.item = data.item
      this.event = data.event
      this.label = data.label
      this.openGraphTooltip()
    })

    this.emitter.on('closeGraphTooltip', (data) => {
      this.event = data.event
      this.closeGraphTooltip()
    })
  },
  methods: {
    openGraphTooltip() {
      const gtooltip = d3.select('#gtooltip')
      const format = d3.format(",");

      gtooltip
        .select('.tt-parent')
        .text(this.item.parent)
      gtooltip
        .select('.tt-current')
        .text(this.item.current)
      gtooltip
        .select('.tt-value')
        .text(`${this.label}${format(this.item.value)}`)

      const gtooltipElement = gtooltip.node().getBoundingClientRect()
      const { height } = gtooltipElement

      gtooltip
        .style('opacity', 1)
        .style('left', `${this.event.pageX}px`)
        .style('top', `${this.event.pageY - height}px`)
    },
    closeGraphTooltip() {
      d3
        .select('#gtooltip')
        .style('opacity', 0)
    }
  }
}
</script>

<style>
.gtooltip {
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
.tt-parent,
.tt-current,
.tt-value {
  margin: 0;
}
.tt-parent,
.tt-current {
  padding-bottom: 3px;
}
.tt-current {
  font-size: 18px;
  font-weight: bold;
}
</style>
