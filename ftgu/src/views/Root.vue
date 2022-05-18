<template>
  <Navbar></Navbar>
    <div id="page">
      <div class="slide" v-if="selectedImage"><img style="width:100%" :src="selectedImage" alt=""></div>
      <div id="slide-over">
        <div id="slide-text">
          <h4 class="intro-header">Grow to-go</h4>
          <p class="introduction">Want to grow your own food? It can be hard to know where to start. Your plant-powered journey can begin here by digging through <router-link :to="{path:'/learn'}">5,913 plants</router-link> with documented edible properties suitable for growing indoors or outdoors in a temperate climate, which is applies to most of the United States. Learn about the environmental factors that will impact success, dig through the ecological variables that are most impactful to your area, and take this information with you as you go out and talk to plant people in your community.</p>
         
          <h4 class="intro-header">Start with the roots</h4>
          <p class="introduction">From the Ground Up explores plant data collected by the environmentalists at <a href="https://pfaf.org/user/Default.aspx" target="_blank">Plants for a Future</a>, an organization dedicated to researching and providing information on ecologically sustainable horticulture for more than 30 years. The plants described here are rated by <a href="https://planthardiness.ars.usda.gov/" target="_blank">UK hardiness</a>, which largely map to the <a href="https://pfaf.org/user/cmspage.aspx?pageid=134" target="_blank">USDA hardiness zones</a>.You will also find resources from the <a href="plants.usda.gov" target="_blank">USDA</a>, the <a href="https://garden.org/" target="_blank">National Garden Association</a>, <a href="https://www.farmersalmanac.com/" target="_blank">The Farmer’s Almanac</a>, and a number of educational extensions. The depth of information available about plants, gardening, and growing food is immense and many of the best resources available include <a href="https://pfaf.org/user/shop.aspx" target="_blank">books</a>, <a href="https://www.youtube.com/backyardgardens" target="_blank">videos</a>, and people.</p>
          
          <h4 class="intro-header">Talk to your plant people</h4>
          <p class="introduction">The interactions and information presented have been shaped by conversations with neighbors at <a href="https://www.seasonsbedstuy.com/" target="_blank">Seasons</a>, <a href="https://www.nattygarden.com/" target="_blank">Natty Garden</a>, <a href="https://livinglotsnyc.org/lot/54260/" target="_blank">Umoja Learning Garden</a>, <a href="https://bushwickdaily.com/news/5819-abandoned-park-space-transformed-into-thriving-urban-learning-garden/" target="_blank">Good Life Garden</a>, <a href="https://www.bkrot.org/" target="_blank">BK Rot</a>. Growing food in New York City has a long history of communities learning together and sharing resources. If you’re interested in growing food in the New York City area, these tools may help you get started:</p>
          <div class="resource-links">
            <div class="tools"><el-button id="ex-resources" round><a id="outward" href="http://grow.nyc/" target="_blank">Grow NYC</a></el-button></div>
            <div class="tools"><el-button id="ex-resources" round><a id="outward" href="http://www.brooklyn.cuny.edu/web/academics/centers/esac/soil.php" target="_blank">Brooklyn College Urban Soils Lab</a></el-button></div>
            <div class="tools"><el-button id="ex-resources" round><a id="outward" href="https://cals.cornell.edu/cornell-cooperative-extension" target="_blank">Cornell Cooperative Extension</a></el-button></div>
          </div>
        </div>
      </div>
  <div class="load">
    <p class="level-1 rectangle" id="top"><router-link :to="{path:'/learn'}" id="internal">Find plants<el-icon id="turn" color="white" size="20"><Back /></el-icon></router-link></p>
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
  height: 100%;
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
  height: 80%;
  width: 60%;
  position: absolute;
  background-color: rgba(255,255,255,.9);
  grid-column: span 2;
}

#slide-text {
  text-align: left;
  width: 75%;
  position: absolute;
  padding: 5% 0% 1% 15%;
}

.introduction {
  margin: 5% 0;
}

.tools {
  padding-bottom: 5%;
}

#ex-resources {
  background-color: var(--low-edible);
  color: white;
  stroke: 0;
  padding: 5px;
}

#ex-resources:hover {
  background-color: var(--highlight);
  stroke: 0;
  padding: 5px;
}

#outward {
  color: white;
  padding: 10px;
}

#outward:hover {
  color: white;
  padding: 10px;
}

.load .level-1 {
  width: 35%;
  background: black;
  color: white;
  margin: 0;
}

.load .level-1 {
  margin: 50% 0;
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

#turn {
  padding: 0 10px;
  transform: rotate(0.5turn);
  vertical-align: baseline;
}

.level-1-wrapper::before,
.level-1-wrapper::after {
  background: none;
}

@media screen and (min-width: 901px) and (max-width: 1400px) {
  #slide-over {
    height: 50%;
    width: 90%;
    background-color: rgba(255,255,255,.9);
  }

  #slide-text {
    width: 90%;
    margin: 0;
    font-size: .8em;
    position: static;
    margin: 0 5%;
    padding: 1%;
  }

  .introduction {
    margin: 5px;
  }

  .tools {
    padding-top: 1%;
    padding-bottom: 1%;
  }

}

@media screen and (max-width: 900px) {
  .slide {
    align-items: center;
    grid-column: span 1;
    width: 100%;
    height: 100%;
    position: static;
  }


  img {
    filter: grayscale(0%);
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: static;
  }

  #slide-over {
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0);
    grid-column: span 1;
    position: static;
  }

  #slide-text {
    text-align: center;
    width: 90%;
    margin: 0;
    font-size: .8em;
    position: static;
    margin: 0 5%;
    padding: 1%;
  }

  .load {
    align-items: center;
    background-color: rgba(61, 112, 104, .5);
    background-image: url("@/assets/growth_wh.png");
    grid-column: span 1;
    color: black;
    position: static;
    height: 200px;
    width: 100%;
  }

  .load .level-1 {
    font-size: .8em;
    width: 90%;
    background: black;
    color: white;
    margin: 0;
  }
}

</style>
