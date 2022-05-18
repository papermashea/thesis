<template>
  <router-view />
</template>

<script>
import mitt from 'mitt';
const emitter = mitt();
</script>

<style>
body {
  margin: 0;
}

#app {
  margin: 0;
  font-family: Helvetica Neue;
  font-weight: 200;
  text-align: center;
}

#page {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10px;
  text-align: center;
}

section {
  grid-column: span 4;
  margin: 1% 5%;
  content-align: center;
  grid-row: span 100;
  place-items: flex-start;
  max-width: 1920;
}

.banner {
  align-items: center;
  background-color: rgba(61, 112, 104, .5);
  background-image: url("@/assets/growth_wh.png");
  background-size: 1920px;
  grid-column: span 4;
  color: black;
  display: block;
  justify-content: center;
  height: 200px;
  width: 100%;
}

  :root {
    --sun: rgba(242, 222, 44, 1);
    --moisture: rgba(61, 90, 128, 1);
    --soil: rgba(190, 110, 70, 1);
    --ph: rgba(178, 171, 191, 1);
    --low-edible: rgba(61, 112, 104, 1);
    --lowmed-edible: rgba(48, 145, 114, 1);
    --med-edible: rgba(32, 195, 135, 1);
    --medhigh-edible: rgba(75, 218, 69, 1);
    --high-edible: rgba(115, 240, 9, 1);
    --highlight: rgba(200, 240, 9, 1);
    --external: rgba(0, 100, 120, 1);
    --clean: Helvetica Neue, sans;
    --technical: Courier New, monospace;
  }

a {
  color: var(--low-edible);
  font-family: var(--clean);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 2px 0px;
}

a:hover {
  color:var(--highlight);
  text-decoration: none;
  background-color: (--low-edible);
}

#external:hover {
  color: var(--external);
  background-color: rgba(0,0,0,0);
}

.btn {
  font-size: .7em;
  margin: 5px;
}

.el-select-dropdown__item,
.el-input__inner {
  font-family: var(--technical);
}

.el-input {
  --el-select-input-focus-border-color: var(--highlight);
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
  color: black;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
  background-color: black;
}

.oneline {
  display: inline;
}

</style>
