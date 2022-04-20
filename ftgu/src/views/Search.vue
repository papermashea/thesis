<template>
  <navbar class="mainNav"></navbar>
  <div id="page">
    <tableCard class="plantCard"></tableCard>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import plantData from "@/assets/data/ftguTable.json"
import card from '@/components/blocks/card.vue'

console.log(plantData)

export default {
  name: "Search",

  components: {
    navbar,
    card,
  },

  data(){
    return {

    }
  }
};
</script>

<style>
#app {
  margin: 0;
  font-weight: normal;
}

  #page {
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10px;
  }

  .mainNav {
    grid-column: span 4;
    grid-row: span 10;
  }

.plantCard {
  grid-row: span 1/**/;
  height: 400px;
}

</style>
