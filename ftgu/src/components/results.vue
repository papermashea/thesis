<template>
  <b-card-body class="resultsInfo">
    <p class="type">{{ this.type }}</p>
    <p class="description">{{ this.description }}</p>
    <p class="details">{{ this.details }}</p>
    <a class="oneline" id="external" :href=infolink target="_blank"> <button type="button" class="btn btn-light">info </button></a>
    <a class="oneline" id="external" :href=testlink target="_blank"> <button type="button" class="btn btn-light">tests </button></a>
  </b-card-body>
</template>
 
<script>
export default {
  name: 'Results',
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
.oneline {
  display: inline;
  margin: 0;
  padding: 0;
}

.type {
  font-size: 1em;
}

.description,
.details {
  font-size: .7em;
}

.description {
  font-weight: 600;
}

.description {
  font-weight: 400;
}

</style>