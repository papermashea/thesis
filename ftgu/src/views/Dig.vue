<template>
  <Navbar></Navbar>
  <div id="page">
<section>
    <div class="search-filters">
      <el-row class="filter-group">
        <p class="group-label">Environment:</p>
        <FilterEnv :filters="filters" :params="params" :onFilterChange="onFilterChange" :nPlants="{
              filtered: filteredPlants.length,
              all: plants.length,
            }" />
      </el-row>
      <el-row class="filter-group">
        <p class="group-label">Ecology:</p>
        <FilterEco :filters="filters" :params="params" :onFilterChange="onFilterChange" :nPlants="{
              filtered: filteredPlants.length,
              all: plants.length,
            }" />
      </el-row>
      <el-row class="filter-group">
        <p class="search-label">Search for names, uses, cultivation details, or origins:</p>
        <FilterSearch :filters="filters" :params="params" :onFilterChange="onFilterChange" :nPlants="{
              filtered: filteredPlants.length,
              all: plants.length,
              show: plantsLoaded.length, 
            }"/>
      </el-row>
    </div>
    </section>
  <section>
    <div class="search-results">
      <div v-for="(p, index) in plantsLoaded" :key="index" :id="p.id">
        <PlantCard :latinname="p.latinname" :commonname="p.commonname" :synonyms="p.synonyms" :imgthb="p.imgthb" :type="p.type" :hazards="p.hazards" :hardinessuse="p.hardinessuse" :hardiness="p.hardiness" :onFilterChange="onFilterChange" @click="drawer = true; plantPass(p)"/>
      </div>
      <el-drawer v-model="drawer" direction="rtl" size="50%">
        <PlantOverlay v-if="drawer = true"
        v-bind="{plantDetails}"/>
      </el-drawer>
    </div>
  </section>

  <div class="load">
    <p class="level-1 function" id="top" @click="loadMore"><el-icon color="white"><Plus /></el-icon>load more<el-icon color="white"><Plus /></el-icon></p>
  </div>

</div>
  <Footbar></Footbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

const drawer = ref(false);
</script>

<script lang="ts">
import plants from '@/assets/data/plants.json';
import { rollup, ascending, descending } from "d3-array";
import { FILTERS, PARAMS } from "../global";

import Navbar from "@/components/Navbar.vue";
import FilterEnv from "@/components/Filterenv.vue";
import FilterEco from "@/components/Filtereco.vue";
import FilterSearch from "@/components/Filtersearch.vue";
import PlantCard from '@/components/PlantCard.vue';
import PlantOverlay from '@/components/PlantOverlay.vue';
import Footbar from "@/components/Footbar.vue";

export default {
  name: "Dig",
  components: {
    Navbar,
    FilterEnv,
    FilterEco,
    FilterSearch,
    PlantCard,
    PlantOverlay,
    Footbar,
  },
  data() {
    return {
      plants: [],
      filters: FILTERS,
      params: PARAMS,
      search: '',
      length: 60,
    }
  }, //close data
  mounted() {
    this.plants = plants.map((p) => ({
      ...p,
      searchTarget: [p.latinname, p.commonname, p.synonyms, p.edibleuses, p.medicinaluses, p.materialuses, p.tolerances, p.synonyms, p.propdetails, p.cultivationdetails, p.range, p.indigenoususe].join(" ").toLowerCase(),
    }));
    this.populateFilters();
  },
  created() {
    let qp = new URLSearchParams(window.location.search);

    let fs = qp.get('filters');
    if(fs) this.filters = fs.split(',');
  },
  computed: {
    filteredPlants() {
      if (!this.plants.length) {
        return [];
      }
      const { SUN, SOIL, MOISTURE, PH, HARDINESSUSE, HARDINESS, TOLERANCES, GROUP, SIZE, PROP, GROWTH, SCENT, POLLINATORS, SEARCH } = this.filters;
      const { SORT } = this.params;
      const sortParam = SORT.selected;
      const isSortAsc = SORT.asc;
      const searchTerm = SEARCH.selected.toLowerCase();
      // this.updateURL();

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
          (!TOLERANCES.selected.length ||
            TOLERANCES.selected.some((tolOpt) => p.tolerances.includes(tolOpt))) &&
          (!GROUP.selected.length ||
            GROUP.selected.some((groupOpt) => p.group.includes(groupOpt))) &&
          (!SIZE.selected.length ||
            SIZE.selected.some((sizeOpt) => p.size.includes(sizeOpt))) &&
          (!PROP.selected.length ||
            PROP.selected.some((propOpt) => p.prop.includes(propOpt))) &&
          (!GROWTH.selected.length ||
            GROWTH.selected.some((growthOpt) => p.growth.includes(growthOpt))) &&
          (!SCENT.selected.length ||
            SCENT.selected.some((scentOpt) => p.scent.includes(scentOpt))) &&
          (!POLLINATORS.selected.length ||
            POLLINATORS.selected.some((pollinOpt) => p.pollinators.includes(pollinOpt))) &&
          (!searchTerm || p.searchTarget.indexOf(searchTerm) !== -1)
        )
        .sort((a, b) =>
          isSortAsc ? ascending(a[sortParam], b[sortParam]) : descending(a[sortParam], b[sortParam])
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
    plantsLoaded() {
      return this.filteredPlants.slice(0, this.length);
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
      // this.updateURL();
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
      if (id === "TOLERANCES") {
        this.filters = {
          ...this.filters,
          TOLERANCES: {
            ...this.filters.TOLERANCES,
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
    }, //close filterchange function 
    updateURL() {
      let qp = new URLSearchParams();

      if(this.filters.SUN.selected.length > 0) qp.set('sun', this.filters.SUN.selected);
      if(this.filters.MOISTURE.selected.length > 0) qp.set('moisture', this.filters.MOISTURE.selected);
      if(this.filters.SOIL.selected.length > 0) qp.set('soil', this.filters.SOIL.selected);
      if(this.filters.PH.selected.length > 0) qp.set('ph', this.filters.PH.selected);
      if(this.filters.HARDINESSUSE.selected.length > 0) qp.set('ph', this.filters.HARDINESSUSE.selected);
      if(this.filters.TOLERANCES.selected.length > 0) qp.set('tol', this.filters.TOLERANCES.selected);
      
      // history.replaceState(null, null, "?"+qp.toString());

    },
    populateFilters() {
      if (!this.plants) {
        return;
      }
      let sunOpts = [];
      let soilOpts = [];
      let moistureOpts = [];
      let phOpts = [];
      let tolOpts = [];
      let huseOpts = [];
      let hardyRange = [Infinity, -Infinity];

      let groupOpts = [];
      let sizeOpts = [];
      let propOpts = [];
      let growthOpts = [];
      let scentOpts = [];
      let pollinOpts = [];


      for (let i = 0; i < this.plants.length; i++) {
        const { sun, soil, moisture, ph, hardinessuse, tolerances, hardiness, group, size, proptype, growth, scent, pollinators } = this.plants[i];
        sunOpts = [...sunOpts, ...sun].filter(Boolean);
        soilOpts = [...soilOpts, ...soil].filter(Boolean);
        moistureOpts = [...moistureOpts, ...moisture].filter(Boolean);
        phOpts = [...phOpts, ...ph].filter(Boolean);
        huseOpts = [...huseOpts, hardinessuse].filter(Boolean);
        tolOpts = [...tolOpts, ...tolerances].filter(Boolean);
        hardyRange = [
          Math.min(hardiness, hardyRange[0]),
          Math.max(hardiness, hardyRange[1]),
        ];

        groupOpts = [...groupOpts, ...group].filter(Boolean);
        sizeOpts = [...sizeOpts, size].filter(Boolean);
        propOpts = [...propOpts, proptype].filter(Boolean);
        growthOpts = [...growthOpts, growth].filter(Boolean);
        scentOpts = [...scentOpts, scent].filter(Boolean);
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
        TOLERANCES: {
          ...this.filters.TOLERANCES,
          options: [...new Set(tolOpts)],
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
    }, 
    plantPass(o) {
      // console.log(o.id)
      const plantDetails = {
          commonname: o.commonname,
          cultivationcite: o.cultivationcite,
          cultivationdetails: o.cultivationdetails,
          ediblecite: o.ediblecite,
          ediblerating: o.ediblerating,
          edibleuses: o.edibleuses,
          family: o.family,
          flowerendmonth: o.flowerendmonth,
          flowerstartmonth: o.flowerstartmonth,
          flowertype: o.flowertype,
          growth: o.growth,
          habitat: o.habitat,
          hardiness: o.hardiness,
          hardinessuse: o.hardinessuse,
          hazards: o.hazards,
          hazardscite: o.hazardscite,
          height: o.height,
          id: o.id,
          img: o.img,
          imgcreator: o.imgcreator,
          imglink: o.imglink,
          imgthb: o.imgthb,
          indigenoususe: o.indigenoususe,
          latinname: o.latinname,
          leaftype: o.leaftype,
          materialcite: o.materialcite,
          materialrating: o.materialrating,
          materialuses: o.materialuses,
          medicinalcite: o.medicinalcite,
          medicinalrating: o.medicinalrating,
          medicinaluses: o.medicinaluses,
          moisture: o.moisture,
          ovlink: o.ovlink,
          pfaflink: o.pfaflink,
          ph: o.ph,
          pollinators: o.pollinators,
          propdetails: o.propdetails,
          proptype: o.proptype,
          range: o.range,
          scent: o.scent,
          searchTarget: o.searchTarget,
          season: o.season,
          seedendmonth: o.seedendmonth,
          seedstartmonth: o.seedstartmonth,
          size: o.size,
          soil: o.soil,
          sun: o.sun,
          synonyms: o.synonyms,
          tolerances: o.tolerances,
          type: o.type,
          usda: o.usda,
          usdalink: o.usdalink,
          width: o.width,
          wslink: o.wslink,
      }

      // console.log(plantDetails)
      this.plantDetails = plantDetails

      return { plantDetails }
    },
    loadMore() {
      if (this.length > this.filteredPlants.length) return;
      this.length = this.length + 60;
    }
  } //close methods
}; //close export
</script>

<style>
.search-filters {
  grid-column: span 4;
  display: grid;
  position: relative;
  width: 100%;
  height: 20%;
  content-align: center;
    place-items: flex-start;
}

.filter-group {
  position: relative;
  display: flex;
  width: 100%;
  margin: 10px 0px;
}

.plant-counts {
  font-family: var(--technical);
  position: relative;
  display: flex;
  width: 100%;
  margin: 10px 0px;
  font-size: .8em;
}

.group-label {
  width: 10%;
  float: left;
  clear: none;
  margin-top: 20px;
}

.search-label {
  width: 50%;
  float: left;
  clear: none;
  text-align: right;
  padding: 5px 20px;
}

.count-label {
  font-size: 1.4em;
  text-align: right;
  margin: 0;
  padding: 0;
  width: 100%;
}

.results-number {
  font-weight: 800;
}

.filters {
  width: 90%;
  position: relative;
}

.search-field {
  margin-top: 10px;
  width: 20%;
}

.label {
  position: absolute;
  top: 0;
  font-size: .6em;
  font-family: var(--technical);
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

.search-results {
  position: relative;
  grid-column: span 4;
  width: 100%;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
}

.plant-card {
  position: relative;
  float: left;
  padding: 10px;
  display: grid;
  cursor: cell;
}

.load {
  align-items: center;
  background-color: rgba(61, 112, 104, .5);
  background-image: url("@/assets/growth_wh.png");
  background-size: 1920px;
  grid-column: span 4;
  color: black;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
}

.load:hover {
  background-color: var(--highlight);
  cursor: pointer;
}

.function {
  position: relative;
  padding: 5px 0;
  margin: 50% 0;
}

#top {
    font-family: Helvetica Neue;
    font-weight: 200;
    font-size: 1.6em;
    text-transform: uppercase;
}

.level-1  {
  width: 35%;
  background: black;
  color: white;
}

.level-1 .el-icon {
  padding: 0 30px;
  vertical-align: baseline;
}

@media (max-width: 900px) {
  .search-filters {
    height: 500px!important;
  }

  .search-filters,
  .search-results,
  .plant-counts {
    width: max-100%;
    grid-column: span 1;
    display: block;
    margin: 1%;
  }

  .group-label,
  .search-label,
  .search-field {
    width: 90%;
    text-align: left;
  }

  .filter {
    width: 50%;
  }

  .search-results {
    height: auto;
    margin-top: 20%;
  }
  .group-label {
    clear: right;
  }

  .plant-counts,
  .plant-counts p {
    margin: 10px 0 0 0;
    padding: 0;
    text-align: left;
    float: left;
  }

  .load {
    align-items: center;
    background-color: rgba(61, 112, 104, .5);
    background-image: url("@/assets/growth_wh.png");
    grid-column: span 1;
    color: black;
    position: static;
    height: 200px;
    width: 100%;
  }

  .load .level-1 {
    font-size: .8em;
    width: 90%;
    background: black;
    color: white;
    margin: 0;
  }

}
</style>
