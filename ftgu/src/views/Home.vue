<template>
  <Navbar></Navbar>
  <div id="page">

    <Introduction class="intro-img" id="overlay">
      <div class="wrapper" id="intro"></div>
    </Introduction>

    <PlantFlow class="environment"></PlantFlow>

    <div class="PlantForm environment">
      <Form
        :filters="filters"
        :params="params"
        :onFilterChange="onFilterChange"
        :nPlants="{
          all: plants.length,
          filtered: filteredPlants.length,
        }"
      />
      <Graph
        :filters="filters"
        :onFilterChange="onFilterChange"
        :nPlants="{
          all: plants.length,
          filtered: filteredPlants.length,
          med: filteredMed.length,
        }"
      />
    </div>

    <Information />
    <PlantPack 
      class="collection-vis"
      :filters="filters"
      :onFilterChange="onFilterChange"
      :nPlants="{
        all: plants.length,
        filtered: filteredPlants.length,
        med: filteredMed.length,
      }"      

     />
  
  </div>  
  <Footbar></Footbar>
</template>

<script>
import plants from '@/assets/data/plants.json';
import { rollup, ascending, descending } from "d3-array";
import { FILTERS, PARAMS } from "../global";

import Navbar from "@/components/Navbar.vue";
import Introduction from "@/components/introduction.vue";
import introImage from "@/assets/mapPreview.png"
import PlantFlow from "@/components/PlantFlow.vue";
import Form from "@/components/Form.vue";
import Graph from "@/components/Graph.vue";
import Information from "@/components/Information.vue";
import PlantPack from "@/components/PlantPack.vue";
import Footbar from "@/components/Footbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Introduction,
    PlantFlow,
    Form,
    Graph,
    Information,
    PlantPack,
    Footbar,
  },
  data() {
    return {
      plants: [],
      filters: FILTERS,
      params: PARAMS,
      search: "",
    }
  }, //close data
  mounted() {
    this.plants = plants.map((p) => ({
      ...p,
      searchTarget: [p.edibleuses, p.medicinaluses, p.materialuses, p.synonyms, p.propdetails, p.cultivationdetails, p.range, p.indigenoususe].join(" ").toLowerCase(),
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
    filteredMed(){
      if (!this.filteredPlants.length) {
        return [];
      }
      return this.filteredPlants.filter(m => m.medicinalrating > 0);
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
        const { sun, soil, moisture, ph, hardinessuse, hardiness, group, size, prop, growth, aromatic, pollinators } = this.plants[i];
          sunOpts = [...sunOpts, ...sun];
          soilOpts = [...soilOpts, ...soil];
          moistureOpts = [...moistureOpts, ...moisture];
          phOpts = [...phOpts, ...ph];
          huseOpts = [...huseOpts, hardinessuse];
          hardyRange = [
            Math.min(hardiness, hardyRange[0]),
            Math.max(hardiness, hardyRange[1]),
          ];

          groupOpts = [...groupOpts, ...group];
          sizeOpts = [...sizeOpts, size];
          propOpts = [...propOpts, prop];
          growthOpts = [...growthOpts, growth];
          scentOpts = [...scentOpts, aromatic];
          pollinOpts = [...pollinOpts, ...pollinators];

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
  }//close methods
};//close export
</script>

<style>
.intro-img {
  box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.6);
  width: 100%;
  height: 300px;
  background: url(@/assets/mapPreview.png);
  background-repeat: no-repeat, repeat;
}

.notShown {
  visibility: hidden !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ol {
  list-style: none;
}

.container {
  max-width: 1000px;
  padding: 2%;
  margin: 0 auto;
  text-align: center;
}

.rectangle {
  position: relative;
  padding: 5px;
}


#top {
    font-family: Helvetica Neue;
    font-weight: 200;
    font-size: 1.6em;
    text-transform: uppercase;
}

#nested {
    font-family: Helvetica Neue;
    font-weight: 100;
    font-size: 1.6em;
    text-transform: uppercase;
}

.level-1,
.level-1A  {
  width: 35%;
  background: black;
  color: white;
}

.level-1A {
  margin: 0 auto 20px;
}

.level-1 {
  margin: 0 auto 220px;
}

.level-1::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: .5px;
  height: 200px;
  background: black;
}

.level-2-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.level-2-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 12.5%;
  width: 75%;
  height: 1px;
  background: black;
}

.level-2-wrapper::after {
  display: none;
  content: "";
  position: absolute;
  left: -20px;
  bottom: -20px;
  width: calc(100% + 20px);
  height: 1px;
  background: black;
}

.level-2-wrapper li {
  position: relative;
}

.level-2-wrapper > li::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: .5px;
  height: 20px;
  background: black;
}

.level-2 {
  width: 70%;
  margin: 0 auto;
}

.plant-form {
  width: 40%;
  clear: none;
  float: left;
}

.plant-form-subset {
  width: 60%;
  clear: none;
  float: left;
}

.libForm {
  width: 100%;
  margin: 0;
}

.field,
.oneline {
  display: inline;
}

.copy {
  text-align: left;
  width: 80%;
}

@media screen and (max-width: 700px) {
  .rectangle {
    padding: 20px 10px;
  }

  .level-1,
  .level-2 {
    width: 100%;
  }

  .level-1 {
    margin-bottom: 20px;
  }

  .level-1::before,
  .level-2-wrapper > li::before {
    display: none;
  }
  
  .level-2-wrapper,
  .level-2-wrapper::after,
  .level-2::after {
    display: block;
  }

  .level-2-wrapper {
    width: 100%;
    margin: 0%;
  }

  .level-2-wrapper::before {
    left: -20px;
    width: .5px;
    height: calc(100% + 40px);
  }

  .level-2-wrapper > li:not(:first-child) {
    margin-top: 50px;
  }
}
</style>