<template>
  <div id ="app">
      <Home />
      <Nav :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
        <img class="img" src="../assets/logo.png" alt="" srcset="" />
      </Nav>
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Nav from "vue-nav-ui";

export default {
  name: 'App',
  components: {
    Home,
    Nav,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
