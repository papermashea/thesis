<template>
  <div class="buttons">
    <b-button @click="sun1" class="results">+</b-button>
    <b-button @click="sun2" class="results">+</b-button>
    <b-button @click="sun3" class="results">+</b-button>
  </div>
  <div class="factorDetails">
    <p class="type"></p>
    <p class="description"></p>
    <p class="details"></p>
    <a href="" class="info"></a>
    <a href="" class="tests"></a>
   </div>
</template>
 
<script>
export default {
  name: 'results',
  data() {
    return {
      results: [
      {id: "sun1", type: "None", description: "Less than 3 hours of sun per day.", details: "In environments with less light, plants grow more slowly and use less water. Avoid overwatering by feeling the soil.", info: "https://extension.psu.edu/planting-in-sun-or-shade", tests: "https://104homestead.com/sun-map-101/"},
      {id: "sun2", type: "None", description: "Less than 3 hours of sun per day.", details: "In environments with less light, plants grow more slowly and use less water. Avoid overwatering by feeling the soil.", info: "https://extension.psu.edu/planting-in-sun-or-shade", tests: "https://104homestead.com/sun-map-101/"},
      {id: "sun3", type: "None", description: "Less than 3 hours of sun per day.", details: "In environments with less light, plants grow more slowly and use less water. Avoid overwatering by feeling the soil.", info: "https://extension.psu.edu/planting-in-sun-or-shade", tests: "https://104homestead.com/sun-map-101/"}
      ]
    }
  }
};
</script>

<style>
.btn-secondary {
  border-color: none!important;
}
</style>