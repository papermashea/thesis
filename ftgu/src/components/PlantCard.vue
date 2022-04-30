<template>
  <div>
     <b-card
      :img-src=imgthb
      img-top
      style="width: 20rem;"
      class="mb-2"
      >
      <!-- <b-card-img-lazy :src=imgthb top></b-card-img-lazy> -->
        <b-card-text>
          <p class="scientific-name">
            {{ this.latinname }} 
          </p>
          <p class="other-names">
            aka {{ this.commonname }}
          </p>
        </b-card-text>
        <div class="flag1">
          <p class="type">{{ this.type }}</p>
        </div>
        <div class="flag2">
          <p class="seed">{{ this.proptype }}</p>
        </div>
        <div class="flag2">
          <p class="edible">{{ this.edibilityrating }}/5 Ediblity</p>
        </div>
      </b-card>


  </div>


</template>

<script>
// import PlantOverlay from '@/components/PlantOverlay.vue';


export default {
  name: 'PlantCard',

  components: {
    // PlantOverlay,
  },

  props: {
    id: String,
    latinname: String,
    commonname: String,
    synonyms: String,
    type: String,
    proptype: String,
    edibilityrating: Number,
    imgthb: String,
  },
}

</script>

<style>
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }

  .scientific-name {
    font-size: 1em;
  }

  .other-names {
    font-size: .9em;
  }

  .flag1 {
    width: 50%;
    height: 10px;
    float: left;
    font-size: .8em;
    marging: 0 1%;
  }

  .flag2 {
    width: 25%;
    height: 10px;
    float: left;
    font-size: .8em;
    marging: 0 1%;
  }  


</style>