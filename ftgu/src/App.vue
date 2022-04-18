<template>
    <navbar class="mainNav"></navbar>
  <div id="page">
    <div class="wrapper" id="intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <card></card>
    <flowchart class="environment"></flowchart>
    <filters class="inputs"></filters>
    <subset class="collection"></subset>
    <times class="time"></times>
    <clusters class="numbers"></clusters>
  </div>
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
