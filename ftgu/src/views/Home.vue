<template>
  <navbar></navbar>
  <div id="page">
    <introduction class="intro-img" id="overlay"></introduction>
    <test></test>
    <segment class="segment-collection"></segment>
    <patterns class="collection-vis"></patterns>
  </div>
  <footbar></footbar>
</template>

<script>
import navbar from "@/components/navbar.vue";
import introduction from "@/components/introduction.vue";
import introImage from "@/assets/mapPreview.png"
import test from "@/components/test.vue";
import segment from "@/components/segment.vue";
import patterns from "@/components/patterns.vue";
import footbar from "@/components/footbar.vue";

// console.log(plantData)
// console.log(Object.keys(plantData.plants).length)

export default {
  name: "App",

  components: {
    navbar,
    introduction,
    test,
    segment,
    patterns,
    footbar,
  },
  data(){
    return {
      // plants: plantData,
    }
  }
};
</script>

<style>
.intro-img {
  box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.6);
  width: 100%;
  height: 300px;
  background: url(@/assets/mapPreview.png);
  background-repeat: no-repeat, repeat;
}

.notShown {
  visibility: hidden !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ol {
  list-style: none;
}

.container {
  max-width: 1000px;
  padding: 2%;
  margin: 0 auto;
  text-align: center;
}

.rectangle {
  position: relative;
  padding: 5px;
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
  width: 70%;
  margin: 0 auto;
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

.segment-collection {
  margin: 2em 0;
  width: 100%;
  height: 200px;
}

.collection-vis {
  margin: 2em 0;
  width: 100%;
}
</style>