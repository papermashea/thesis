<template>
  <el-card class="res" shadow="never">
        <p class="type">{{this.type}}</p>
        <p class="description">{{this.description}}</p>
        <p class="details">{{this.details}}</p>
        <a class="oneline" id="external" :href=infolink target="_blank"> <button type="button" class="btn btn-light">info </button></a>
        <a class="oneline" id="external" :href=testlink target="_blank"> <button type="button" class="btn btn-light">tests </button></a>
      <div @click="closeEditor(slider)">Close</div>
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
    resultDetails: Object,
   }, //close props
};
</script>

<style>
.res .type {
  font-size: 1em;
}

.res .description,
.res .details {
  font-size: 1em;
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
  height: 200px;
  position: absolute;
  left: 0px;
  top: 250px;
}

</style>