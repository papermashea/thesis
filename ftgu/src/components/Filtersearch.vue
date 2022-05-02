<template>
  <div class="filters">
    <el-row>
      <!-- SEARCH FILTER -->
      <div class="filter search-filter">
        <el-input
          placeholder="i.e. vegetable"
          clearable
          v-model="filterSearch.selected"
          @change="(text) => onFilterChange('SEARCH', text)"
        />
      </div>
    </el-row>
    <el-row>
      <div class="plant-counts">
         {{ nPlants.filtered }} potential plants
      </div>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Filtersearch",
  props: {
    filters: Object,
    params: Object,
    onFilterChange: Function,
    nPlants: Object,
  },
  data() {
    return {
    };
  },
  computed: {
    filterSearch() {
      return this.filters.SEARCH;
    },  
  },//close computed
};
</script>
