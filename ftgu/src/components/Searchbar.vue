<template>
  <div class="filters">
    <el-row>
      <!-- SEARCH FILTER -->
      <div class="filter search-filter">
        <div class="label">Search plants</div>
        <el-input
          placeholder="Type plant uses, synonyms, or cultivation methods"
          clearable
          v-model="filterSearch.selected"
          @change="(text) => onFilterChange('SEARCH', text)"
        />
      </div>
    </el-row>
  </div>
</template>

<script>
const FILTER_HEIGHT = 40;

export default {
  name: "Searchbar",
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
    sortIcon() {
      if (this.paramSort.asc) {
        return "el-icon-sort-down";
      }
      return "el-icon-sort-up";
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
