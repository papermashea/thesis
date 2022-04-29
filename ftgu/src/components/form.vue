<template>
  <div class="libForm">
    <div class="field">
      <p class="copy">I have
        <Dropdown class="oneline" id="sun-list" :filters="filters" :params="params" :onFilterChange="onFilterChange" 
        /> sun
      </p>
    </div>
  </div>
</template>

<script>
import plants from "@/assets/data/plants.json";
import { rollup, ascending, descending } from "d3-array";
import { FILTERS, PARAMS } from "@/global.js";

import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'Form',
  components: {
    Dropdown,
  },
  data() {
    return {
      plants: [],
      filters: FILTERS,
      params: PARAMS,
    }
  }, //close data
  mounted() {
    this.plants = plants.map((d) => ({
      ...d,
      // searchTarget: [d.name, d.title, d.description].join(" ").toLowerCase(),
    }));
    this.populateFilters();
  }, //close mounted
  computed: {
    filteredProjects() {
      if (!this.plants.length) {
        return [];
      }
      const { SUN } = this.filters;
      const { SORT } = this.params;
      const sortParam = SORT.selected;
      const isSortAsc = SORT.asc;
      // const searchTerm = SEARCH.selected.toLowerCase();

      return this.projects
        .filter(
          (d) =>
          d.hardiness >= HARDINESS.selected[0] &&
          d.hardiness <= HARDINESS.selected[1] &&
          (!SUN.selected.length ||
            SUN.selected.some((tag) => d.tags.includes(sun))) &&
          (!searchTerm || d.searchTarget.indexOf(searchTerm) !== -1)
        )
        .sort((a, b) =>
          isSortAsc ? ascending(a[sortParam], b[sortParam]) : descending(a[sortParam], b[sortParam])
        );
    }
  }, //close computed
  // methods: {
  //   onFilterChange(id, selected) {
  //     if (id === "SUN") {
  //       this.filters = {
  //         ...this.filters,
  //         SUN: {
  //           ...this.filters.SUN,
  //           selected,
  //         },
  //       };
  //     }
  //     if (id === "SUN_TOGGLE") {
  //       this.filters = {
  //         ...this.filters,
  //         SUN: {
  //           ...this.filters.SUN,
  //           selected: [...new Set([...this.filters.SUN.selected, selected])],
  //         },
  //       };
  //     }
  //     if (id === "YEAR") {
  //       this.filters = {
  //         ...this.filters,
  //         YEAR: {
  //           ...this.filters.YEAR,
  //           selected,
  //         },
  //       };
  //     }
  //   },
  //   populateFilters() {
  //     if (!this.plants) {
  //       return;
  //     }
  //     let allSun = [];
  //     for (let i = 0; i < this.plants.length; i++) {
  //       const { sun } = this.projects[i];
  //       allSun = [...allSun, ...sun];
  //       hardinessRange = [
  //         Math.min(hardiness, hardinessRange[0]),
  //         Math.max(hardiness, hardinessRange[1]),
  //       ];
  //     }
  //     this.filters = {
  //       ...this.filters,
  //       SUN: {
  //         ...this.filters.SUN,
  //         options: [...new Set(allSun)].sort(),
  //       },
  //       HARDINESS: {
  //         ...this.filters.HARDINESS,
  //         options: hardinessRange,
  //         selected: hardinessRange,
  //       },
  //     };
  //   } //close methods
  };//close export
</script>
