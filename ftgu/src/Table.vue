<template>
    <navbar class="mainNav"></navbar>

</template>

<script>
import navbar from "./components/navbar.vue";
import card from "./components/card.vue";
import flowchart from "./components/flowchart.vue";
import filters from "./components/filters.vue";
import subset from "./components/subset.vue";
import times from "./components/times.vue";
import clusters from "./components/clusters.vue";

export default {
  name: "App",

  components: {
    navbar,
    card,
    flowchart,
    filters,
    subset,
    times,
    clusters,
  },
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

  #notecard {
    box-shadow: -3px 0px 2px #D3D3D3;
  }

 .wrapper {
    grid-row: span 10;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    grid-column: span 2;
    padding: 1rem;
  }

  .hardiness,
  .environment,
  .times {
    grid-column: span 4;
    width: 100%
  }
</style>
