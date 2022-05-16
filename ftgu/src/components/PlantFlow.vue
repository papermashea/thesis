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
<!--             <div class="ranges">
              <div class="results-button" v-for="(res, index) in factor.results">
                <el-button
                circle
                @click="show == true"
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
              </div> -->
              <el-tabs v-model="activeName" class="results-cards" @tab-click="handleClick">
                <el-tab-pane v-for="(res, index) in factor.results" :class="factor.name" :id="res.id" :name="res.id">
                    <template #label>
                      <span class="custom-tabs-label">
                        <div :key="factor.name" class="icon-circle" v-if="factor.name === 'ph'"><el-icon class="res-icon"><coin /></el-icon></div>
                        <div :key="factor.name" class="icon-circle" v-else-if="factor.name == 'moisture'"><el-icon class="res-icon"><pouring /></el-icon></div>
                        <div :key="factor.name" class="icon-circle" v-else-if="factor.name == 'soil'"><el-icon class="res-icon"><picture-rounded /></el-icon></div>
                        <div :key="factor.name" class="icon-circle" v-else="factor.name == 'sun'"><el-icon class="res-icon"><sunny /></el-icon></div> 
                      </span>
                    </template>
                  <p class="type">{{res.type}}</p>
                  <p class="description">{{res.description}}</p>
                  <p class="details">{{res.details}}</p>
                  <a class="oneline" id="external" :href=infolink target="_blank"> <button type="button" class="btn btn-light">info </button></a>
                  <a class="oneline" id="external" :href=testlink target="_blank"> <button type="button" class="btn btn-light">tests </button></a>
                </el-tab-pane>
              </el-tabs>

             </div>
<!--             <Results v-show="true" v-bind:currentElement="factor.name" v-bind="factor.results[0]" :id="factor.results.id"/>
            <Results v-show="false" v-bind:currentElement="factor.name" v-bind="factor.results[1]" :id="factor.results.id"/>
            <Results v-show="false" v-bind:currentElement="factor.name" v-bind="factor.results[2]" :id="factor.results.id"/> -->
      </li>
    </ol>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus'

// const activeName = ref('first')

// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)

</script>

<script lang="ts">
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
      resultDetails: {},
    }
  },//close data
  methods: {
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
  margin: 0 auto 140px;
}

.level-1::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: .5px;
  height: 120px;
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

.level-2-wrapper > #white::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: .5px;
  height: 20px;
  background: white;
}

.level-2 {
  width: 90%;
  margin: 0 auto;
}

.test {
  font-weight: 200;
  font-size: .8em;
  height: 130px;
  padding: 10px 60px;
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

.res .type {
  font-size: 1em;
}

.res .description,
.res .details {
  font-size: 1em;
}

.res .description {
  font-weight: 600;
}

.res .description {
  font-weight: 400;
}

.res {
  margin-top: 0;
  padding: 0;
  width: 100%;
  height: 200px;
  position: absolute;
}

.res-icon svg {
  height: 1em;
  width: 1em;
  padding: 0;
  margin: 0;
  color: black;
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