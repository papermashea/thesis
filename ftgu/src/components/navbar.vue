<template>
  <el-row class="nav">
      <div class="nav-split" id="source">
        <a class="nav-links" href="/root">From the ground up</a>
      </div>
      <div class="nav-split" id="direction">
        <a class="nav-links" id="menu-item" href="/learn">
          <span class="page-name" v-if="isLearn">Learn</span>
          <el-icon class="nav-item"><Histogram /></el-icon>
        </a>
        <a class="nav-links" id="menu-item" href="/dig">
          <el-icon class="nav-item"><Grid /></el-icon>
          <span class="page-name" v-if="isDig">Dig</span>
        </a>
<!--         <a class="nav-links" id="menu-item" href="/root">Roots <el-icon class="nav-item"><House /></el-icon></a> -->
      </div>
  </el-row>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
    isLearn: Function,
    isDig: Function,
    }
  }

</script>

<style>
.nav-split {
  clear: none;
  display: flex;
  width: 40%;
}

#source {
  width: 70%;
}

#direction {
  width: 30%;
  text-align: right;
}

  .nav,
  .foot {
    background-color: black;
    color: white;
    text-decoration: none;
    max-width: 100%;
    padding: 1% 3%; 
  }

  .nav-links,
  .nav-item svg {
    color: white;
  }

  .nav-links:hover,
  .nav-item svg:hover {
    color: var(--highlight);
    background-color: black;
    text-decoration: underline;
  }

</style>