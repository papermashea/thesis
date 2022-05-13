<template>
  <div class="plant-card">
    <el-card 
    :body-style="{ padding: '0px' }"
    shadow="hover">
        <el-image :src=imgthb class="image" fit="cover" lazy>
          <template #error>
            <div class="image-slot"><el-image src="@/assets/placeholder.png" class="image" fit="cover" lazy /></div>
          </template>
        </el-image>
        <div class="card-text">
          <p class="scientific-name">
            {{ this.latinname }} 
          </p>
          <p class="other-names">
            <span v-if="this.commonname !== ''">aka</span>
            <span v-else-if="this.synonyms !== ''">aka</span>
            {{ this.commonname }}
            <span v-if="this.commonname !== '' && this.synonyms !== '' && this.synonyms.length < 80">,</span> 
            <span v-if="this.synonyms.length < 80">
            {{ this.synonyms }}
          </span>
          </p>
            <div class="flag">
              <p class="tag" v-if="this.type !== ''">{{ this.type }}</p>
              <p class="tag">{{ this.proptype }}</p>
            </div>
          </div>
    </el-card>
  </div>
</template>

<script>
import "@/assets/mapPreview.png";

export default {
  name: 'PlantCard',

  components: {
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
  .el-image {
    width: 300px;
    height: 200px;
  }

  .card-text {
    padding: 0 10px;
    min-height: 100px; 
    max-height: 100px;
    max-width: 300px;
  }

  .scientific-name {
    font-size: 1em;
    margin-bottom: 0px;
  }

  .other-names {
    font-size: .8em;
    margin-bottom: 0px;
    font-style: italic;
  }

  .flag {
    font-size: .7em;
  }
  .tag {
    width: 50%;
    float: left;
  }

</style>