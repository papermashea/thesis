<template>
  <div class="wrapper" id="madLib">
    <el-row>
      <p class="copy">I have 
        <div class="filter sun-filter">
          <el-select
            multiple
            v-model="filterSun.selected"
            @change="(options) => onFilterChange('SUN', options)"
            placeholder="partial"
          >
            <el-option
              v-for="item in filterSun.options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
      sun </p>
</el-row>

  </div>
</template>

<script>
export default {
  name: 'form',
  },
  props: {
    filters: Object,
    // onFilterChange: Function,
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

