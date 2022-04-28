<template>
  <div class="wrapper">
    <div class="intro-text">  
      <p>
      Want to grow your own food? It can be hard to know where to start. From the ground up explores plant data collected by the environmentalists at <a href="https://pfaf.org/">Plants for a Future</a>, an organization dedicated to researching and providing information on ecologically sustainable horticulture. The plants explored here are all edible and suitable for growing indoors or outdoors in a <a href="https://en.wikipedia.org/wiki/Temperate_climate">temperate climate</a>. As you're learning about potential plants, make sure you talk to other plant people and get growing in your community.
      </p>
      <a href="https://greenthumb.nycgovparks.org/gardensearch.php" target="_blank" id="external">
        <button type="button" class="btn btn-light">Find a Community Garden</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduction",
};
</script>

<style>
.intro-text {
  display: flex;
  margin-top: 10%;
  background-color: rgba(255,255,255,.5);
}
</style>