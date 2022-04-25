<template>
  <div class="wrapper">
    <Form class="madLib"></Form>
    <Chart class="madLibRes"></Chart>
    <Numbers class="madLibRes"></Numbers>
  </div>
</template>

<script>
import plantData from "@/assets/data/plants.json";
import Form from "@/components/Form.vue";
// import Chart from "@/components/Chart.vue";
// import Numbers from "@/components/Numbers.vue";
console.log(plantData)

export default {
  name: 'segment',
  components: {
    Form,
    // Chart,
    // Numbers,
  },
  props: {
    // plants: Object,
  },
  data() {
    return {
      plants: plantData,
    }
  }
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
