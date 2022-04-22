<template>
  <div class="wrapper" id="subset">
    <svg></svg>
  </div>
</template>

<script>
import plantData from '@/assets/data/ftguTable_citations.json'

// console.log(plantData)
// console.log(Object.keys(plantData.plants).length)

export default {
  name: 'subset',
  props: {
    plants: Object,
  },
}
</script>

