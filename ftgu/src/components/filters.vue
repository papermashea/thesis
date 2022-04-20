<template>
  <div class="wrapper" id="madLib">
  

      <div class="filter tag-filter">
        <div class="label">Filter by tag</div>
        <el-select
          multiple
          v-model="filterTag.selected"
          @change="(options) => onFilterChange('TAG', options)"
          placeholder="Select project tag(s)"
        >
          <el-option
            v-for="item in filterTag.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>


  </div>
</template>

<script>
export default {
  name: 'input',
  },
  props: {
    filters: Object,
    onFilterChange: Function,
  },
  computed: {
    filterTag() {
      return this.filters.SUN;
    },
    filterTag() {
      return this.filters.SOIL;
    },
    filterTag() {
      return this.filters.MOISTURE;
    },
    filterTag() {
      return this.filters.PH;
    },
    filterSearch() {
      return this.filters.SEARCH;
    },
}

</script>

