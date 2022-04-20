<template>
  <navbar class="mainNav"></navbar>
  <div id="page">
    <div class="wrapper" id="intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <preview></preview>
    <flowchart class="environment"></flowchart>
    <form class="inputs"></form>
    <subset class="collection"></subset>
    <times class="time"></times>
    <clusters class="numbers"></clusters>
  </div>
</template>

<script>
import plants from '@/assets/data/ftguTable_citations.json'
import { FILTERS } from "../global.js";

import navbar from "@/components/navbar.vue";
import preview from "@/components/preview.vue";
import flowchart from "@/components/flowchart.vue";
import form from "@/components/form.vue";
import subset from "@/components/subset.vue";
import times from "@/components/times.vue";
import clusters from "@/components/clusters.vue";


console.log(plants)

export default {
  name: "App",

  components: {
    navbar,
    preview,
    flowchart,
    form,
    subset,
    times,
    clusters,
  },
  data() {
    return {
      filters: FILTERS,
    };
  },
  mounted() {
    this.populateFilters();
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  computed :{
    filteredProjects() {
      if (!this.plants.length) {
        return [];
      }
      const { SUN } = this.filters;
  }  
  methods: {
    onFilterChange(id, selected) {
      if (id === "SUN") {
        this.filters = {
          ...this.filters,
          SUN: {
            ...this.filters.SUN,
            selected,
          },
        };
      }
      if (id === "SUN_TOGGLE") {
        this.filters = {
          ...this.filters,
          SUN: {
            ...this.filters.SUN,
            selected: [...new Set([...this.filters.SUN.selected, selected])],
          },
        };
      },
    populateFilters() {
      this.filters = {
        ...this.filters,
        SUN: {
          ...this.filters.SUN,
          options: [...new Set(allTags)].sort(),
        },
      };
    },
  },
};
</script>