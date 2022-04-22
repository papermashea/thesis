<template>
    <div class="circleArea">
      <svg width="500" height="500">
      <g
      class="plant"
      v-for="plant in layoutData.children"
      :key="plant.data.name"
      :style="{
      transform: `translate(${plant.x}px, ${plant.y}px)`
      }"
      >
      <circle class="plant__circle" :r="plant.r" :fill="#3D7068"></circle>
      <text class="plant__label">{{ plant.data.name }}</text>
      </g>
      </svg>
      <div class="controls">
        <div class="control" v-for="plant in plants" :key="plant.Latinname">
          <label>{{ plant.Latinname }}</label>
          <input type="number" v-model="plant.amount" step="10" min="10">
        </div>
      </div>
    </div>
</template>

<script>
import plantData from '@/assets/data/plants.json'
import { hierarchy, pack } from 'd3-hierarchy'


export default {
  name: 'clusters',
  data(){
    return {
      plants: plantData,
    }
  }
  computed: {
    transformedPlantData() {
      return {
        name: 'Top Level',
        children: this.plants.map(plant => ({
          ...plant,
          parent: 'Top Level'
        }))
      }
    }  
    layoutData() {
      // Generate a D3 hierarchy
      const rootHierarchy = 
        hierarchy(this.transformedPlantData)
        .sum(d => d.EdibilityRating)
        .sort((a, b) => {
          return b.value - a.value
        })
      // Pack the circles inside the viewbox
      return pack()
        .size([500, 500])
        .padding(10)(rootHierarchy)
    }
  }
}
</script>