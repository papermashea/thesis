<template>
  <div>
<!--     <el-row>
      <el-col> -->
        <el-card 
        :body-style="{ padding: '0px' }"
        shadow="hover">
            <img
              :src=imgthb
              class="image"
            />
            <div style="padding: 14px">
              <p class="scientific-name">
                {{ this.latinname }} 
              </p>
              <p class="other-names">
                {{ this.commonname }} | {{ this.synonyms }}
              </p>
              <div class="bottom">
                <div class="flag1">
                  <p class="type">{{ this.type }}</p>
                </div>
                <div class="flag2">
                  <p class="seed">{{ this.proptype }}</p>
                </div>
                <div class="flag2">
                  <p class="edible">{{ this.ediblerating }}/5 Ediblity</p>
                </div>
              </div>
            </div>
        </el-card>
<!--       </el-col>
    </el-row> -->
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
    ediblerating: Number,
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