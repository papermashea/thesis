<template>
<div class="plant-flow">
  <div class="test-container">
    <p class="level-1 rectangle" id="top">Test Your Environment</p>

    <ol class="level-2-wrapper">
      <li v-for="factor in factors">
        <div 
        class="level-2 rectangle" 
        v-bind:id="factor.name">
          <p class="factor" id="nested">{{ factor.name}} </p>
            <p class="test"> {{ factor.test }} </p>
            <div class="ranges">
              <div class="results-button" v-for="(res, index) in factor.results">
                <el-button
                circle
                @click="showResults(res)"
                :class="factor.name"
                :id="res.id"
                :style="{
                  opacity: (index+.3)/2,
                }"
                >
                <div :key="factor.name" v-if="factor.name === 'ph'"><el-icon class="res-icon"><coin /></el-icon></div>
                <div :key="factor.name" v-else-if="factor.name == 'moisture'"><el-icon class="res-icon"><pouring /></el-icon></div>
                <div :key="factor.name" v-else-if="factor.name == 'soil'"><el-icon class="res-icon"><picture-rounded /></el-icon></div>
                <div :key="factor.name" v-else="factor.name == 'sun'"><el-icon class="res-icon"><sunny /></el-icon></div>            
                </el-button>
                </div>
            </div>
            <!-- <Results v-bind="{resultDetails}" :key="resultsDetails[factor.name]" :class="factor.name" /> -->
            <Results :class="factor.name" v-if="factor.name === 'sun'" v-bind="factor.results[0]" :id="factor.results.id"
            />
            <Results :class="factor.name" v-else-if="factor.name === 'moisture'" v-bind="factor.results[0]" 
            />
            <Results :class="factor.name" v-else-if="factor.name === 'soil'" v-bind="factor.results[0]" 
            />
            <Results :class="factor.name" v-else="factor.name === ph" v-bind="factor.results[0]" 
            />
            </div>
      </li>
    </ol>
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
      resultDetails: {},
    }
  },//close data
  methods: {
    showResults(r) {

      // const resultDetails = f
      // const resultDetails = r
      const resultDetails = {
        // sun:{
        type: r.type,
        description: r.description,
        details: r.details,
        infolink: r.infolink,
        testlink: r.testlink,
        // name: f
      }

      // const factor = f,
      // if factor = "sun"

      // const resultDetails = {
        // sun: {},
        // moisture: {},
        // soil: {},
        // ph: {},
        // sun: {
          // type: r.type,
          // description: r.description,
          // details: r.details,
          // infolink: r.infolink,
          // testlink: r.testlink,
        // },
        // moisture: {
        //   type: r.type,
        //   description: r.description,
        //   details: r.details,
        //   infolink: r.infolink,
        //   testlink: r.testlink,          
        // },
        // soil: {
        //   type: r.type,
        //   description: r.description,
        //   details: r.details,
        //   infolink: r.infolink,
        //   testlink: r.testlink,          
        // },
        // ph: {
        //   type: r.type,
        //   description: r.description,
        //   details: r.details,
        //   infolink: r.infolink,
        //   testlink: r.testlink,          
        // },
      // }


    //   console.log(resultDetails)
      this.resultDetails = resultDetails

      return { resultDetails }
    }
  }//close methods
};

</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ol {
  list-style: none;
}

.test-container {
  padding: 2%;
  margin: 0 auto;
  text-align: center;
}

.rectangle {
  position: relative;
  padding: 5px 0;
}


#top {
    font-family: Helvetica Neue;
    font-weight: 200;
    font-size: 1.6em;
    text-transform: uppercase;
}

#nested {
    font-family: Helvetica Neue;
    font-weight: 100;
    font-size: 1.6em;
    text-transform: uppercase;
}

.level-1,
.level-1A  {
  width: 35%;
  background: black;
  color: white;
}

.level-1A {
  margin: 0 auto 20px;
}

.level-1 {
  margin: 0 auto 220px;
}

.level-1::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: .5px;
  height: 200px;
  background: black;
}

.level-2-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.level-2-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 12.5%;
  width: 75%;
  height: 1px;
  background: black;
}

.level-2-wrapper::after {
  display: none;
  content: "";
  position: absolute;
  left: -20px;
  bottom: -20px;
  width: calc(100% + 20px);
  height: 1px;
  background: black;
}

.level-2-wrapper li {
  position: relative;
}

.level-2-wrapper > li::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: .5px;
  height: 20px;
  background: black;
}

.level-2 {
  width: 90%;
  margin: 0 auto;
}

.test {
  font-weight: 200;
  font-size: .8em;
  height: 130px;
  text-align: center;
  display:block;
}

.cat {
  font-family: Helvetica Neue;
  font-weight: 200;
  font-style: italic;
  font-size: .7em;
  text-transform: capitalize;
}

.ranges {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.results-button {
  display: flex;
  padding: 0 10px;
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

.res-icon svg {
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


@media screen and (max-width: 700px) {
  .rectangle {
    padding: 20px 10px;
  }

  .level-1,
  .level-2 {
    width: 100%;
  }

  .level-1 {
    margin-bottom: 20px;
  }

  .level-1::before,
  .level-2-wrapper > li::before {
    display: none;
  }
  
  .level-2-wrapper,
  .level-2-wrapper::after,
  .level-2::after {
    display: block;
  }

  .level-2-wrapper {
    width: 100%;
    margin: 0%;
  }

  .level-2-wrapper::before {
    left: -20px;
    width: .5px;
    height: calc(100% + 40px);
  }

  .level-2-wrapper > li:not(:first-child) {
    margin-top: 50px;
  }
}
</style>