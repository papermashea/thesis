<template>
  <div class="filters">
    <el-col>
      <!-- SEARCH FILTER -->
      <div class="filter search-filter">
        <el-input
          placeholder="i.e. vegetable"
          clearable
          v-model="filterSearch.selected"
          @change="(text) => onFilterChange('SEARCH', text)"
        />
      </div>
    </el-col>
    <el-col>
      <div class="plant-counts">
         {{ nPlants.filtered }} potential plants
      </div>
    </el-col>

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
