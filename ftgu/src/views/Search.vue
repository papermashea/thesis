<template>
  <navbar class="mainNav"></navbar>
    <div id="page">
    <div class="searchFilters">
      <p class="filter-group">Environment:</p>
      <Filters></Filters>
    </div>
    <div class="plantCards">
      <b-card-group>
        <span v-for="p in plants">
          <plantCard 
            class="plant-card"
            :id="p.id"
            :latinname="p.latinname"
            :commonname="p.commonname"
            :synonyms="p.synonyms"
            :imgthb="p.imgthb"
            :type="p.type"
            :proptype="p.proptype"
            :edibilityrating="p.edibilityrating"
          >
          </plantCard>
        </span>
      </b-card-group>
    </div>

  </div>
<!--   <footbar></footbar> -->
</template>

<script>
import plantData from '@/assets/data/plants.json';
import navbar from "@/components/navbar.vue";
import Filters from "@/components/Filters.vue";
import plantCard from '@/components/plantCard.vue';
import footbar from "@/components/footbar.vue";

console.log(plantData)
// console.log(Object.keys(plantData.plants).length)


export default {
  name: "Search",

  components: {
    navbar,
    Filters,
    plantCard,
    footbar,
  },

  data(){
    return {
      plants: plantData,
      showModal: false,
    }
    computed: {

    }
  }

};
</script>

<style>
.searchFilters {
  grid-column: span 4;  
  display: block;
  height: 600px;
  width: 100%;
  margin: 0 10%;
}

.plantCards {
  display: block;
  grid-column: span 4;  
  width: 100%;
  margin: 10%;
}

</style>
