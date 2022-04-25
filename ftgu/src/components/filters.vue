<template>
	<div>
    <Dropdown 
    class="oneline" 
    id="sun-list"
    :options="sunOpt">
    </Dropdown>
    <Dropdown 
    class="oneline" 
    id="soil-list"
    :options="soilOpt">
    </Dropdown>
    <Dropdown 
    class="oneline" 
    id="moisture-list"
    :options="moistureOpt">
    </Dropdown>
    <Dropdown 
    class="oneline" 
    id="ph-list"
    :options="phOpt">
    </Dropdown>
    <Dropdown 
    class="oneline" 
    id="hardy-list"
    :options="hardyOpt">
    </Dropdown>
	</div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'Filters',
  components: {
    Dropdown,
  },
  data() {
    return {
      selected: null,
      sunOpt: [
        { value: null, text: 'sun' },
        { value: 'Full', text: 'full' },
        { value: 'Partial', text: 'partial' },
        { value: 'None', text: 'little or no' },
        // { value: { C: '3PO' }, text: 'This is an option with object value' },
      ],
      moistureOpt: [
        { value: null, text: 'moisture' },
        { value: 'Dry', text: 'dry' },
        { value: 'Moist', text: 'moist' },
        { value: 'Wet/Water', text: 'wet/water-based' },
      ],
      soilOpt: [
        { value: null, text: 'soil' },
        { value: 'Light', text: 'light/sandy' },
        { value: 'Medium', text: 'medium/loamy' },
        { value: 'Heavy', text: 'heavy/clay' },
      ],
      phOpt: [
        { value: null, text: 'ph' },
        { value: 'Acid', text: 'low/acidic' },
        { value: 'Neutral', text: 'neutral' },
        { value: 'Alkaline', text: 'high/alkaline' },
      ],
      hardyOpt: [
        { value: null, text: 'hardiness use' },
        { value: 'Seasonal outdoors', text: 'seasonal outdoors' },
        { value: 'Grown indoors', text: 'grown indoors' },
        { value: 'Hardy to cold', text: 'hardy to cold' },
      ]
    }
  } //close data
};

</script>

<style>

.libForm {
  width: 100%;
  margin: 0;
}

.oneline {
  display: inline;
}

</style>