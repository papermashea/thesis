<template>
  <div class="filter-group">
    <p class="filter-row">Environment:</p>
      <Dropdown v-for="item in envFilters" id="envFilter"></Dropdown>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'Filters',
  components: {
    Dropdown,
  },
  props: {
    envFilters: {type: Array, required: true},
    ecoFilters: {type: Array, required: true},
    plants: {type: Object, required: true},
  },
  data() {
    return {
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