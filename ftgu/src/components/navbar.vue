<template>
  <el-row class="nav">
      <div class="nav-split" id="source">
        <router-link to="/root" class="nav-links">From the ground up</router-link>
      </div>
      <div class="nav-split" id="direction">
        <router-link to="/learn" class="nav-links" id="menu-item">
          <span class="page-name" v-if="isLearn">Learn</span>
          <el-icon class="nav-item"><Histogram /></el-icon>
        </router-link>
        <router-link to="/dig" class="nav-links" id="menu-item">
          <el-icon class="nav-item"><Grid /></el-icon>
          <span class="page-name" v-if="isDig">Dig</span>
        </router-link>
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
.nav, 
.foot {
  font-size: 2em;
}

.nav-split {
  clear: none;
  display: flex;
}

#source {
  margin-left: 5%;
  width: 80%;
}

#direction {
  margin-right: 0 5%;
}

  .nav,
  .foot {
    background-color: black;
    color: white;
    text-decoration: none;
    max-width: 100%;
    padding: 1% 2%; 
  }

  .nav-links,
  .nav-item svg {
    color: white;
  }

  .nav-links#menu-item {
    padding-left: 100%
  }

  .nav-links:hover,
  .nav-item svg:hover {
    color: var(--highlight);
    background-color: black;
    text-decoration: underline;
  }


</style>