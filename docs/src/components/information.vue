<template>
    <div class="wrapper">
     <p class="level-1A" id="top">Find Plant Patterns</p>
      <p class="container">
        Learn about plant <a href="/#/search" class="definition"> types</a>, <a href="/#/search" class="definition"> tolerances</a> and <a href="/#/search" class="definition">uses</a> by exploring patterns within these groups. You can see for yourself what kinds of plants you'd like to see in your garden, and download more information on each plant to take with you out into the world.
      </p>
      <div class="code">
        <div class="legend" id="color">
          <div class="color-legend"></div>
          <div class="label">
            <p class="color-key" id="low">Least edible</p><p class="color-key" id="high">Most edible</p>
          </div>
        </div>
        <div class="legend" id="size">
            <div class="size-legend">
              <div class="circle" id="small"></div>
            </div>
            <div class="size-legend">
              <div class="circle" id="large"></div>
            </div>
          <div class="label">
            <p class="size-key" id="low">Few uses</p><p class="size-key" id="high">Most uses</p>
          </div>
        </div>
      </div>
      <div class="inputs">
        <div class="sun">
          <!-- <textarea 
          class="tag"
          rows="2" 
          cols="4"
          v-model="filterSun.selected" 
          @change="(options) => onFilterChange('SUN', options)"
          placeholder="[light level]"
          >{{filterSun.selected}}</textarea> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    filters: Object,
    onFilterChange: Function,
  }
};
</script>

<style>
.inputs {
  width: 50%;
  float: right;
}

.code {
  width: 50%;
  float: left;
}

.legend {
  margin: 4% 0 0 0;
  width: 100%;
  float: left
}

.legend#size {
  margin: 1% 0 0 0;
}

.label {
  width: 200px;
}

.color-legend {
  width: 200px;
  height: 50px;
  background-image: linear-gradient(to right, var(--low-edible), var(--med-edible), var(--high-edible));
}

.size-legend {
  width: 100px;
  height: 35px;
  float: left;
}

.legend .circle {
  border-radius: 50%;
  background-color: black;
}

#small {
  margin: 15px 0 0 25px;
  height: 5px;
  width: 5px;
}

#large {
  margin: 0 10px 5px 0;
  height: 30px;
  width: 30px;
  float: right;
}

.color-key,
.size-key {
  width: 50%;
  font-size: .7em;
  font-weight: 600;
  float: left;
}

#low {
  text-align: left;
}

#high {
  text-align: right;
}

</style>