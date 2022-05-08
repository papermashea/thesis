<template>
  <navbar class="mainNav"></navbar>
  <div id="page">
    <el-row class="search-filters">
      <el-row class="filter-group">
        <p class="group-label">Environment:</p>
          <FilterEnv
            :filters="filters"
            :params="params"
            :onFilterChange="onFilterChange"
            :nPlants="{
              filtered: filteredPlants.length,
              all: plants.length,
            }"
          :hardyData="hardyData"
          />
      </el-row>
      <el-row class="filter-group">
        <p class="group-label">Ecology:</p>
          <FilterEco
            :filters="filters"
            :params="params"
            :onFilterChange="onFilterChange"
            :nPlants="{
              filtered: filteredPlants.length,
              all: plants.length,
            }"
          :hardyData="hardyData"
          />
      </el-row>
      <el-row class="filter-group">
        <p class="search-label">Search for names, uses, cultivation details, or origins:</p>
          <FilterSearch
            :filters="filters"
            :params="params"
            :onFilterChange="onFilterChange"
            :nPlants="{
              all: plants.length,
              filtered: filteredPlants.length,
            }"
          :hardyData="hardyData"
          />
      </el-row>
    </el-row>
    <div class="plant-cards">
      <PlantCard 
        class="plant-card"
        v-for="p in filteredPlants"
        :latinname="p.latinname"
        :commonname="p.commonname"
        :synonyms="p.synonyms"
        :imgthb="p.imgthb"
        :group="p.type"
        :proptype="p.proptype"
        :ediblerating="p.ediblerating"
        :onFilterChange="onFilterChange"
      >
      </PlantCard>
    </div>
  </div>
  <!--   <footbar></footbar> -->
</template>

<script>
// import plants from '@/assets/data/plants_test.json';
import plants from '@/assets/data/plants.json';
import { rollup, ascending, descending } from "d3-array";
import { FILTERS, PARAMS } from "../global";

import Navbar from "@/components/Navbar.vue";
import FilterEnv from "@/components/Filterenv.vue";
import FilterEco from "@/components/Filtereco.vue";
import FilterSearch from "@/components/Filtersearch.vue";
import PlantCard from '@/components/PlantCard.vue';
import Footbar from "@/components/Footbar.vue";


// console.log(plantData)
  // console.log(Object.keys(plantData.plants).length)
// console.log(filteredPlants)

const FILTER_HEIGHT = 40;

export default {
  name: "Search",
  components: {
    Navbar,
    FilterEnv,
    FilterEco,
    FilterSearch,
    PlantCard,
    Footbar,
  },
  data() {
    return {
      // plants: plantData,
      plants: [],
      filters: FILTERS,
      params: PARAMS,
      search: "",
    }
  }, //close data
  mounted() {
    this.plants = plants.map((p) => ({
      ...p,
      searchTarget: [p.latinname, p.commonname, p.synonyms, p.edibleuses, p.medicinaluses, p.materialuses, p.synonyms, p.propdetails, p.cultivationdetails, p.range, p.indigenoususe].join(" ").toLowerCase(),
    }));
    this.populateFilters();
  },
  computed: {
    filteredPlants() {
      if (!this.plants.length) {
        return [];
      }
      const { SUN, SOIL, MOISTURE, PH, HARDINESSUSE, HARDINESS, GROUP, SIZE, PROP, GROWTH, SCENT, POLLINATORS, SEARCH } = this.filters;
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
            (!HARDINESSUSE.selected.length ||
              HARDINESSUSE.selected.some((huseOpt) => p.hardinessuse.includes(huseOpt))) &&
            (!GROUP.selected.length ||
              GROUP.selected.some((groupOpt) => p.group.includes(groupOpt))) &&
            (!SIZE.selected.length ||
              SIZE.selected.some((sizeOpt) => p.size.includes(sizeOpt))) &&
            (!PROP.selected.length ||
              PROP.selected.some((propOpt) => p.prop.includes(propOpt))) &&
            (!GROWTH.selected.length ||
              GROWTH.selected.some((growthOpt) => p.growth.includes(growthOpt))) &&
            (!SCENT.selected.length ||
              SCENT.selected.some((scentOpt) => p.aromatic.includes(scentOpt))) &&
            (!POLLINATORS.selected.length ||
              POLLINATORS.selected.some((pollinOpt) => p.pollinators.includes(pollinOpt))) &&
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
      if (id === "HARDINESSUSE") {
        this.filters = {
          ...this.filters,
          HARDINESSUSE: {
            ...this.filters.HARDINESSUSE,
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
      if (id === "GROUP") {
        this.filters = {
          ...this.filters,
          GROUP: {
            ...this.filters.GROUP,
            selected,
          },
        };
      }
      if (id === "SIZE") {
        this.filters = {
          ...this.filters,
          SIZE: {
            ...this.filters.SIZE,
            selected,
          },
        };
      }
      if (id === "PROP") {
        this.filters = {
          ...this.filters,
          PROP: {
            ...this.filters.PROP,
            selected,
          },
        };
      }
      if (id === "GROWTH") {
        this.filters = {
          ...this.filters,
          GROWTH: {
            ...this.filters.GROWTH,
            selected,
          },
        };
      }
      if (id === "SCENT") {
        this.filters = {
          ...this.filters,
          SCENT: {
            ...this.filters.SCENT,
            selected,
          },
        };
      }
      if (id === "POLLINATORS") {
        this.filters = {
          ...this.filters,
          POLLINATORS: {
            ...this.filters.POLLINATORS,
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
      let huseOpts = [];
      let hardyRange = [Infinity, -Infinity];

      let groupOpts = [];
      let sizeOpts = [];
      let propOpts = [];
      let growthOpts = [];
      let scentOpts = [];
      let pollinOpts = [];


      for (let i = 0; i < this.plants.length; i++) {
        const { sun, soil, moisture, ph, hardinessuse, hardiness, group, size, proptype, growth, aromatic, pollinators } = this.plants[i];
          sunOpts = [...sunOpts, ...sun].filter(Boolean);
          soilOpts = [...soilOpts, ...soil].filter(Boolean);
          moistureOpts = [...moistureOpts, ...moisture].filter(Boolean);
          phOpts = [...phOpts, ...ph].filter(Boolean);
          huseOpts = [...huseOpts, hardinessuse].filter(Boolean);
          hardyRange = [
            Math.min(hardiness, hardyRange[0]),
            Math.max(hardiness, hardyRange[1]),
          ];

          groupOpts = [...groupOpts, ...group].filter(Boolean);
          sizeOpts = [...sizeOpts, size].filter(Boolean);
          propOpts = [...propOpts, proptype].filter(Boolean);
          growthOpts = [...growthOpts, growth].filter(Boolean);
          scentOpts = [...scentOpts, aromatic];
          pollinOpts = [...pollinOpts, ...pollinators].filter(Boolean);

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
        HARDINESSUSE: {
          ...this.filters.HARDINESSUSE,
          options: [...new Set(huseOpts)],
        },
        HARDINESS: {
          ...this.filters.HARDINESS,
          options: hardyRange,
          selected: hardyRange,
        },
        GROUP: {
          ...this.filters.GROUP,
          options: [...new Set(groupOpts)].sort(),
        },
        SIZE: {
          ...this.filters.SIZE,
          options: [...new Set(sizeOpts)],
        },
        PROP: {
          ...this.filters.PROP,
          options: [...new Set(propOpts)].sort(),
        },
        GROWTH: {
          ...this.filters.GROWTH,
          options: [...new Set(growthOpts)].sort(),
        },
        SCENT: {
          ...this.filters.SCENT,
          options: [...new Set(scentOpts)].sort(),
        },
        POLLINATORS: {
          ...this.filters.POLLINATORS,
          options: [...new Set(pollinOpts)].sort(),
        },
      };
    }//close function
    // plantDetails(p) {
    //   const details = {
    //     name: h.data.latinname,
    //     cname: h.data.commonname,
    //     sname: h.data.synonyms,
    //     growth: h.data.growth,
    //     hardinessuse: h.data.hardinessuse,
    //     edible: h.data.ediblerating,
    //     medicinal: h.data.medicinalrating,
    //     material: h.data.materialrating,
    //     value: h.value,
    //   }
    // }
  }//close methods
};//close export
</script>

<style>
.search-filters {
  grid-column: span 4;
  position: relative;
  display: flex;
  height: 20%;
  margin: 0 10%;
}

.filter-group {
  position: relative;
  display: flex;
  width: 100%;
  vertical-align: middle;
  margin: 10px 0px;
}

.group-label {
  width: 10%;
  float: left;
  clear: none;
}

.search-label {
  width: 50%;
  float: left;
  clear: none;
  text-align: right;
  padding-right: 20px;
}

.filters {
  width: 90%;
  position: relative;
}

.label {
  position: absolute;
  top: 0;
  font-size: .6em;
  text-align: left;
}

.tag-filter {
  display: flex;
  width: 15%;
  margin-top: 20px;
}

.tag-filter .el-select {
  width: 98%;
}

.plant-counts {
  width: 100%;
  font-size: .8em;
  text-align: right;
}

.plant-cards {
  position: relative;
  display: flex;
  grid-column: span 4;
  width: 100%;
  margin: 20% 10%;
}

.plant-card {
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  column-gap: 20px;
  row-gap: 20px;
  min-width: 0;
}

@media (max-width: 399px) {
  .filters {
    width: 100%;
    margin: 0px;
  }

  .search-filter,
  .tag-filter {
    width: 100%;
  }
}
</style>
