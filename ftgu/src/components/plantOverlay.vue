<template>
  <el-icon class="download" @click="downloadPlant"><download /></el-icon>
    <div class="plant-overlay" ref="document">
      <el-scrollbar max-height="1000px">
        <div class="body" id="header"/>
        <img :src="plantDetails.imgthb"/>
        <h2>{{ plantDetails.latinname }}</h2>
        <h4>{{ plantDetails.commonname }}</h4>
              <p class="information">{{ plantDetails.range }}</p>
              <p class="information">{{ plantDetails.cultivation }}</p>
              <p class="information">{{ plantDetails.habitat }}</p>

        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Edible uses" class="edible" name="1">
              <p class="edible">{{ plantDetails.edibleuses }}</p>
          </el-collapse-item>
          <el-collapse-item title="Medicinal uses" class="medicinal" name="2">
            <p class="medicinal">{{ plantDetails.medicinaluses }}</p>
          </el-collapse-item>
          <el-collapse-item title="Material uses" class="material" name="3">
            <p class="material">{{ plantDetails.materialuses }}</p>
          </el-collapse-item>
        </el-collapse>
      </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>

<script lang="ts" >
  // import html2pdf from 'html2pdf.js'

export default {
  name: "PlantOverlay",
  components: {
    // html2pdf,    
  },
  props: {
    plantDetails: { type: Object, required: true },
  },
  data() {
    return {
    }
  },//close data
  methods: {
    // downloadPlant () {
    //     // html2pdf(this.$refs.document, {
    //     //   margin: 1,
    //     //   filename: 'document.pdf',
    //     //   image: { type: 'jpeg', quality: 0.98 },
    //     //   html2canvas: { dpi: 192, letterRendering: true },
    //     //   jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    //     // })
    //     // this.$refs.html2Pdf.generatePdf()
    // }
  }//close methods
}//close export
</script>

<style>
.download {
  pointer: arrow;
}
</style>