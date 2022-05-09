<template>
  <div class="plant-overlay">
    <div class="body" id="header">
    </div>
    <span>Hi, there!</span>
</div>
</template>

<script>
import mitt from 'mitt';
const emitter = mitt();


export default {
  name: "PlantOverlay",
  data() {
    return {
      plantDetails: {},
    }
  },//close data
  created(){
    this.emitter.on('plantPass', (p) => {
      this.plantDetails = p.plantDetails
      this.plantPass()
    })
  },//close created
  methods: {
    plantPass() {
      const body = d3.select('.body')

      body
        .select('#header')
        .text(`${this.plantDetails.latinname}`)
    }
  }//close methods
}//close export
</script>

<style>
</style>