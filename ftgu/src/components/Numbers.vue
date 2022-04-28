<template>
 <div class="numCol">
    <div class="numBlock">
      <p class="num2">{{ this.counts }}</p>
      <p class="numLabel">plants suited for temperate zones have edible properties</p>
      <a class="numLink" href="/#/search" target="_blank">see all plants ></a>
    </div>
    <div class="numBlock">
      <p class="num1">{{ this.filtered }}</p>
      <p class="numLabel">edible plants compatible with your environment</p>
      <a class="numLink" href="/#/search" target="_blank">see filtered plants ></a>
    </div>
    <div class="numBlock">
      <p class="num2">{{ this.med }}</p>
      <p class="numLabel">of these have additional medicinal properties</p>
      <a class="numLink"  href="/#/search" target="_blank">see these plants ></a>
    </div>
  </div>
</template>

<script>
// console.log(p)

export default {
  name: 'Numbers',
  props: {
    collections: { type: Object },
    counts: { type: Number, required: true },
    filtered: { type: Number, required: true },
    med: { type: Number, required: true },
  }
};
</script>

<style>
.numBlock{
  display: block;
  margin: 8% 0;
  width: 100%;
  height: 30%;
  text-align: right;
}

.num1,
.num2 {
  margin: 0;
}

.numLabel {
  font-size: .7em;
  margin: 0;
  width: 100%;
}

.numLink {
  font-weight: bold;
  font-style: italic;
  font-size: .8em;
}

</style>