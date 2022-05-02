<template>
    <div class="wrapper">
     <p class="level-1A" id="top">Find Plant Patterns</p>
      <p class="container">
        Learn about plant <a href="/#/search" class="definition"> types</a>, <a href="/#/search" class="definition"> tolerances</a> and <a href="/#/search" class="definition">uses</a> by exploring patterns within these groups. You can see for yourself what kinds of plants you'd like to see in your garden, and download more information on each plant to take with you out into the world.
      </p>
      <div class="legend">
        <div class="gradient"></div>
        <p class="color-key" id="low">Useful</p><p class="color-key" id="high">Most useful</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style>
.legend {
  margin: 5% 0 0 0;
}
.gradient {
  width: 200px;
  height: 50px;
  background-image: linear-gradient(to right, var(--low-edible), var(--med-edible), var(--high-edible));
}

.color-key {
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