<template>
  <div class="plant-overlay">
      <div class="plantprint" :id="plantDetails.id">
        <el-image class="over-image" :src="plantDetails.imgthb" fit="cover">
            <template #error>
              <div class="image-slot"><img src="@/assets/placeholder.png" class="error-image" /></div>
          </template>
        </el-image>
          <div class="plant-info">
            <h2>{{ plantDetails.latinname }} <a id="dwld" @click="generatePrint"><el-icon class="download" fill="var(--low-edible)"><download /></el-icon></a></h2>
            <h3><span v-if="plantDetails.commonname!==''">{{ plantDetails.commonname }} - </span> {{ plantDetails.type }}</h3>
            <div class="plant-variables" data-html2canvas-ignore="true">
              <div class="factor-nodes" id="sun">
                <p>Sun
                <svg height="22" width="60" data-html2canvas-ignore="true">
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
                <svg height="22" width="60" data-html2canvas-ignore="true">
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
                <svg height="22" width="60" data-html2canvas-ignore="true">
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
                <svg height="22" width="60" data-html2canvas-ignore="true">
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
                <tr class="full-tab">Hardiness: {{plantDetails.hardiness}}; {{plantDetails.hardinessuse}}</tr>
                <tr>
                  <td class="half-tab" v-if="plantDetails.height !== ''">{{plantDetails.height}}m tall</td>
                  <td v-if="plantDetails.width !== ''">{{plantDetails.width}}m wide</td>
                </tr>
                <tr v-if="plantDetails.flowerstartmonth !== ''">
                  <td>Flowering: {{plantDetails.flowerstartmonth}}</td>
                </tr>
                <tr v-if="plantDetails.seedstartmonth !== ''">
                  <td>Harvest: {{plantDetails.seedstartmonth}}</td>
                </tr>
                <tr>
                  <td id="reference">USDA:<a :href="plantDetails.usdalink">{{plantDetails.usda}}</a></td>
                </tr>
                <tr>
                  <td id="reference">PFAF <a :href="plantDetails.pfaflink"><el-icon><TopRight /></el-icon></a></td>
                </tr>
                <tr>
                  <td id="reference">Wiki <a :href="plantDetails.wslink"><el-icon><TopRight /></el-icon></a></td>
                </tr>
              </table>
              <div class="range">
                <div class="area">
                  <p id="range-head">Habitat</p>
                    <p>{{ plantDetails.habitat }}</p>
                </div>
                <div class="area">
                  <p id="range-head">Location</p>
                    <p>{{ plantDetails.range }}</p>
                </div>
                <div class="area" v-show="plantDetails.indigenoususe !== ''">
                  <p id="range-head">Documented indigenous locations:</p>
                    <p>{{ plantDetails.indigenoususe }} </p>
                </div>
              </div>
            </div>

            <div class="haz" v-if="plantDetails.hazards !== 'none known'">
            <el-row class="hazards">
              <p class="haz-header"><el-icon fill="black" class="hazards"><Warning /></el-icon>Hazards<el-icon fill="black" class="hazards"><Warning /></el-icon></p>
              <p>{{plantDetails.hazards}}<a v-for="c in plantDetails.hazardscite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
  
            <el-row id="info-head"><p>Cultivation</p></el-row>
              <el-row id="info-text"><p>{{ plantDetails.cultivationdetails }}<a v-for="c in plantDetails.cultivationcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>

            <el-row id="info-head"><p>Plant: {{plantDetails.proptype}}</p></el-row>
              <el-row id="info-text"><p>{{ plantDetails.cultivationdetails }}<a v-for="c in plantDetails.cultivationcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>

            <div class="pol-tol">
              <p v-show="plantDetails.pollinators!==''">Pollinated by: 
                <span v-for="pol in plantDetails.pollinators" class="tp-list">{{ pol }} </span></p>
              <p v-show="plantDetails.tolerances!==''">& tolerant of: <span v-for="tol in plantDetails.tolerances" class="tp-list">{{ tol }} </span></p>
            </div>            
<!--             <div class="edible" v-if="plantDetails.ediblerating > 0">
              <el-row id="info-head"><p>Edible uses</p></el-row>
               <el-row id="info-text"><p>{{ plantDetails.edibleuses }}
                  <a v-for="c in plantDetails.ediblecite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
            <div class="medicinal" v-if="plantDetails.medicinalrating !== 0">
              <el-row id="info-head"><p>Medcinal uses</p></el-row>
               <el-row id="info-text"><p>{{ plantDetails.medicinaluses }}
                  <a v-for="c in plantDetails.medicinalcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
            <div class="material" v-if="plantDetails.materialrating !== 0">
              <el-row id="info-head"><p>Material uses</p></el-row>
               <el-row id="info-text"><p>{{ plantDetails.materialuses }}
                  <a v-for="c in plantDetails.materialcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
            </div>
          </div> -->
        <!-- <p > Edible uses:</p> -->
        <!-- <el-collapse v-model="activeNames" @change="handleChange"> -->
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Edible uses" class="edible" name="1">
              <el-row id="info-text"><p>{{ plantDetails.edibleuses }}
                  <a v-for="c in plantDetails.ediblecite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
          </el-collapse-item>
          <el-collapse-item title="Medicinal uses" class="medicinal" name="2">
               <el-row id="info-text"><p>{{ plantDetails.medicinaluses }}
                  <a v-for="c in plantDetails.medicinalcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
          </el-collapse-item>
          <el-collapse-item title="Material uses" class="material" name="3">
               <el-row id="info-text"><p>{{ plantDetails.materialuses }}
                  <a v-for="c in plantDetails.materialcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></el-row>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="foot-links">
        <a class="credits" :href="img" target="_blank" id="credit">Header image from {{plantDetails.imgcreator}}, courtesy of Openverse</a>
        <a id="dwld" @click="generatePrint"><el-icon class="download" fill="var(--low-edible)"><download /></el-icon></a>
      </div>
      <img :src="output">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
// const handleChange = (val: string[]) => {
//   console.log(val)
// }
</script>


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
.el-drawer__body {
  padding: 0;
}

.over-image {
  height: 500px;
  width: 100%;
  object-fit: cover;
}

.el-drawer__body {
  padding: 0 20px;
}

.plant-variables {
  width: 100%;
  height: 30px;
  margin: 20px 0;
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

table {
  border: .5px solid;
}

.full-tab {
  width: 100%;
  height: 20px;
}

.overview{
  height: 250px;
  width: 100%;
  padding: 20px 0;
}

.deets{
  height: 100%;
  width: 30%;
  float: left;
  position: relative;
  text-align: left;
}

#reference {
  text-align: center;
  font-style: oblique;
}

.range {
  width: 65%;
  margin-left: 3%;
  height: 100%;
  float: left;
  text-align: left;
}

.area {
  padding-bottom: 10px;
}

#info-head,
#range-head  {
  text-align: left;
  font-weight: 400;
}

#info-text {
  text-align: left;
  padding-bottom: 20px;
}

.plant-info {
  float: none;
  padding: 20px;
}

.haz {
  background-color: var(--highlight);
  padding: 10px 20px;
  margin: 20px 0;
}

.haz-header {
  text-align: center;
  width: 100%;
}

.tol-pol {
  margin: 15px 0;
}

.el-collapse {
  margin-top: 10px;
}

.citations {
  font-size: .6em;
  vertical-align: super;
}

.foot-links {
  width: 100%;
}

#dwld {
  float: right;
}

#credit {
  width: 70%;
  font-size: .8em;
  float: left;
  text-align: left;
}

.hide {
  display: none;
}

@media screen and (max-width: 900px) {
  .el-drawer,
  .open {
    width: 100%!important;
  }

  .el-drawer__body {
    width: 90%;
  }
}

</style>