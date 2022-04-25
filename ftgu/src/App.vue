<template>
  <router-view />
</template>

<script>
import mitt from 'mitt';
const emitter = mitt();

</script>

<style>
#app {
  margin: 0;
  font-weight: normal;
  font-family: Helvetica Neue;
  font-weight: 200;
}

  #page {
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10px;
  }

  .nav,
  .foot {
    background-color: #000;
    color: #fff;
    text-decoration: none;
    grid-column: span 4;
    grid-row: span 10;
  }
  .nav-links {
    color: #fff;
  }
  .nav-links:hover {
    color: #fff;
    text-decoration: underline;
  }

 .wrapper {
    grid-row: span 100;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    padding: 1rem;
    text-align: center;
  }

  .wrapper,
  .environment,
  .plantCards {
    grid-column: span 4;
    width: 100%
  }

  :root {
    --sun-yellow: rgba(242, 222, 44, 1);
    --moist-blue: rgba(61, 90, 128, 1);
    --soil-sienna: rgba(190, 110, 70, 1);
    --ph-lav: rgba(178, 171, 191, 1);
    --low-edible: rgba(61, 112, 104, 1);
    --med-edible: rgba(32, 195, 135, 1);
    --high-edible: rgba(112, 211, 28, 1);
  }

</style>
