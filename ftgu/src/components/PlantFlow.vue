<template>
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
              <div class="accordion" role="tablist">  
                <b-button 
                class="loop"
                v-for="(res, index) in factor.results"
                v-b-toggle="'accordion' + '_' + factor.name + '_'+res.id"
                style="{background-color: var(--${factor.name}}"
                >+
                </b-button>
                <b-collapse 
                  v-for="(res, index) in factor.results"
                  :id="'accordion' + '_' + factor.name + '_'+res.id"
                >
<!--                   <Results
                    resArray="{data: factors, resArray}"
                  /> -->
                </b-collapse>
              </div>
          </div>
      </li>
    </ol>
  <!-- <div v-for="(factor, index) in factors" class="band" v-bind:id="factor.name"></div> -->
  </div>
</template>

<script>
import environmentData from "@/assets/data/environment.json";
// import Results from "@/components/Results.vue";

// console.log(environmentData)

export default {
  name: 'PlantFlow',
  components: {
    // Results,
  },
  data(){
    return {
      factors: environmentData,
      resArray: environmentData.results,
    }
  }
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

.loop {
  width: 30%;
  display: inline;
}

.btn-secondary {
  border-radius: 50%;
  color: white;
  margin: 6% 2%;
  padding: 14px;
  border: none;
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


#sun .btn-secondary, 
.band#sun {
    background-color: var(--sun);
}

#moisture .btn-secondary, 
.band#moisture {
    background-color: var(--moisture);
}

#soil .btn-secondary,
.band#soil {
    background-color: var(--soil);
}

#ph .btn-secondary, 
.band#ph {
    background-color: var(--ph);
}

.notShown {
  visibility: hidden !important;
}
</style>