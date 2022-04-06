<template>
  <nav></nav>
  <div id="page">
    <div class="wrapper">
      <p class="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <card></card>
  </div>
  <!-- <map></map> -->
  </template>

<script>
import nav from './components/nav.vue'
import card from './components/card.vue'
// import map from './components/map.vue'

export default {
  name: 'App',

  components: {
    nav,
    card,
    // map,
  },

  data: () => ({
    //
  }),
}
</script>

<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

   .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
