<template>
  <el-row class="foot">
    <div class="nav-split" id="source">
      <p class="footbar" id="footer-link">Primary source: <a class="nav-links" id="#footer-link" href="https://pfaf.org/user/Default.aspx" target="_blank">Plants for a Future</a> - 2022</p>
    </div>
    <div class="nav-split" id="direction">
      <router-link to @click="moveUp" class="nav-links">
        <p class="footbar" id="to-top">
          <el-icon class="nav-item" id="turn-up"><d-arrow-right /></el-icon>
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

#to-top {
  padding-left: 100%;
}

#footer-link {
  font-family: var(--technical)!important;
}

#turn-up {
  transform: rotate(-0.25turn);
}
</style>