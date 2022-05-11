<template>
  <div class="res">

      <a class="oneline" id="external" :href=infolink target="_blank"> <button type="button" class="btn btn-light">info </button></a>
      <a class="oneline" id="external" :href=testlink target="_blank"> <button type="button" class="btn btn-light">tests </button></a>
  </div>
</template>
 
<script>
export default {
  name: 'Results',
  props: {
    resultDetails: { type: Object, required: true },
   }, //close props
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