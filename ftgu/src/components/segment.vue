<template>
  <div class="wrapper">
    <Form 
      class="madLib"
    >
    </Form>
    <Graph 
      class="madLib"
      v-bind="{ data: collections, counts, filtered, med, width, height }"
    >
    </Graph>
    <Numbers 
      class="madLibRes"
      v-bind="{ data: collections, counts, filtered, med}">
    </Numbers>
  </div>
</template>

<script>
import plantData from "@/assets/data/plants.json";

import Form from "@/components/Form.vue";
// import Graph from "@/components/Graph.vue";
// import Numbers from "@/components/Numbers.vue";

import mitt from 'mitt';
const emitter = mitt();

// console.log(plantData)

export default {
  name: 'segment',
  components: {
    Form,
    // Graph,
    // Numbers,
  },
  data() {
    return {
      plants: plantData,
      height: 300,
      width: 300,
    }
  },
  computed: {
    counts(){
      let total = plantData.length
      // var filtered = plantData.length/2

      // const collections = {
      //   total: total,
      //   filtered: filtered,
      //   } 

      return total;
    },
    // filtered(){
    //   let filtered = plantData.length/2
    //   return filtered;
    //   // console.log(filtered)
    // },
    med(){      
      let med = plantData.filter(item => item.medcinalrating > '0').length
      console.log(med)
      return med
      }
  } //close computed
};
</script>

<style>
.madLib {
  width: 40%;
}

.madLibRes {
  width: 20%;
}
</style>
