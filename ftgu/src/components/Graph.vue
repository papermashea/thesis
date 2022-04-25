<template>
  <div class="total">
    <svg 
      :viewBox="`0, 0 ${width} ${height}`"
      :width="width"
      :height="height">
      <g>
        <circle
        v-bind:r="20" 
        />
      </g>
    </svg>    
  </div>
</template>

<script>
import * as d3 from 'd3'

// console.log(data)

export default {
  name: 'Graph',

  props: {
    // data: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  }
};
</script>