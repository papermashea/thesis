<template>
  <el-row class="nav">
      <div class="nav-split" id="source">
        <router-link :to="{name:'Root'}" class="nav-links" id="home-link">From the ground up</router-link>
      </div>
      <div class="nav-split" id="direction">
        <router-link :to="{name:'Learn'}" class="nav-links" id="menu-item">
          <span class="page-name" v-if="isLearn">Learn</span>
          <el-icon class="nav-item"><Histogram /></el-icon>
        </router-link>
        <router-link :to="{name:'Dig'}" class="nav-links" id="menu-item">
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
  font-family: var(--technical); 
}

.nav-split {
  clear: none;
  display: flex;
}

#home-link {
  font-family: var(--technical);
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
    font-family: var(--technical);
  }

  .nav-links,
  .nav-item svg {
    color: white;
    font-family: var(--technical); 
  }

  .nav-links#menu-item {
    padding-left: 20%;
  }

  .nav-links:hover,
  .nav-item svg:hover {
    color: var(--highlight);
    font-family: var(--technical);
    background-color: black;
    text-decoration: underline;
  }


@media screen and (max-width: 900px) {
  .nav, 
  .foot {
    font-size: 1.2em;
    font-family: var(--technical); 
  }
  
  .nav-split {
    width: 50%;
    text-align: left;
    float: left;
  }

  .nav-links#menu-item {
    padding-left: 20%;
  }
  
  #source {
    padding: 5px 0;
    margin-left: 5%;
    width: 60%;
    float: left;
  }

  #direction {
    padding: 5px 0;
    margin-left: 4%;
    margin-right: 1%;
    width: 30%;
    float: right;
  }

  #footer-link {
    display: block;
    color: var(--highlight);
    text-align: left;
  }

  #to-top {
    margin-left: 100%;
  }
}



</style>