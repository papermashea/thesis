<template>
  <el-row class="foot">
    <div class="source">
      <p class="footbar">Source: <a class="nav-links" href="https://pfaf.org/user/Default.aspx" target="_blank">Plants for a Future</a></p>
    </div>
    <div class="to-top">
      <router-link to @click="moveUp" class="nav-links">
        <p class="footbar"> back to top         
          <el-icon class="turn-up"><d-arrow-right /></el-icon>
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
.foot {
 padding: 1% 3% 1% 1%; 
}

.source {
width: 70%;
}

.to-top {
  width: 30%;
  text-align: right;
}

.router-link-active:hover {
  background-color: none;
}

.turn-up {
  transform: rotate(-0.25turn);
}

</style>