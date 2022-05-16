<template>
  <div class="plant-form">
    <!-- SUN FILTER -->
    <div class="field">
      <p class="mad-lib">I have
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
    </div>

    <!-- MOISTURE+SOIL FILTER -->
    <div class="field">
      <p class="mad-lib">and
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
    </div>

    <!-- PH LEVEL -->
    <div class="field">
      <p class="mad-lib">and
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
     </div>

    <!-- HARDINESS+TOLERANCES GROUP FILTER -->
    <div class="field">
      <p class="mad-lib">I'd like plants that are
      <div class="filter tag-filter oneline">
        <el-select
          multiple
          collapse-tags
          v-model="filterHuse.selected"
          @change="(options) => onFilterChange('HARDINESSUSE', options)"
          placeholder="grown..."
        >
          <el-option
            v-for="item in filterHuse.options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      </p> 
    </div>
    <div class="field">
      <p class="mad-lib">and
        <el-select
          multiple
          collapse-tags
          v-model="filterTol.selected"
          @change="(options) => onFilterChange('TOLERANCES', options)"
          placeholder="somewhat..."
          class="tol"
        >
          <el-option
            v-for="item in filterTol.options"
            class="tol"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select> tolerant.</p>
    </div>

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
    filterHuse() {
      return this.filters.HARDINESSUSE;
    },
    filterTol() {
      return this.filters.TOLERANCES;
    },
  },//close computed
};
</script>

<style>
.plant-form {
  width: 40%;
  clear: none;
  float: left;
}

.plant-form-subset {
  width: 60%;
  clear: none;
  float: left;
}

.div#field {
  margin-bottom: 30px;
}

.field {
  display: inline-block;
  float: left;
  text-align: left;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
}

</style>