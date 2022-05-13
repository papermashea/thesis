<template>
  <el-row class="foot">
    <div class="nav-split" id="source">
      <p class="footbar">Primary source: <a class="nav-links" href="https://pfaf.org/user/Default.aspx" target="_blank">Plants for a Future</a> - 2022</p>
    </div>
    <div class="nav-split" id="direction">
      <router-link to @click="moveUp" class="nav-links">
        <p class="footbar">
          <el-icon class="" id="turn-up"><d-arrow-right /></el-icon>
        </p>

      </router-link>
    </div>
  </el-row>
</template>

<script>
  export default {
    name: 'Footbar',
    methods: {
      moveUp(){
       window.scrollTo(0,0);
     }
    }
  }

</script>

<style>
.router-link-active:hover {
  background-color: none;
}

#turn-up {
  transform: rotate(-0.25turn);
}
</style>