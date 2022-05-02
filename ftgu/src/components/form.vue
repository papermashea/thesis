<template>
  <div class="plant-form">
    <!-- SUN FILTER -->
    <el-row class="field">
      <p class="madLib">I have
        <div class="filter tag-filter oneline">

          <el-select
            multiple
            collapse-tags
            v-model="filterSun.selected"
            @change="(options) => onFilterChange('SUN', options)"
            placeholder="[light level]"
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

    <!-- MOISTURE FILTER -->
    <el-row class="field">
      <p class="madLib">and
      <div class="filter tag-filter oneline">
        <el-select
          multiple
          collapse-tags
          v-model="filterMoisture.selected"
          @change="(options) => onFilterChange('MOISTURE', options)"
          placeholder="[moisture level]"
        >
          <el-option
            v-for="item in filterMoisture.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select
          multiple
          collapse-tags
          v-model="filterSoil.selected"
          @change="(options) => onFilterChange('SOIL', options)"
          placeholder="[soil type]"
        >
          <el-option
            v-for="item in filterSoil.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      soil </p>
    </el-row>

    <!-- PH LEVEL -->
    <el-row class="field">
      <p class="madLib">and
      <div class="filter tag-filter oneline">
        <el-select
          multiple
          collapse-tags
          v-model="filterPh.selected"
          @change="(options) => onFilterChange('PH', options)"
          placeholder="[acidity]"
        >
          <el-option
            v-for="item in filterPh.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      pH.</p>
    </el-row>

    <!-- HARDINESS GROUP FILTER -->
    <el-row class="field">
      <p class="madLib">I'd like plants that are
      <div class="filter tag-filter oneline">
        <el-select
          multiple
          collapse-tags
          v-model="filterHuse.selected"
          @change="(options) => onFilterChange('HARDINESSUSE', options)"
          placeholder="able to grow..."
        >
          <el-option
            v-for="item in filterHuse.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      .</p>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Form",
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
  },//close computed
};
</script>

<style>
</style>