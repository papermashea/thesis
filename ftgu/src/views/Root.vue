<template>
  <Navbar></Navbar>
  <Footbar></Footbar>
</template>

<script lang="ts">
import plants from '@/assets/data/plants.json';

import Navbar from "@/components/Navbar.vue";
import Footbar from "@/components/Footbar.vue";


export default {
  name: "Root",
  components: {
    Navbar,
    Footbar,
  },
  data() {
    return {
    }
  }, //close data
}; //close export
</script>

<style>
</style>
