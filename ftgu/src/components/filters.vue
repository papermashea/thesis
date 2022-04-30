<template>
  <div class="filters">
    <el-row>
      <!-- SUN FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label">sun</div>
        <el-select
          multiple
          v-model="filterSun.selected"
          @change="(options) => onFilterChange('SUN', options)"
          placeholder="sun"
        >
          <el-option
            v-for="item in filterSun.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- MOISTURE FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label">moisture</div>
        <el-select
          multiple
          v-model="filterSoil.selected"
          @change="(options) => onFilterChange('MOISTURE', options)"
          placeholder="moisture"
        >
          <el-option
            v-for="item in filterSoil.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- SOIL FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label">soil</div>
        <el-select
          multiple
          v-model="filterMoisture.selected"
          @change="(options) => onFilterChange('SOIL', options)"
          placeholder="soil type"
        >
          <el-option
            v-for="item in filterMoisture.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- PH FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label">pH level</div>
        <el-select
          multiple
          v-model="filterPh.selected"
          @change="(options) => onFilterChange('PH', options)"
          placeholder="ph"
        >
          <el-option
            v-for="item in filterPh.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>


    </el-row>
  </div>
</template>

<script>
const FILTER_HEIGHT = 40;

export default {
  name: "Filters",
  props: {
    filters: Object,
    params: Object,
    onFilterChange: Function,
    nPlants: Object,
    hardyData: Object,
  },
  data() {
    return {
      filterHeight: FILTER_HEIGHT,
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
    filterHardiness() {
      return this.filters.HARDINESS;
    },
  },//close computed
};
</script>

<style scoped>
<style scoped>
.filters {
  width: 80%;
  margin: 0px 10% 20px 10%;
  font-family: "neue-regular";
}
.filters .el-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.label {
  font-size: 11px;
  text-align: left;
  padding-bottom: 5px;
}

.filter {
  margin-top: 10px;
}

.sort-button {
  padding-left: 5px;
}

.search-filter {
  width: 250px;
}
.search-filter input {
  width: 100%;
}

.tag-filter {
  min-width: 250px;
}
.tag-filter .el-select {
  width: 100%;
}

.sort-param {
  width: 250px;
}
.sort-param-content {
  display: flex;
}
.sort-param-content .el-select {
  width: 100%;
}

.project-count {
  font-size: 12px;
  margin-bottom: 10px;
}

@media (max-width: 399px) {
  .filters {
    width: 100%;
    margin: 0px;
  }

  .search-filter,
  .tag-filter,
  .sort-param {
    width: 100%;
  }
}
</style>
