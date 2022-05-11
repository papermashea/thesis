<template>
<div class="plant-flow">
  <div class="container">
    <p class="level-1 rectangle" id="top">Test Your Environment</p>
    <ol class="level-2-wrapper">
      <li v-for="factor in factors">
        <div 
        class="level-2 rectangle" 
        v-bind:id="factor.name">
          <p class="factor" id="nested">{{ factor.name}} </p>
            <p class="test"> {{ factor.test }} </p>
            <p class="cat"> {{ factor.name}} categories: </p>
            <div class="results-button" v-for="(res, index) in factor.results">
              <el-button
              circle
              @click="showResults(res)"
              :class="factor.name"
              :id="res.id"
              :style="{
                opacity: (index+.3)/2,
                color: white,
                stroke: none
              }"
              >
              <div :key="factor.name" v-if="factor.name === 'ph'"><el-icon><coin /></el-icon></div>
              <div :key="factor.name" v-else-if="factor.name == 'moisture'"><el-icon><pouring /></el-icon></div>
              <div :key="factor.name" v-else-if="factor.name == 'soil'"><el-icon><picture-rounded /></el-icon></div>
              <div :key="factor.name" v-else="factor.name == 'sun'"><el-icon><sunny /></el-icon></div>            
              </el-button>
              </div>
            <Results v-bind="{resultDetails}" :class="factor.name" />
            </div>
      </li>
    </ol>
  <!-- <div v-for="(factor, index) in factors" class="band" v-bind:id="factor.name"></div> -->
  </div>
</div>
</template>

<script>
import environmentData from "@/assets/data/environment.json";
import Results from "@/components/Results.vue";

export default {
  name: 'PlantFlow',
  components: {
    Results,
  },
  data(){
    return {
      factors: environmentData,
      resArray: environmentData.results,
    }
  },//close data
  methods: {
    showResults(r) {

      const resultDetails = {
        type: r.type,
        description: r.description,
        details: r.details,
        infolink: r.infolink,
        testlink: r.testlink,
      }

      console.log(resultDetails.description)
      this.resultDetails = resultDetails

      return { resultDetails }
    }
  }//close methods
};

</script>

<style>
.test {
  font-family: Helvetica Neue;
  font-weight: 200;
  font-size: .8em;
  height: 150px;
  text-align: center;
  display:block;
  margin-bottom: 100px;
}

.cat {
  font-family: Helvetica Neue;
  font-weight: 200;
  font-style: italic;
  font-size: .7em;
  text-transform: capitalize;
}

.results-button {
  width: 30%;
  padding: 0 5%;
  float: left;
}

.el-button:hover {
  opacity: 1!important;
  stroke: 2px;
}

.el-button {
  height: 40px;
  width: 40px;
  float: left;
}

.el-icon svg {
  height: 1em;
  width: 1em;
  padding: 0;
  margin: 0;
  color: white;
}

.el-button.sun,
.band#sun {
  stroke: var(--sun);
  background-color: var(--sun);
}

.el-button.moisture,
.band#moisture {
  background-color: var(--moisture);
}

.el-button.soil,
.band#soil {
  background-color: var(--soil);
}

.el-button.ph,
.band#ph {
  background-color: var(--ph);
}

.band {
  height: 20px;
  width: 25%;
  float: left;
}

.band#sun {
  margin-left: -120px;
}

.band#ph {
  margin-right: -120px;
}

.notShown {
  visibility: hidden !important;
}
</style>