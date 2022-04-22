<template>
  <navbar class="mainNav"></navbar>
  <div id="page">
    <div class="wrapper" id="intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <flowchart class="environment"></flowchart>    
    <subset class="collection"></subset>
    <clusters class="groups"></clusters>
  </div>
</template>

<script>
import plantData from '@/assets/data/ftguTable_citations.json'

import navbar from "@/components/navbar.vue";
import flowchart from "@/components/flowchart.vue";
import input from "@/components/filters.vue";
import subset from "@/components/subset.vue";
import clusters from "@/components/clusters.vue";

// console.log(plantData)
// console.log(Object.keys(plantData.plants).length)

export default {
  name: "App",

  components: {
    navbar,
    flowchart,
    input,
    subset,
    clusters,
  },
  data(){
    return {
      plants: plantData,
    }
  }
};
</script>