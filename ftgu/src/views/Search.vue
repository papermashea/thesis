<template>
  <navbar class="mainNav"></navbar>
  <div id="page">
    <div class="search-filters">
      <Filters v-bind="{ data: plants, envFilter, ecoFilters }"></Filters>    
      <div class="filter-group">
        <input type="text" v-model="search" placeholder="search" />
      </div>
    </div>
    <div class="plantCards">
      <b-card-group>
        <span v-for="p in searchedPlants">
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
import { FILTERS, PARAMS } from "../global.js";

import navbar from "@/components/navbar.vue";
import Filters from "@/components/Filters.vue";
import plantCard from '@/components/plantCard.vue';
import footbar from "@/components/footbar.vue";


// console.log(plantData)
  // console.log(Object.keys(plantData.plants).length)


export default {
  name: "Search",

  components: {
    navbar,
    Filters,
    plantCard,
    footbar,
  },
  data() {
    return {
      plants: plantData,
      envFilters: ["Sun", "Moisture", "Soil", "pH", "Hardiness"],
      ecoFilters: ["Type", "Size", "Polliators", "Growth", "Tolerances"],
      search: "",
    }
  }, //close data
  computed: {
    searchedPlants() {
      return this.plants.filter(p =>
        p.edibleuses.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },//close computed
  methods: {
    // populateFilters() {
    //   // if (!this.projects) {
    //   //   return;
    //   // }
    //   let allTags = [];

    //   for (let i = 0; i < this.projects.length; i++) {
    //     const { tags, year } = this.projects[i];
    //     allTags = [...allTags, ...tags];
    //     yearRange = [
    //       Math.min(year, yearRange[0]),
    //       Math.max(year, yearRange[1]),
    //     ];
    //   }
    //   this.filters = {
    //     ...this.filters,
    //     TAG: {
    //       ...this.filters.TAG,
    //       options: [...new Set(allTags)].sort(),
    //     },
    //     YEAR: {
    //       ...this.filters.YEAR,
    //       options: yearRange,
    //       selected: yearRange,
    //     },
    //   };
    // },
  }//close methods
};//close export
</script>

<style>
.search-filters {
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
