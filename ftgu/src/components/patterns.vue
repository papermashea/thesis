<template>
  <information></information>
  <plantToggles class="sides"></plantToggles>
  <plantpack></plantpack>
  <div class="sides"></div>
</template>

<script>
import information from "@/components/information.vue";
import plantToggles from "@/components/plantToggles.vue";
import plantpack from "@/components/plantpack.vue";

export default {
  name: "patterns",

  components: {
    information,
    plantToggles,
    plantpack,
  },
  data(){
    return {
    }
  }
};
</script>

<style>
.sides {
  grid-column: span 1;
  width: 25%;
}
.circles {
  grid-column: span 2;
  width: 50%;
}
</style>