<template>
  <div class="dropdown-select">
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">{{ this.filter }} </div>
  </div>
</template>


<script>
  export default {
    name: 'Dropdown',
    props: {
      // id: String,
      filters: Object,
      params: Object,
      onFilterChange: Function,
      nProjects: Object,
      yearData: Object,
    },
    data() {
      return {
      };
    },
    computed: {
      filterTag() {
        // return this.filters.TAG;
      }
    }//close computed

  }
</script>