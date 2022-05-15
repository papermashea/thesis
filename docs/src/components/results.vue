<template>
<el-card class="res" shadow="never">
      <p class="type">{{this.type}}</p>
      <p class="description">{{this.description}}</p>
      <p class="details">{{this.details}}</p>
      <a class="oneline" id="external" :href=infolink target="_blank"> <button type="button" class="btn btn-light">info </button></a>
      <a class="oneline" id="external" :href=testlink target="_blank"> <button type="button" class="btn btn-light">tests </button></a>
</el-card>
</template>
 
<script>
export default {
  name: 'Results',
  props: {
    type: String,
    description: String,
    details: String,
    infolink: String,
    testlink: String,
   }, //close props
};
</script>

<style>
.res .type {
  font-size: .8em;
}

.res .description,
.res .details {
  font-size: .7em;
}

.res .description {
  font-weight: 600;
}

.res .description {
  font-weight: 400;
}

.res {
  margin-top: 0;
  padding: 0;
  width: 100%;
  height: 250px;
}

</style>