<template>
 <div class="numCol">
    <div class="numBlock">
      <p class="num2">{{ this.total }}</p>
      <p class="numLabel">plants suited for temperate zones have edible properties</p>
      <a class="numLink">See all ></a>
    </div>
    <div class="numBlock">
      <p class="num1">{{ this.filtered }}</p>
      <p class="numLabel">edible plants compatible with your environment</p>
      <a class="numLink">See all ></a>
    </div>
    <div class="numBlock">
      <p class="num2">{{ this.med }}</p>
      <p class="numLabel">of these have additional medicinal properties</p>
      <a class="numLink">See all ></a>
    </div>
  </div>
</template>

<script>
// console.log(p)

export default {
  name: 'Numbers',
  props: {
    total: { type: Number, required: true },
    filtered: { type: Number, required: true },
    med: { type: Number, required: true },
  }
};
</script>

<style>
.numBlock{
  display: inline;
}

.num1,
.num2 {
  margin-bottom: 0;
}

.numLabel {
    font-size: .7em;
}

.numLink {
    font-weight: bold;
    font-style: italic;
    font-size: .8em;
}

</style>