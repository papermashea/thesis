<script>
import mitt from 'mitt';
const emitter = mitt();

export default {
  name: "Circlepack",
  props: {
    data: { type: Object, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  },
  computed: {
    parents() {
      return this.data.descendants().filter(d => d.depth === 1)
    },
  },
  methods: {
    openTooltip(h, event) {
      const label = 'Edible uses: '
      const item = {
        parent: h.parent.data.key,
        current: h.data.key,
        value: h.value,      
      }
    console.log(item)
      this.emitter.emit('openTooltip', { item, event, label })
    },
    closeTooltip(event) {
      this.emitter.emit('closeTooltip', { event })
    },
    mouseOverChildren(item, event) {
      this.openTooltip(item, event)
      event.target.style.fill = 'rgba(0, 0, 0, .25)'
      event.target.style.stroke = 'rgba(255, 255, 255, .75)'
    },
    mouseOutChildren(event) {
      this.closeTooltip(event)
      event.target.style.fill = 'rgba(0, 0, 0, 0)'
      event.target.style.stroke = 'rgba(255, 255, 255, .5)'
    }
  }
}
</script>

<template>
  <div class="circle-pack">
    <svg
      :viewBox="`0, 0 ${width} ${height}`"
      :width="width"
      :height="height"
    >
      <g
        v-for="(item, i) in parents"
        :key="`c${i}`"
        :class="$style.parent"
        :fill="item.color"
        :style="{transform: `translate(${item.x}px, ${item.y}px)`}"
      >
        <circle
          :r="item.r"
          @mouseover="openTooltip(item, $event)"
          @mouseout="closeTooltip($event)"
        />
      </g>
      <g
        v-for="(item, i) in data.descendants().filter(d => d.depth >= 2)"
        :key="`s${i}`"
        :class="$style.child"
        :style="{transform: `translate(${item.x}px, ${item.y}px)`}"
      >
        <circle
          :r="item.r"
          @mouseover="mouseOverChildren(item, $event)"
          @mouseout="mouseOutChildren($event)"
        />
      </g>
    </svg>
  </div>
</template>

<style module>
.parent {
  stroke: rgba(0, 0, 0, .5);
}

.child {
  fill: rgba(0, 0, 0, 0);
  stroke: rgba(255, 255, 255, 0.5);
}

.parent,
.child {
  transition: transform 0.2s ease-in;
}
</style>
