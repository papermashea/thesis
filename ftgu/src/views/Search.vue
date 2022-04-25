<template>
  <navbar class="mainNav"></navbar>
    <div id="page">
<!--       <Filters
        :filters="filters"
        :params="params"
        :onFilterChange="onFilterChange"
        :nProjects="{
          filtered: filteredProjects.length,
          all: projects.length,
        }"
        :yearData="yearData"
      /> -->


    <div class="plantCards">
      <b-card-group>
        <span v-for="p in plants">
          <plantCard 
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
import plantCard from '@/components/blocks/plantCard.vue';
import footbar from "@/components/footbar.vue";

console.log(plantData)
// console.log(Object.keys(plantData.plants).length)


export default {
  name: "Search",

  components: {
    navbar,
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
.plantCards {
  margin-top: 20%;  
  grid-column: span 4;
}

</style>
