<template>
  <div class="libForm">
    <div class="field" >
      <p class="copy">I have 
        <Dropdown 
        class="oneline" 
        id="sun-list"
        :options="sunOpt">
        </Dropdown>
      sun</p>
    </div>
    <div class="field" id="madLib">
      <p class="copy">and 
        <Dropdown 
        class="oneline" 
        id="moisture-list"
        :options="moistureOpt">
        </Dropdown>
        <Dropdown 
        class="oneline" 
        id="soil-list"
        :options="soilOpt">
        </Dropdown>
      soil</p>
    </div>
    <div class="field" id="madLib">
      <p class="copy">with 
        <Dropdown 
        class="oneline" 
        id="ph-list"
        :options="phOpt">
        </Dropdown>
      pH.</p>
    </div>
    <div class="field" id="madLib">
      <p class="copy">I'd like plants that are 
        <Dropdown 
        class="oneline" 
        id="hardy-list"
        :options="hardyOpt">
        </Dropdown>
      </p>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'Form',
  components: {
    Dropdown,
  },
  data() {
    return {
      selected: null,
      sunOpt: [
        { value: null, text: 'no/partial/full' },
        { value: 'Full', text: 'full' },
        { value: 'Partial', text: 'partial' },
        { value: 'None', text: 'little or no' },
        // { value: { C: '3PO' }, text: 'This is an option with object value' },
      ],
      moistureOpt: [
        { value: null, text: 'dry/moist/wet' },
        { value: 'Dry', text: 'dry' },
        { value: 'Moist', text: 'moist' },
        { value: 'Wet/Water', text: 'wet/water-based' },
      ],
      soilOpt: [
        { value: null, text: 'light/medium/heavy' },
        { value: 'Light', text: 'light/sandy' },
        { value: 'Medium', text: 'medium/loamy' },
        { value: 'Heavy', text: 'heavy/clay' },
      ],
      phOpt: [
        { value: null, text: 'low/medium/high' },
        { value: 'Acid', text: 'low/acidic' },
        { value: 'Neutral', text: 'neutral' },
        { value: 'Alkaline', text: 'high/alkaline' },
      ],
      hardyOpt: [
        { value: null, text: 'all hardiness levels' },
        { value: 'Seasonal outdoors', text: 'seasonal outdoors' },
        { value: 'Grown indoors', text: 'grown indoors' },
        { value: 'Hardy to cold', text: 'hardy to cold' },
      ]
    }
  }
};

</script>

<style>

.libForm {
  width: 100%;
  margin: 0;
}

.field,
.oneline {
  display: inline;
}

.copy {
  text-align: left;
  width: 80%;
}
</style>
