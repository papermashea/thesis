<template>
  <div class="filters">
    <el-row>
      <!-- SUN FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterSun.selected.length > 0">sun</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterSun.selected"
          @change="(options) => onFilterChange('SUN', options)"
          placeholder="sun"
          class="sun"
        >
          <el-option
            v-for="item in filterSun.options"
            class="sun"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- MOISTURE FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label"  v-show="filterMoisture.selected.length > 0">moisture</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterMoisture.selected"
          @change="(options) => onFilterChange('MOISTURE', options)"
          placeholder="moisture"
          class="moisture"
        >
          <el-option
            v-for="item in filterMoisture.options"
            class="moisture"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- SOIL FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterSoil.selected.length > 0">soil</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterSoil.selected"
          @change="(options) => onFilterChange('SOIL', options)"
          placeholder="soil type"
          class="soil"
        >
          <el-option
            v-for="item in filterSoil.options"
            class="soil"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- PH FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterPh.selected.length > 0">pH level</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterPh.selected"
          @change="(options) => onFilterChange('PH', options)"
          placeholder="ph"
          class="ph"
        >
          <el-option
            v-for="item in filterPh.options"
            class="ph"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- HARDINESS GROUP FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterHuse.selected.length > 0">hardiness application</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterHuse.selected"
          @change="(options) => onFilterChange('HARDINESSUSE', options)"
          placeholder="where to grow?"
          class="hardy"
        >
          <el-option
            v-for="item in filterHuse.options"
            class="hardy"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- TOLERANCES FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterTol.selected.length > 0">tolerances</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterTol.selected"
          @change="(options) => onFilterChange('TOLERANCES', options)"
          placeholder="tolerances"
          class="tol"
        >
          <el-option
            v-for="item in filterTol.options"
            class="tol"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- HARDINESS RANGE FILTER -->
<!--       <div class="filter oneline">
        <el-slider 
        show-input 
        :hardyData="hardyData"
        :onHardyChange="(selection) => onFilterChange('HARDINESS', selection)"
        v-model="filterHardiness.selected"
        size="small" />
      </div> -->

    </el-row>
  </div>
</template>

<script>
export default {
  name: "FilterEnv",
  props: {
    filters: Object,
    params: Object,
    onFilterChange: Function,
    nPlants: Object,
    hardyData: Object,
  },
  data() {
    return {
    };
  },
  computed: {
    filterSun() {
      return this.filters.SUN;
    },
    filterSoil() {
      return this.filters.SOIL;
    },
    filterMoisture() {
      return this.filters.MOISTURE;
    },
    filterPh() {
      return this.filters.PH;
    },
    filterSearch() {
      return this.filters.SEARCH;
    },  
    filterHuse() {
      return this.filters.HARDINESSUSE;
    },
    filterTol() {
      return this.filters.TOLERANCES;
    },
    // filterHardiness() {
    //   return this.filters.HARDINESS;
    // },
  },//close computed
};
</script>
