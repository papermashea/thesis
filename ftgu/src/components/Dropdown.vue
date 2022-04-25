<template>
    <b-form-select v-model="selected" id=id size="sm" class="mt-3"></b-form-select>
</template>


<script>
  export default {
    name: 'Dropdown',
    props: {
     id: String,
    },
  }
</script>