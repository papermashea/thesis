<template>
  <Navbar></Navbar>
    <div id="page">
      <div class="slide" v-if="selectedImage"><img style="width:100%" :src="selectedImage" alt=""></div>
      <div id="slide-over">
        <div id="slide-text">
          <p class="introduction">Want to grow your own food? It can be hard to know where to start. Your plant-powered journey can begin here by digging through <a :to="{name:'Learn'}">5,913 plants</a> with documented edible properties suitable for growing indoors or outdoors in a temperate climate. Learn about the environmental factors that will impact success, dig through the ecological variables that are most impactful to your area, and take this information with you as you go out and talk to plant people in your community.</p>
          <p class="introduction">From the Ground Up explores plant data collected by the environmentalists at <a href="https://pfaf.org/user/Default.aspx" target="_blank">Plants for a Future</a>, an organization dedicated to researching and providing information on ecologically sustainable horticulture for more than 30 years. You will also find resources from the <a href="plants.usda.gov" target="_blank">USDA</a>, the <a href="https://garden.org/" target="_blank">National Garden Association</a>, the Farmer’s Almanac, and a number of educational extensions. The depth of information available about plants, gardening, and growing food is immense and many of the best resources available include books, videos, and people.</p>
          <p class="introduction">The interactions and information presented have been shaped by conversations with neighbors at Roots, Natty Garden, Umoja Learning Garden, Good Life Garden, BK Rot. Growing food in New York City has a long history of communities learning together and sharing resources. If you’re interested in growing food in the New York City area, these tools may help you get started:</p>
          <div class="resource-links">
            <div class="tools"><el-button id="ex-resources" round><a id="outward" href="http://grow.nyc/" target="_blank">Grow NYC</a></el-button></div>
            <div class="tools"><el-button id="ex-resources" round><a id="outward" href="http://www.brooklyn.cuny.edu/web/academics/centers/esac/soil.php" target="_blank">Brooklyn College Urban Soils Lab</a></el-button></div>
            <div class="tools"><el-button id="ex-resources" round><a id="outward" href="https://cals.cornell.edu/cornell-cooperative-extension" target="_blank">Cornell Cooperative Extension</a></el-button></div>
          </div>
        </div>
      </div>
  <div class="load">
    <p class="level-1 rectangle" id="top"><router-link :to="{name:'Root'}" class="nav-links" id="internal">Find plants<el-icon><el-icon><DArrowRight /></el-icon></el-icon></router-link></p>
  </div>



    </div>
  <Footbar></Footbar>
</template>

<script>
import plants from '@/assets/data/plants.json';

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
      // plants: [],
      images: [
      'https://api.openverse.engineering/v1/images/47065851-50f9-43f6-8b20-a003945ae58d/thumb/',
      'https://api.openverse.engineering/v1/images/619c6342-771d-4d03-bd6a-1b8a4a07acb9/thumb/',
      'https://api.openverse.engineering/v1/images/061f2d03-9b81-46f4-bf21-03dc4273a8c2/thumb/',
      'https://api.openverse.engineering/v1/images/e08ae87a-d464-42a9-8f70-5a2436700673/thumb/',
      'https://api.openverse.engineering/v1/images/fe0b2e0b-1b57-48a5-b90e-29f83504138b/thumb/'
      ],
      selectedImage: null
    };
  }, //close data
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
    },//close methods
    created() {
      // let plantImage = this.plants.imgthb
       this.selectedImage = this.randomItem(this.images)
       console.log(this.selectedImage)
    }
}; //close export
</script>

<style scoped>
.slide {
  align-items: center;
  grid-column: span 4;
  display: flex;
  width: 100%;
  grid-row: span 100;
}

img {
  filter: grayscale(100%);
  object-fit: cover;
  height: 100%;
  width: 100%;
}

img:hover {
  filter: grayscale(0%);
}

#slide-over {
  height: 650px;
  width: 50%;
  position: absolute;
  background-color: rgba(255,255,255,.9);
  grid-column: span 4;
}

#slide-text {
  text-align: left;
  width: 75%;
  position: absolute;
  padding: 1% 15%;
}

#outward {
  color: white;
}

#outward:hover {
  color: white;
}

.tools {
  padding-bottom: 10px;
}

.introduction {
  margin: 20px 0px;
}

#ex-resources {
  background-color: var(--external);
  color: white;
  stroke: 0;
}
#ex-resources:hover {
  background-color: var(--highlight);
  stroke: 0;
}

.level-1 {
  width: 35%;
  background: black;
  color: white;
  margin: 0;
}

.level-1 {
  margin: 0 auto 140px;
}

.load {
  align-items: center;
  background-color: rgba(61, 112, 104, .5);
  background-image: url("@/assets/growth_wh.png");
  background-size: 1920px;
  grid-column: span 4;
  color: black;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
}

.load:hover {
  background-color: var(--highlight);
  cursor: pointer;
}

.rectangle {
  position: relative;
  padding: 5px 0;
  margin: 0;
}

#internal {
  text-decoration: none;
  color:white;
  font-family: Helvetica Neue;
  font-weight: 100;
  font-size: 1.4em;
  text-transform: uppercase;
}

#internal:hover {
  text-decoration: none;
  color:white;
}

#internal .el-icon {
  padding: 0 30px;
  vertical-align: baseline;
}

</style>
