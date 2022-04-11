<template>
  <div class="container">
    <p class="level-1 rectangle" id="top">Your Environment</p>
    <ol class="level-2-wrapper">
      <li>
        <div class="level-2 rectangle" id="sun">
          <p class="factor" id="nested">Sun</p>
              <p class="test">Every hour draw a rough line where the sun is shining or shadows are cast with a note as to the time. Make sure you mark where the structures are casting shadows. Repeat this every hour until the sun is past the area.</p>
                <results></results>
            <!-- <component :is="current"></component> -->
        </div>
      </li>
      <li>
        <div class="level-2 rectangle" id="moisture">
          <p class="factor" id="nested">Moisture</p>
            <p class="test">Get a handful of soil, squeeze into a ball and attempt to poke a finger in it.</p>
              <results></results>
        </div>
      </li>
      <li>
        <div class="level-2 rectangle" id="soil">
          <p class="factor" id="nested">Soil</p>
            <p class="test">Take half a cup of your soil, add a little water and mix until there are no lumps, drain excess moisture and form the soil into a ball in the palm of your hand.</p>
              <results></results>
        </div>
      </li>
      <li>
        <div class="level-2 rectangle" id="ph">
          <p class="factor" id="nested">pH</p>
              <p class="test">Place 2 tablespoons of soil in a bowl and moisten it with distilled water. Place another 2 tablespoons of soil in a bowl and add ½ cup vinegar. Add ½ cup baking soda to each.</p>
                <results></results>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import results from "./blocks/factors.vue";

export default {
  name: 'flowchart',
  components: {
    results,
  },
};

</script>

<style>
:root {
  --sun-yellow: rgba(242, 222, 44, 1);
  --moist-blue: rgba(61, 90, 128, 1);
  --soil-sienna: rgba(190, 110, 70, 1);
  --ph-lav: rgba(178, 171, 191, 1);
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

.test {
  font-family: Helvetica Neue;
  font-weight: 200;
  font-size: .7em;
  height: 150px;
  text-align: center;
  display:block;
}

.results {
  border-radius: 50%;
  color: white;
  font-size: 1em;
  margin: 3%;
  padding: 10px 15px;
}

#sun .results {
    background-color: var(--sun-yellow);
}

#moisture .results {
    background-color: var(--moist-blue);
}

#soil .results {
    background-color: var(--soil-sienna);
}

#ph .results {
    background-color: var(--ph-lav);
}

.level-1 {
  width: 35%;
  margin: 0 auto 220px;
  background: black;
  color: white;
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
  margin: 0 auto 40px;
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