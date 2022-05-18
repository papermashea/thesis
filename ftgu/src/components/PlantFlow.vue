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
              <el-tabs v-model="activeName" class="results-cards" @tab-click="handleClick">
                <el-tab-pane v-for="(res, index) in factor.results" :class="factor.name" :id="res.id" :name="res.id">
                    <template #label>
                      <span class="custom-tabs-label">
                        <div :key="factor.name" class="icon-circle" :id="factor.name" v-if="factor.name === 'ph'" :style="{opacity: (index+.5)/2}">
                          <el-icon class="res-icon" :size="25"><coin /></el-icon></div>
                        <div :key="factor.name" class="icon-circle" :id="factor.name" v-else-if="factor.name == 'moisture'" :style="{opacity: (index+.3)/2}">
                          <el-icon class="res-icon" :size="25"><pouring /></el-icon></div>
                        <div :key="factor.name" class="icon-circle" :id="factor.name" v-else-if="factor.name == 'soil'" :style="{opacity: (index+.3)/2}">
                          <el-icon class="res-icon" :size="25"><picture-rounded /></el-icon></div>
                        <div :key="factor.name" class="icon-circle" :id="factor.name" v-else="factor.name == 'sun'" :style="{opacity: (index+.3)/2}">
                          <el-icon class="res-icon" :size="25"><sunny /></el-icon></div> 
                      </span>
                    </template>
                  <div class="res-text">
                    <p class="type">{{res.type}}</p>
                    <p class="description">{{res.description}}</p>
                    <p class="details">{{res.details}}</p>
                    <div class="res-link"><a :href="res.testlink" target="_blank">{{factor.name}} tests <el-icon><DocumentCopy /></el-icon></a></div>
                    <div class="res-link"><a :href="res.infolink" target="_blank">{{factor.name}} info <el-icon><Link /></el-icon></a></div>
                  </div>
                </el-tab-pane>
              </el-tabs>
           </div>
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
    font-size: 1.4em;
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
  min-height: 360px;
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
  font-size: .9em;
  height: 140px;
  padding: 10px 0px;
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

.el-tabs__header {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 5px;
}

.el-tabs__active-bar {
  background-color: white;
  width: 10px;
}

.el-tabs__nav {
  height: 60px;
}

.el-tabs__nav-wrap::after {
  background-color: white;
}

.icon-circle:hover {
  opacity: 1!important;
  stroke: 2px;
}

.res-icon svg {
  color: white;
}

.icon-circle#sun,
#sun .el-tab-pane,
.band#sun {
  background-color: var(--sun);
}

.icon-circle#moisture,
#moisture .el-tab-pane,
.band#moisture {
  background-color: var(--moisture);
}

.icon-circle#soil,
#soil .el-tab-pane,
.band#soil {
  background-color: var(--soil);
}

.icon-circle#ph,
#ph .el-tab-pane,
.band#ph {
  background-color: var(--ph);
}

.el-tab-pane {
    transition: opacity 3s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
}

.el-tab-pane {
    opacity: 1;
    padding: 0 10px;
    height: 200px;
}

.res-text {
  background-color: rgba(255,255,255,.6);
  width: 100%;
  height: 200px;
  padding: 20px;
}

.type {
  font-weight: 400;
  height: 20%;
}

.description {
  font-style: oblique;
  height: 30%;
  font-size: .9em;
}

.details {
  font-size: .7em;
  height: 40%;
}

.res-link {
  float: left;
  width: 50%;
  height: 10%;
}

.res-link a {
  color: white;
  font-size: .9em;
  font-weight: 300;
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
</style>