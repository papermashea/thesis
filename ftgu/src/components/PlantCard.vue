<template>
  <div class="plant-card">
    <el-card 
    :body-style="{ padding: '0px' }"
    :id="ediblerating"
    shadow="hover">
        <el-image :src=imgthb class="card-image" fit="cover" lazy>
          <template #error>
            <div class="image-slot"><img src="@/assets/placeholder.png" class="error-image" /></div>
          </template>
        </el-image>
        <div class="card-text">
          <h3 class="scientific-name">
            {{ this.latinname }} <el-icon v-show="this.hazards !== 'none known'" fill="black" size="10" class="hazards"><Warning /></el-icon>
          </h3>
          <p class="other-names">
            <span v-if="this.commonname !== ''">aka</span>
            <span v-else-if="this.synonyms !== ''">aka</span>
            {{ this.commonname }}
            <span v-show="this.commonname !== '' && this.synonyms !== '' && this.synonyms.length < 80">,</span> 
            <span v-show="this.synonyms.length < 80">
            {{ this.synonyms }}
          </span>
          </p>
            <div class="flag">
              <p class="tag">{{ this.type }} mostly {{ this.hardinessuse }}</p>
            </div>
          </div>
    </el-card>
  </div>
</template>

<script>
import "@/assets/placeholder.png";

export default {
  name: 'PlantCard',

  components: {
  },

  props: {
    id: String,
    imgthb: String,
    hazards: String,
    ediblerating: Number,
    latinname: String,
    commonname: String,
    synonyms: String,
    type: String,
    hardinessuse: Number,
  },
}

</script>

<style>
.card-image {
  width: 320px;
  height: 240px;
}

.error-image {
  width: 100%;
  height: 100%;
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
  float: center;
}

.tag {
}

</style>