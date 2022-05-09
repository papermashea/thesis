<template>
  <div class="search-field">
    <div class="filter search-filter">
      <!-- SEARCH FILTER -->
        <el-input
          placeholder="i.e. vegetable"
          clearable
          v-model="filterSearch.selected"
          @change="(text) => onFilterChange('SEARCH', text)"
        />
    </div>
  </div>
  <div class="plant-counts">
         <p class="count-label">Showing {{ nPlants.show }} of {{ nPlants.filtered }} potential plants</p>
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
