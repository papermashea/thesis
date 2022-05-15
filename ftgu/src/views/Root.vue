<template>
  <Navbar></Navbar>
    <div id="page">
    <div class="banner"></div>
      <section>
        <p>Want to grow your own food? It can be hard to know where to start. Your plant-powered journey can begin here by digging through 5,913 plants with documented edible properties suitable for growing indoors or outdoors in a temperate climate. Learn about the environmental factors that will impact success, dig through the ecological variables that are most impactful to your area, and take this information with you as you go out and talk to plant people in your community.</p>
      </section>

    <div class="banner"></div>
      
      <section>
        <p>From the Ground Up explores plant data collected by the environmentalists at Plants for a Future, an organization dedicated to researching and providing information on ecologically sustainable horticulture for more than 30 years.* You will also find resources from the USDA, the National Garden Association, the Farmer’s Almanac, and a number of educational extensions. The depth of information available about plants, gardening, and growing food is immense and many of the best resources available include books, videos, and people.</p>
          <el-button type="success" round>USDA</el-button>
          <el-button type="success" round>National Gardening Association</el-button>
          <el-button type="success" round>Backyard Gardens</el-button>
      </section>

      <div class="banner"></div>
      <section>      
        <p>The interactions and information presented have been shaped by conversations with neighbors at Roots, Natty Garden, Umoja Learning Garden, Good Life Garden, BK Rot. Growing food in New York City has a long history of communities learning together and sharing resources. If you’re interested in growing food in the New York City area, these tools may help you get started:</p>
          <el-button type="success" round>Grow NYC</el-button>
          <el-button type="success" round>Brooklyn College Urban Soils Lab</el-button>
          <el-button type="success" round>Cornell Cooperative Extension</el-button>
      </section>

<div class="cta">
          <el-button type="success" round><a class="nav-links" id="menu-item" href="/learn">Explore the plants</a></el-button>
</div>


    </div>
  <Footbar></Footbar>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footbar from "@/components/Footbar.vue";


export default {
  name: "Root",
  components: {
    Navbar,
    Footbar,
  },
  // data() {
  //   return {
      // garden: gardens,
      // gardenFeature: [],
      // images: gardens.thumbnail,
      // selectedImage: null
    //   images: [
    //     "https://api.openverse.engineering/v1/images/529c558d-0294-4d0f-a3a1-c3898d611fbb/thumb/",
    //     "https://api.openverse.engineering/v1/images/21a113b8-94c6-4a66-8967-98522f5c2393/thumb/",
    //     "https://api.openverse.engineering/v1/images/440225c3-8a17-4a78-a4de-818027525994/thumb/",
    //     "https://api.openverse.engineering/v1/images/23cc1e05-4757-4210-88f1-889a3565df4e/thumb/",
    //     "https://api.openverse.engineering/v1/images/a2269c2d-156a-43eb-a869-0c1c0bf5a247/thumb/",
    //     "https://api.openverse.engineering/v1/images/b093716e-eecc-4352-a78e-c169f3f51c0c/thumb/",
    //     "https://api.openverse.engineering/v1/images/b633fa0e-12dc-469a-bbbb-5c7eb415c883/thumb/",
    //     "https://api.openverse.engineering/v1/images/044d357b-02a8-4eee-8369-5b8e62e2cce8/thumb/",
    //     "https://api.openverse.engineering/v1/images/0e0271ae-e635-4a01-85a0-6a0db47089d0/thumb/",
    //     "https://api.openverse.engineering/v1/images/ae6e0b89-cccf-4ba6-afae-f4660b6d0903/thumb/",
    //     "https://api.openverse.engineering/v1/images/b52dc244-5442-4be9-a5ce-c8db6f371610/thumb/",
    //   ]
    // };
  // }, //close data
  // methods: {
    // randomItem (items) {
    //   return items[Math.floor(Math.random()*items.length)];
    // }
    // },//close methods
    // created() {
    //    this.selectedImage = this.randomItem(this.images)
    //    console.log(this.selectedImage)
    // }
}; //close export
</script>

<style scoped>
.slide {
  align-items: center;
  grid-column: span 4;
  color: black;
  display: block;
  justify-content: center;
  height: 300px;
  width: 100%;
  object-fit: cover;
}

img {
  filter: grayscale(100%);
  height: 300px;
  object-fit: cover;
}

img:hover {
  filter: grayscale(0%)
}
</style>
