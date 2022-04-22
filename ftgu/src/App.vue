<template>
  <router-view />
</template>

<style>
#app {
  margin: 0;
  font-weight: normal;
}

  #page {
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10px;
  }

  .mainNav {
    grid-column: span 4;
    grid-row: span 10;
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
  .hardiness,
  .environment,
  .times {
    grid-column: span 4;
    width: 100%
  }
</style>
