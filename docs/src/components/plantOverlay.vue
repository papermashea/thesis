<template>
  <div class="plant-overlay">
    <el-scrollbar max-height="1000px">
      <div class="plantprint" :id="plantDetails.id">
        <el-image class="over-image" :src="plantDetails.imgthb" fit="cover">
            <template #error>
              <div class="image-slot"><img src="@/assets/placeholder.png" class="error-image" /></div>
          </template>
        </el-image>
          <div class="plant-info">
            <h2>{{ plantDetails.latinname }}</h2>
            <h4>{{ plantDetails.commonname }}</h4>
            <div class="plant-variables" data-html2canvas-ignore="true">
              <div class="factor-nodes" id="sun">
                <p>Sun
                <svg height="22" width="60">
                  <circle class="dot" id="sun" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.sun).includes('none')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="sun" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.sun).includes('partial')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="sun" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.sun).includes('full')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                </svg></p>
              </div>
              <div class="factor-nodes" id="moisture">
                <p>Moisture
                <svg height="22" width="60">
                  <circle class="dot" id="moisture" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.moisture).includes('dry')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="moisture" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.moisture).includes('moist')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="moisture" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.moisture).includes('wet/water')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                </svg></p>
              </div>
              <div class="factor-nodes" id="soil">
                <p>Soil
                <svg height="22" width="60">
                  <circle class="dot" id="soil" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.soil).includes('light')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="soil" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.soil).includes('medium')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="soil" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.soil).includes('heavy')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                </svg></p>
              </div>
              <div class="factor-nodes" id="ph">
                <p>pH
                <svg height="22" width="60">
                  <circle class="dot" id="ph" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.ph).includes('acid')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="ph" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.ph).includes('neutral')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="ph" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.ph).includes('alkaline')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                </svg></p>
              </div>

            </div>
            <div class="overview">
              <table class="deets">
                <tr>
                  <td>{{plantDetails.size}}</td>
                  <td>{{plantDetails.type}}</td>
                </tr>
                <tr>
                  <td v-if="plantDetails.height !== ''">{{plantDetails.height}}m tall</td>
                  <td v-if="plantDetails.width !== ''">{{plantDetails.width}}m wide</td>
                </tr>
                <tr v-if="plantDetails.flowerstartmonth !== ''">
                  <td>Flowering:</td>
                  <td>{{plantDetails.flowerstartmonth}}</td>
                </tr>
                <tr v-if="plantDetails.seedstartmonth !== ''">
                  <td>Harvest:</td>
                  <td>{{plantDetails.seedstartmonth}}</td>
                </tr>

              </table>

              <div class="range">
                <el-row class="info-head"><p>Habitat</p></el-row>
                  <el-row class="info-text"><p>{{ plantDetails.habitat }}</p></el-row>
                <el-row class="info-head"><p>Location</p></el-row>
                  <el-row class="info-text"><p>{{ plantDetails.range }}</p></el-row>
              </div>
            </div>

            <el-row class="info-head"><p>Plant: {{plantDetails.proptype}}</p></el-row>
              <el-row class="info-text"><p>{{ plantDetails.cultivationdetails }}<a v-for="c in plantDetails.cultivationcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            <el-row class="info-head"><p>Cultivation</p></el-row>
              <el-row class="info-text"><p>{{ plantDetails.cultivationdetails }}<a v-for="c in plantDetails.cultivationcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            
            <div class="haz" v-if="plantDetails.hazards !== 'none known'">
            <el-row class="hazards">
              <p class="haz-header"><el-icon fill="black" class="hazards"><Warning /></el-icon>Hazards<el-icon fill="black" class="hazards"><Warning /></el-icon></p>
              <p>{{plantDetails.hazards}}<a v-for="c in plantDetails.hazardscite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
            
            <div class="edible" v-if="plantDetails.medicinalrating > 0">
              <el-row class="info-head"><p>Edible uses</p></el-row>
               <el-row class="info-text"><p>{{ plantDetails.edibleuses }}
                  <a v-for="c in plantDetails.ediblecite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
            <div class="medicinal" v-if="plantDetails.medicinalrating !== 0">
              <el-row class="info-head"><p>Medcinal uses</p></el-row>
               <el-row class="info-text"><p>{{ plantDetails.medicinaluses }}
                  <a v-for="c in plantDetails.medicinalcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
            <div class="material" v-if="plantDetails.materialrating !== 0">
              <el-row class="info-head"><p>Material uses</p></el-row>
               <el-row class="info-text"><p>{{ plantDetails.materialuses }}
                  <a v-for="c in plantDetails.materialcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
          </div>
      
<!--         <el-collapse v-model="activeNames" @change="handleChange"> -->
<!--           <el-collapse-item title="Edible uses" class="edible" name="1"> -->
<!--             <p class="edible">{{ plantDetails.edibleuses }}</p> -->
<!--           </el-collapse-item> -->
<!--           <el-collapse-item title="Medicinal uses" class="medicinal" name="2"> -->
<!--             <p class="medicinal">{{ plantDetails.medicinaluses }}</p> -->
<!--           </el-collapse-item> -->
<!--           <el-collapse-item title="Material uses" class="material" name="3"> -->
<!--             <p class="material">{{ plantDetails.materialuses }}</p> -->
<!--           </el-collapse-item> -->
<!--         </el-collapse> -->
        </div>
        <a class="dwld" @click="generatePrint"><el-icon class="download" fill="var(--low-edible)"><download /></el-icon></a>
      <img :src="output">
    </el-scrollbar>
  </div>
</template>


<script lang="ts">
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'


export default {
  name: "PlantOverlay",
  components: {
  },
  props: {
    plantDetails: { type: Object, required: true },
  },
  data() {
    return {
      output: null
    }
  },
  methods: {
      generatePrint(){
          window.html2canvas = html2canvas
          let printcontent = document.querySelector('.plantprint')

          const height = printcontent.offsetHeight;
          const width = printcontent.offsetWidth;

          const doc =  new jsPDF({
              orientation: 'p',
              format: [width, height],
              unit: 'px',
              hotfixes: ['px_scaling'],
              });

          doc.html(printcontent,{ 
              callback: doc => { 
                // console.log(printcontent.id)
                  doc.save(printcontent.id+'.pdf') 
              }
          })
      },
  },//close methods
}
//close export
</script>

<style>
.over-image {
  height: 500px;
  width: 100%;
}

.el-drawer__body {
  padding: 0 20px;
}

.plant-variables {
  width: 100%;
}

.factor-nodes {
  width: 25%;
  float: left;
}

.dot#sun {
  fill: var(--sun);
}

.dot#moisture {
  fill: var(--moisture)
}

.dot#soil {
  fill: var(--soil)
}

.dot#ph {
  fill: var(--ph)
}

.dot#empty {
  fill: none;
  stroke: grey;
  stroke-width: .5px;
}

.overview{
  height: 300px;
  width: 100%;
}

.deets{
  width: 30%;
  float: left;
}

.range {
  width: 70%;
  float: left;
}

.plant-info {
  float: none;
  padding: 20px;
}

.info-head {
  height: 1em;
  margin: 5px, 0;
  text-align: left;
}

.info-text {
  text-align: left;
  margin-bottom: 20px;
}

.haz {
  background-color: var(--highlight);
  padding: 0;
}

.haz-header {
  text-align: center;
  width: 100%;
}

.citations {
  font-size: .6em;
  vertical-align: super;
}

.download {
  pointer: arrow;
}
</style>