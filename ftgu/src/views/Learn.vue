<template>
<!--   <el-affix target=".intro-img"> -->
    <Navbar></Navbar>
<!--   </el-affix> -->

  <div id="page">
    <div class="banner"></div>
    <section>
      <PlantFlow></PlantFlow>
    </section>
    
    <section>
      <div class="PlantForm">
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
          :query="queries"
        />
      </div>
    </section>
    <section>
    <Information 
      :filters="filters"
      :onFilterChange="onFilterChange"
    />
    <Tooltip />
    <PlantPack 
      class="collection-vis"
      :onFilterChange="onFilterChange"
      v-bind="{ data: group }"
     />    
  </section>
</div>  
  <Footbar></Footbar>
</template>

<script>
import plants from '@/assets/data/plants.json';
import * as d3 from 'd3';
import { rollup, group, flatGroup, index, ascending, descending } from "d3-array";
import { hierarchy, pack } from 'd3-hierarchy'
import { FILTERS, PARAMS } from "../global";

import Navbar from "@/components/Navbar.vue";
import Introduction from "@/components/Introduction.vue";
import PlantFlow from "@/components/PlantFlow.vue";
import Form from "@/components/Form.vue";
import Graph from "@/components/Graph.vue";
import Information from "@/components/Information.vue";
import Tooltip from '@/components/Tooltip.vue'
import PlantPack from "@/components/PlantPack.vue";
import Footbar from "@/components/Footbar.vue";

export default {
  name: "Learn",

  components: {
    Navbar,
    Introduction,
    PlantFlow,
    Form,
    Graph,
    Information,
    PlantPack,
    Tooltip,
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
      searchTarget: [p.edibleuses, p.medicinaluses, p.materialuses, p.synonyms, p.propdetails, p.cultivationdetails, p.tolerances, p.range, p.indigenoususe].join(" ").toLowerCase(),
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
      const { SUN, SOIL, MOISTURE, PH, HARDINESSUSE, HARDINESS, TOLERANCES, GROUP, SEARCH } = this.filters;
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
            (!searchTerm || p.searchTarget.indexOf(searchTerm) !== -1)
        )
        .sort((a, b) =>
          isSortAsc
            ? ascending(a[sortParam], b[sortParam])
            : descending(a[sortParam], b[sortParam])
        )
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
      // left join on unfiltered so every range has an entry, even if count is 0
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
    group(){
      if (!this.filteredPlants.length) {
        return [];
      }
      const gPlants = group(
        this.filteredPlants,
          p => p.type,
      )
       return gPlants
        // console.log(gPlants)
    },
    queries(){
      let qp = new URLSearchParams();

      if(this.filters.SUN.selected.length > 0) qp.set('sun', this.filters.SUN.selected);
      if(this.filters.MOISTURE.selected.length > 0) qp.set('moisture', this.filters.MOISTURE.selected);
      if(this.filters.SOIL.selected.length > 0) qp.set('soil', this.filters.SOIL.selected);
      if(this.filters.PH.selected.length > 0) qp.set('ph', this.filters.PH.selected);
      if(this.filters.HARDINESSUSE.selected.length > 0) qp.set('h', this.filters.HARDINESSUSE.selected);
      if(this.filters.TOLERANCES.selected.length > 0) qp.set('h', this.filters.TOLERANCES.selected);

      this.qp = qp.toString;;

      return qp;
    }
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
      let tolOpts = [];
      let hardyRange = [Infinity, -Infinity];

      let groupOpts = [];

      for (let i = 0; i < this.plants.length; i++) {
        const { sun, soil, moisture, ph, hardinessuse, hardiness, tolerances, group } = this.plants[i];
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
      };
    },//close function
    updateURL() {
      let up = new URLSearchParams();

      if(this.filters.SUN.selected.length > 0) up.set('sun', this.filters.SUN.selected);
      if(this.filters.MOISTURE.selected.length > 0) up.set('moisture', this.filters.MOISTURE.selected);
      if(this.filters.SOIL.selected.length > 0) up.set('soil', this.filters.SOIL.selected);
      if(this.filters.PH.selected.length > 0) up.set('ph', this.filters.PH.selected);
      if(this.filters.HARDINESSUSE.selected.length > 0) up.set('h', this.filters.HARDINESSUSE.selected);
      if(this.filters.TOLERANCES.selected.length > 0) up.set('tol', this.filters.TOLERANCES.selected);
      
      history.pushState(null, null, "?"+up.toString());

    },
  }//close methods
};//close export
</script>

<style>

.cluster {
  max-width: 950px;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
}

.circle-pack {
  margin-top: -50px;
}

@media screen and (max-width: 900px) {
  .banner {
      align-items: center;
      background-color: rgba(61, 112, 104, .5);
      background-image: url("@/assets/growth_wh.png");
      grid-column: span 1;
      color: black;
      position: static;
      height: 100px;
      width: 100%;
  }

  .rectangle {
    padding: 20px 10px;
  }

  .level-1,
  .level-2 {
    width: 90%;
  }

  .level-1 {
    margin-bottom: 20px;
  }

  .level-1::before,
  .level-2-wrapper > li::before {
    display: none;
  }

  .level-2-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .level-2-wrapper,
  .level-2-wrapper::after,
  .level-2::after {
    display: block;
  }

  .level-2-wrapper {
    width: 100%;
    margin: 0% 0% 10% 0%;
  }

  .level-2-wrapper::before {
    left: -20px;
    width: .5px;
    height: calc(100% + 40px);
  }

  .level-2-wrapper > li:not(:first-child) {
    margin-top: 50px;
  }

  #top {
      font-size: 1.2em;
  }

  #nested {
      font-size: 1em;
  }

  .plant-form {
    content-align: center;
    width: 100%;
  }

  .plant-form-subset {
    width: 100%;
  }

  .graphCol, 
  .numCol {
    width: 90%;    
    margin: 3% 5%;
  }

  .num-block {
    margin: 0;
    height: 25%;
    width: 100%;
    text-align: middle;
  }

  .num-label {
    margin-left: 0;
    width: 100%
  }

  .label-line {
    display: none;
  }

  #pattern .level-2-wrapper::before,
  #pattern .level-2-wrapper::after {
    background: none;
  }

  .legend {
    margin: 0;
  }

  .circle-pack svg {
    width: 500px;
    height: 600px;
    viewbox: 0, 0, 500 800;
  }

}

</style>