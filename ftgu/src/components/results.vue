<template>
  <b-card-body class="resultsInfo">
    <p>{{ this.type }}</p>
    <p>{{ this.description }}</p>
    <p>{{ this.details }}</p>
    <a :href=infolink> {{ this.name }} info</a>
    <a :href=testlink> {{ this.name }} tests</a>
  </b-card-body>
</template>
 
<script>
export default {
  name: 'results',
  props: {
   name: String,
   id: String,
   type: String,
   description: String,
   details: String,
   infolink: String,
   testlink: String,
   }
};
</script>

<style scoped>
</style>