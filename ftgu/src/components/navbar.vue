<template>
  <div>
    <nav class="navbar sticky-top">
      <a class="navbar-home" href="#">From the Ground Up</a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
  }

</script>

<style>
  .navbar {
    background-color: #000;
  }

  .navbar-home {
    color: #fff;
  }

  .navbar-home:hover {
    color: #fff;
    text-decoration: underline;
  }  

</style>
