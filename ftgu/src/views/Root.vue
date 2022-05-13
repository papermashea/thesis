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
      images: [
        "https://api.openverse.engineering/v1/images/529c558d-0294-4d0f-a3a1-c3898d611fbb/thumb/",
        "https://api.openverse.engineering/v1/images/21a113b8-94c6-4a66-8967-98522f5c2393/thumb/",
        "https://api.openverse.engineering/v1/images/440225c3-8a17-4a78-a4de-818027525994/thumb/",
        "https://api.openverse.engineering/v1/images/23cc1e05-4757-4210-88f1-889a3565df4e/thumb/",
        "https://api.openverse.engineering/v1/images/a2269c2d-156a-43eb-a869-0c1c0bf5a247/thumb/",
        "https://api.openverse.engineering/v1/images/b093716e-eecc-4352-a78e-c169f3f51c0c/thumb/",
        "https://api.openverse.engineering/v1/images/b633fa0e-12dc-469a-bbbb-5c7eb415c883/thumb/",
        "https://api.openverse.engineering/v1/images/044d357b-02a8-4eee-8369-5b8e62e2cce8/thumb/",
        "https://api.openverse.engineering/v1/images/0e0271ae-e635-4a01-85a0-6a0db47089d0/thumb/",
        "https://api.openverse.engineering/v1/images/ae6e0b89-cccf-4ba6-afae-f4660b6d0903/thumb/",
        "https://api.openverse.engineering/v1/images/b52dc244-5442-4be9-a5ce-c8db6f371610/thumb/",
      ]
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
