<template>
  <navbar class="mainNav"></navbar>
  <div id="page">
    <div class="filter-group">
      <p class="filter-row">Environment:</p>
        <div class="filter-group">
          <Filters
            :filters="filters"
            :params="params"
            :onFilterChange="onFilterChange"
            :nPlants="{
              filtered: filteredPlants.length,
              all: plants.length,
            }"
          :hardyData="hardyData"
          />

        </div>
    </div>
    <div class="filter-group">
      <p class="filter-row">Search:</p>
        <Searchbar
          :filters="filters"
          :params="params"
          :onFilterChange="onFilterChange"
          :nPlants="{
            filtered: filteredPlants.length,
            all: plants.length,
          }"
        :hardyData="hardyData"
        />
    </div>
    <div class="plantCards">
      <b-card-group>
        <!-- <span v-for="p in searchedPlants"> -->
        <span v-for="p in filteredPlants">
          <plantCard 
            class="plant-card"
            :latinname="p.latinname"
            :commonname="p.commonname"
            :synonyms="p.synonyms"
            :imgthb="p.imgthb"
            :type="p.type"
            :proptype="p.proptype"
            :edibilityrating="p.edibilityrating"
            :onFilterChange="onFilterChange"
          >
          </plantCard>
        </span>
      </b-card-group>
    </div>
  </div>
  <!--   <footbar></footbar> -->
</template>

<script>
import plants from '@/assets/data/plants.json';
import { rollup, ascending, descending } from "d3-array";
import { ENVFILTERS, PARAMS } from "../global";

import navbar from "@/components/navbar.vue";
import Filters from "@/components/Filters.vue";
import Searchbar from "@/components/Searchbar.vue";
import plantCard from '@/components/plantCard.vue';
import footbar from "@/components/footbar.vue";


// console.log(plantData)
  // console.log(Object.keys(plantData.plants).length)
console.log(plants)

const FILTER_HEIGHT = 40;

export default {
  name: "Search",

  components: {
    navbar,
    Filters,
    Searchbar,
    plantCard,
    footbar,
  },
  data() {
    return {
      // plants: plantData,
      plants: [],
      filters: ENVFILTERS,
      params: PARAMS,
      envFilters: ["sun", "moisture", "soil", "ph"],
      ecoFilters: ["type", "size", "pollinators", "growth", "tolerances"],
      search: "",
    }
  }, //close data
  mounted() {
    this.plants = plants.map((p) => ({
      ...p,
      searchTarget: [p.edibleuses, p.medicinaluses, p.materialuses, p.synonyms, p.propdetails, p.cultivationdetails].join(" ").toLowerCase(),
    }));
    this.populateFilters();
  },
  computed: {
    // searchedPlants() {
    //   return this.plants.filter(p =>
    //     p.edibleuses.toLowerCase().includes(this.search.toLowerCase()),
    //   );
    // },
    filteredPlants() {
      if (!this.plants.length) {
        return [];
      }
      const { SUN, SOIL, MOISTURE, PH, HARDINESS, SEARCH } = this.filters;
      const { SORT } = this.params;
      const sortParam = SORT.selected;
      const isSortAsc = SORT.asc;
      const searchTerm = SEARCH.selected.toLowerCase();

      return this.plants
        .filter(
          (p) =>
            p.hardiness >= HARDINESS.selected[0] &&
            p.hardiness <= HARDINESS.selected[1] &&
            (!SUN.selected.length ||
              SUN.selected.some((sunOpt) => p.sun.includes(sunOpt))) &&
            (!SOIL.selected.length ||
              SOIL.selected.some((soilOpt) => p.soil.includes(soilOpt))) &&
            (!MOISTURE.selected.length ||
              MOISTURE.selected.some((moistureOpt) => p.moisture.includes(moistureOpt))) &&
            (!PH.selected.length ||
              PH.selected.some((phOpt) => p.ph.includes(phOpt))) &&
            (!searchTerm || p.searchTarget.indexOf(searchTerm) !== -1)
        )
        .sort((a, b) =>
          isSortAsc
            ? ascending(a[sortParam], b[sortParam])
            : descending(a[sortParam], b[sortParam])
        );
    },
    hardyData() {
      if (!this.plants.length) {
        return {
          filtered: [],
          all: [],
        };
      }
      const unfilteredHardyData = [
        ...rollup(
          this.plants,
          (values) => values.length,
          (p) => p.hardiness
        ),
      ].sort((a, b) => a[0] - b[0]);
      const filteredHardyMap = rollup(
        this.filteredPlants,
        (values) => values.length,
        (p) => p.hardiness
      );
      // left join on unfiltered so every year has an entry, even if count is 0
      const filteredHardyData = unfilteredHardyData.map(([hardiness]) => [
        hardiness,
        filteredHardyMap.get(hardiness) || 0,
      ]);
      return {
        filtered: filteredHardyData,
        all: unfilteredHardyData,
      };
    },
  }, //close computed
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
      if (id === "SOIL") {
        this.filters = {
          ...this.filters,
          SOIL: {
            ...this.filters.SOIL,
            selected,
          },
        };
      }
      if (id === "MOISTURE") {
        this.filters = {
          ...this.filters,
          MOISTURE: {
            ...this.filters.MOISTURE,
            selected,
          },
        };
      }
      if (id === "PH") {
        this.filters = {
          ...this.filters,
          PH: {
            ...this.filters.PH,
            selected,
          },
        };
      }
      if (id === "HARDINESS") {
        this.filters = {
          ...this.filters,
          HARDINESS: {
            ...this.filters.HARDINESS,
            selected,
          },
        };
      }
      if (id === "SEARCH") {
        this.filters = {
          ...this.filters,
          SEARCH: {
            ...this.filters.SEARCH,
            selected,
          },
        };
      }
      if (id === "SORT") {
        this.params = {
          ...this.params,
          SORT: {
            ...this.params.SORT,
            selected,
            asc: true,
          },
        };
      }
      if (id === "SORT_DIRECTION") {
        this.params = {
          ...this.params,
          SORT: {
            ...this.params.SORT,
            asc: !this.params.SORT.asc,
          },
        };
      }
    }, //close function 
    populateFilters() {
      if (!this.plants) {
        return;
      }
      let sunOpts = [];
      let soilOpts = [];
      let moistureOpts = [];
      let phOpts = [];
      let hardyRange = [Infinity, -Infinity];

      for (let i = 0; i < this.plants.length; i++) {
        const { sun, soil, moisture, ph, hardiness } = this.plants[i];
        sunOpts = [...sunOpts, ...sun];
        soilOpts = [...soilOpts, ...soil];
        moistureOpts = [...moistureOpts, ...moisture];
        phOpts = [...phOpts, ...ph];
        hardyRange = [
          Math.min(hardiness, hardyRange[0]),
          Math.max(hardiness, hardyRange[1]),
        ];
      }
      this.filters = {
        ...this.filters,
        SUN: {
          ...this.filters.SUN,
          options: [...new Set(sunOpts)],
        },
        SOIL: {
          ...this.filters.SOIL,
          options: [...new Set(soilOpts)],
        },
        MOISTURE: {
          ...this.filters.MOISTURE,
          options: [...new Set(moistureOpts)],
        },
        PH: {
          ...this.filters.PH,
          options: [...new Set(phOpts)],
        },
        HARDINESS: {
          ...this.filters.HARDINESS,
          options: hardyRange,
          selected: hardyRange,
        },
      };
    }//close function
  }//close methods
};//close export
</script>

<style>
.search-filters {
  grid-column: span 4;
  display: block;
  height: 600px;
  width: 100%;
  margin: 0 10%;
}

.plantCards {
  display: block;
  grid-column: span 4;
  width: 100%;
  margin: 10%;
}
</style>
