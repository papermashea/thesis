<template>
  <information></information>
  <PlantToggles class="sides"></PlantToggles>
  <PlantPack></PlantPack>
  <div class="sides"></div>
</template>

<script>
import information from "@/components/information.vue";
import PlantToggles from "@/components/plantToggles.vue";
import PlantPack from "@/components/plantpack.vue";

export default {
  name: "patterns",

  components: {
    information,
    PlantToggles,
    PlantPack,
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