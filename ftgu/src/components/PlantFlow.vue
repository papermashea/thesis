<template>
  <div class="container">
    <p class="level-1 rectangle" id="top">Test Your Environment</p>
    <ol class="level-2-wrapper">
      <li v-for="(factor, index) in factors">
        <div 
        class="level-2 rectangle" 
        v-bind:id="factor.name">
          <p class="factor" id="nested">{{ factor.name}} </p>
            <p class="test"> {{ factor.test }} </p>
            <p class="cat"> {{ factor.name}} categories: </p>

            <div class="accordion" id="accordionExample" role="tablist">
              <div class="loop" v-for="(res, index) in factor.results">
                <h6 
                class="accordion-header" 
                :id="'heading-'+factor.name+res.id"
                >
                  <b-button 
                  role="tab" 
                  v-b-toggle="'accordion-'+factor.name+res.id"
                  :data-bs-target="'#collapse'+factor.name+res.id"
                  >+
                  </b-button>
                </h6>
              </div>
              <div v-for="(res, index) in factor.results">
                <b-collapse 
                role="tabpanel" 
                accordian="my-accordion"
                data-bs-parent="#accordionExample"
                v-bind:id="'accordion-'+factor.name+res.id"
                :aria-labelledby="'heading-'+factor.name+res.id"
                style="{background-color: var(--+factor.name}"
                >
                  <Results 
                  :name="factor.name"
                  :id="res.id"
                  :type="res.type"
                  :description="res.description"
                  :details="res.details"
                  :infolink="res.infolink"
                  :testlink="res.testlink"
                  style="{background-color: var(--+factor.name}"
                  >
                  </Results>
              </b-collapse>
            </div>
          </div>

        </div>
      </li>
    </ol>
  <!-- <div v-for="(factor, index) in factors" class="band" v-bind:id="factor.name"></div> -->
  </div>
</template>

<script>
import environmentData from "@/assets/data/environment.json";
import Results from "@/components/Results.vue";

// console.log(environmentData)

export default {
  name: 'PlantFlow',
  components: {
    Results,
  },
  data(){
    return {
      factors: environmentData,
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

h6,
.loop {
  width: 30%;
  display: inline;
}

.btn-secondary {
  border-radius: 50%;
  color: white;
  margin: 6% 2%;
  padding: 8px 14px;
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