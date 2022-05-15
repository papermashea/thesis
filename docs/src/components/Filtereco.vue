<template>
  <div class="filters">
    <el-row>
      <!-- GROUP FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterGroup.selected.length > 0">plant type</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterGroup.selected"
          @change="(options) => onFilterChange('GROUP', options)"
          placeholder="plant type"
        >
          <el-option
            v-for="item in filterGroup.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- SIZE FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterSize.selected.length > 0">size</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterSize.selected"
          @change="(options) => onFilterChange('SIZE', options)"
          placeholder="size range"
        >
          <el-option
            v-for="item in filterSize.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- PROPAGATION TYPE FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterProp.selected.length > 0">propagation</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterProp.selected"
          @change="(options) => onFilterChange('PROP', options)"
          placeholder="propagation"
        >
          <el-option
            v-for="item in filterProp.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- GROWTH RATE TYPE FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterGrowth.selected.length > 0">growth rate</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterGrowth.selected"
          @change="(options) => onFilterChange('GROWTH', options)"
          placeholder="growth rate"
        >
          <el-option
            v-for="item in filterGrowth.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- SCENT FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterScent.selected.length > 0">aroma</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterScent.selected"
          @change="(options) => onFilterChange('SCENT', options)"
          placeholder="aroma"
        >
          <el-option
            v-for="item in filterScent.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <!-- POLLINATOR FILTER -->
      <div class="filter tag-filter oneline">
        <div class="label" v-show="filterPollin.selected.length > 0">pollinators</div>
        <el-select
          multiple
          collapse-tags
          v-model="filterPollin.selected"
          @change="(options) => onFilterChange('POLLINATORS', options)"
          placeholder="pollinators"
        >
          <el-option
            v-for="item in filterPollin.options"
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
export default {
  name: "FilterEco",
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
    filterGroup() {
      return this.filters.GROUP;
    },
    filterSize() {
      return this.filters.SIZE;
    },
    filterProp() {
      return this.filters.PROP;
    },
    filterGrowth() {
      return this.filters.GROWTH;
    },
    filterScent() {
      return this.filters.SCENT;
    },
    filterPollin() {
        // console.log(this.filters.POLLINATORS.options)
        return this.filters.POLLINATORS
      }
  },//close computed
};
</script>
