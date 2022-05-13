<template>
  <Navbar></Navbar>
    <div id="page">
      <div class="wrapper">
        <div class="slide" v-for="(i, index) in garden"> 
          <a target="_blank" :href="i.thumbnail"><el-image class="slide" :src="i.thumbnail" lazy></el-image></a>
        </div>
      </div>
    </div>
  <Footbar></Footbar>
</template>

<script>
import gardens from '@/assets/data/gardens.json';

import Navbar from "@/components/Navbar.vue";
import Footbar from "@/components/Footbar.vue";


export default {
  name: "Root",
  components: {
    Navbar,
    Footbar,
  },
  data() {
    return {
      garden: gardens,
      // gardenFeature: [],
      // images: gardens.thumbnail,
      // selectedImage: null
    };
  }, //close data
  methods: {
    // randomItem (items) {
    //   return items[Math.floor(Math.random()*200)];
    // }
    },//close methods
    // created() {
    //    this.selectedImage = this.randomItem(this.gardens)
    // }
}; //close export
</script>

<style>
.slide {
  height: 500px;
}

img {
  filter: grayscale(100%)
}

img:hover {
  filter: grayscale(0%)
}
</style>
