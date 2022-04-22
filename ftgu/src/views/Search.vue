<template>
  <navbar class="mainNav"></navbar>
  <div id="page">


   <b-card
      v-for="plant in plants"
      v-bind:img-src="plant.ImgThb"
      img-top
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{plant.Commonname}} | {{plant.Latinname}}
      </b-card-text>
      <div class="flag">
        <p class="type">{{plant.Type}}</p>
      </div>
      <div class="flag">
        <p class="seed">{{plant.PropagationType}}</p>
      </div>
      <div class="flag">
        <p class="edibe">{{plant.EdibilityRating}}/5 Ediblity</p>
      </div>
    </b-card>

  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import plantData from '@/assets/data/plants.json'
// import card from '@/components/blocks/card.vue'

console.log(plantData)
// console.log(Object.keys(plantData.plants).length)


export default {
  name: "Search",

  components: {
    navbar,
  },

  data(){
    return {
      plants: plantData,
    }
  }

};
</script>

<style>
#app {
  margin: 0;
  font-weight: normal;
}

  #page {
    max-width: 1280px;
  }

  .mainNav {
    grid-column: span 4;
    grid-row: span 10;
  }

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }

  .b-card {
    font-size: 1em;
  }

  .flag {
    width: 30%;
    height: 10px;
    float: left;
    font-size: .8em;
    marging: 0 1%;
  }

</style>
