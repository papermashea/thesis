<template>
  <div class="filter-group">
    <p class="filter-row">Environment:</p>
    <el-row>
      <Filters
        v-bind="{ data: filters}"
        :filters="filters"
        :onFilterChange="onFilterChange"
        :nPlants="{
          filtered: filteredPlants.length,
          all: plants.length,
        }"
      />
    </el-row>
<!--     <el-row>
      <Plants
        :height="height"
        :width="width"
        :plants="filteredPlants"
        :onFilterChange="onFilterChange"
      />
    </el-row> -->
  </div>
</template>

<script>
import * from "d3-array";
import plants from '@/assets/data/plants.json';
import { FILTERS } from "../global";

// import Multiselect from 'vue-multiselect'
// import Dropdown from '@/components/Dropdown.vue'
import Filters from "@/components/Filters.vue";

export default {
  name: 'Searchcards',
  components: {
    Filters,
  },
  props: {
  },
  data() {
    return {
      plants: [],
      // filters: FILTERS,
      filters: {
        SUN: {
          type: "MULTI_SELECT",
          options: [],
          selected: [],
        },
        SOIL: {
          type: "MULTI_SELECT",
          options: [],
          selected: [],
        },
        MOISTURE: {
          type: "MULTI_SELECT",
          options: [],
          selected: [],
        },
        PH: {
          type: "MULTI_SELECT",
          options: [],
          selected: [],
        },
        SEARCH: {
          type: "TEXT",
          selected: "",
        },
      };
    }
  }, //close data
  mounted() {
    this.plants = plants.map((d) => ({
      ...d,
      searchTarget: [d.edibleuses, d.medicinaluses, d.materialuses, d.synonyms, d.propdetails, d.cultivationdetails].join(" ").toLowerCase(),
    }));
    this.populateFilters();
  },
  computed: {
    filteredPlants() {
      if (!this.plants.length) {
        return [];
      }
      const { SUN} = this.filters;
      // const { SUN, SOIL, MOISTURE, PH, SEARCH } = this.filters;
      // const searchTerm = SEARCH.selected.toLowerCase();

      return this.plants
        .filter(
          (d) =>
            (!SUN.selected.length ||
              SUN.selected.some((sun) => d.sun.includes(sun)))
            // (!SOIL.selected.length ||
            //   SOIL.selected.some((soil) => d.soil.includes(soil))) &&
            // (!MOISTURE.selected.length ||
            //   MOISTURE.selected.some((moisture) => d.moisture.includes(moisture))) &&
            // (!PH.selected.length ||
            //   PH.selected.some((ph) => d.ph.includes(ph))) &&
            // (!searchTerm || d.searchTarget.indexOf(searchTerm) !== -1)
        )
        // .sort((a, b) =>
        //   isSortAsc
        //     ? ascending(a[sortParam], b[sortParam])
        //     : descending(a[sortParam], b[sortParam])
        // );
    },
  },//close computed
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
      // if (id === "SOIL") {
      //   this.filters = {
      //     ...this.filters,
      //     SOIL: {
      //       ...this.filters.SOIL,
      //       selected,
      //     },
      //   };
      // }
      // if (id === "MOISTURE") {
      //   this.filters = {
      //     ...this.filters,
      //     MOISTURE: {
      //       ...this.filters.MOISTURE,
      //       selected,
      //     },
      //   };
      // }
      // if (id === "PH") {
      //   this.filters = {
      //     ...this.filters,
      //     PH: {
      //       ...this.filters.PH,
      //       selected,
      //     },
      //   };
      // }
      // if (id === "SEARCH") {
      //   this.filters = {
      //     ...this.filters,
      //     SEARCH: {
      //       ...this.filters.SEARCH,
      //       selected,
      //     },
      //   };
      // }
    },
    populateFilters() {
      if (!this.plants) {
        return;
      }
      let sunOpts = [];
      // let soilOpts = [];
      // let moistureOpts = [];
      // let phOpts = [];

      for (let i = 0; i < this.plants.length; i++) {
        const { sun, soil, moisture, ph } = this.plants[i];
        sunOpts = [...sunOpts, ...sun];
        // soilOpts = [...soilOpts, ...soil];
        // moistureOpts = [...moistureOpts, ...moisture];
        // phOpts = [...phOpts, ...ph];
      }
      this.filters = {
        ...this.filters,
        SUN: {
          ...this.filters.SUN,
          options: [...new Set(sunOpts)],
        },
        // SOIL: {
        //   ...this.filters.SOIL,
        //   options: [...new Set(soilOpts)],
        // },
        // MOISTURE: {
        //   ...this.filters.MOISTURE,
        //   options: [...new Set(moistureOpts)],
        // },
        // PH: {
        //   ...this.filters.PH,
        //   options: [...new Set(phOpts)],
        // },
      };
    }//close function
  }//close methods
};

</script>

<style>

.libForm {
  width: 100%;
  margin: 0;
}

.oneline {
  display: inline;
}

</style>