<template>
  <div class="wrapper">
    <Form 
      class="madLib"
    >
    </Form>
    <Graph 
      class="madLibRes"
      v-bind="{ data: count, total, filtered, med, width, height }"
    >
    </Graph>
    <Numbers 
      class="madLibRes"
      v-bind="{ data: count, total, filtered, med, width, height }">
    </Numbers>
  </div>
</template>

<script>
import plantData from "@/assets/data/plants.json";
import Form from "@/components/Form.vue";
import Graph from "@/components/Graph.vue";
import Numbers from "@/components/Numbers.vue";

import mitt from 'mitt';
const emitter = mitt();

console.log(plantData)

export default {
  name: 'segment',
  components: {
    Form,
    Graph,
    Numbers
  },
  data() {
    return {
      plants: plantData,
      height: 200,
      width: 200,
    }
  },
  computed: {
    // count() {
    //   let count = plantData.length
    //   return count;
    //   console.log(count)
    // },
    total() {
      let total = plantData.length
      return total;
      // console.log(total)
    },
    filtered() {
      let filtered = plantData.length/2
      return filtered;
      // console.log(filtered)
    },
    med() {      
      let med = plantData.filter(item => item.medcinalrating > '0').length
      console.log(med)
      return med
      }
  } //close computed
};
</script>

<style>
.madLib {
  grid-column: span 2;
  width: 50%;
}

.madLibRes {
  grid-column: span 1;
  width: 25%;
}
</style>
