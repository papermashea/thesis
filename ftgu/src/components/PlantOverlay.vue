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
            <div class="plant-variables">
              <div class="factor-nodes" id="sun">
                <p><svg height="22" width="60" data-html2canvas-ignore="true">
                  <circle class="dot" id="sun" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.sun).includes('none')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="sun" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.sun).includes('partial')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="sun" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.sun).includes('full')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                  </svg>
                </p>
                <p>Sun: <span v-for="v in plantDetails.sun" class="variable" id="external">{{v}}, </span></p>        
              </div>
              <div class="factor-nodes" id="moisture">
                <p>
                <svg height="22" width="60" data-html2canvas-ignore="true">
                  <circle class="dot" id="moisture" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.moisture).includes('dry')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="moisture" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.moisture).includes('moist')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="moisture" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.moisture).includes('wet/water')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                </svg>
              </p>
                <p>Moisture: <span v-for="v in plantDetails.moisture" class="variable" id="external">{{v}}, </span></p>
              </div>
              <div class="factor-nodes" id="soil">
                <p>
                <svg height="22" width="60" data-html2canvas-ignore="true">
                  <circle class="dot" id="soil" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.soil).includes('light')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="soil" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.soil).includes('medium')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="soil" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.soil).includes('heavy')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                  </svg>
                </p>
                <p>Soil: <span v-for="v in plantDetails.soil" class="variable" id="external">{{v}}, </span></p>
              </div>
              <div class="factor-nodes" id="ph">
                <p>
                <svg height="22" width="60" data-html2canvas-ignore="true">
                  <circle class="dot" id="ph" r="10" cx="10" cy="10" opacity=".4" v-if="(plantDetails.ph).includes('acid')"/>
                    <circle class="dot" r="10" cx="10" cy="10" v-else id="empty"/>
                  <circle class="dot" id="ph" r="10" cx="30" cy="10" opacity=".7" v-if="(plantDetails.ph).includes('neutral')"/>
                    <circle class="dot" r="10" cx="30" cy="10" v-else id="empty"/>
                  <circle class="dot" id="ph" r="10" cx="50" cy="10" opacity="1" v-if="(plantDetails.ph).includes('alkaline')"/>
                    <circle class="dot" r="10" cx="50" cy="10" v-else id="empty"/>
                </svg>
              </p>
                <p>pH: <span v-for="v in plantDetails.moisture" class="variable" id="external">{{v}}, </span></p>
              </div>
            </div>
            <div class="overview">
              <div class="deets">
                <p id="info-head"><p>Hardiness: {{plantDetails.hardiness}}</p></p>
                <p id="info-text">{{plantDetails.hardinessuse}}</p>
                <p id="info-head"><p v-if="plantDetails.height !== '' || plantDetails.width !== ''">Size: {{plantDetails.size}}</p></p>
                  <p id="info-text">
                    <span v-if="plantDetails.height !== ''">{{plantDetails.height}}m tall</span>
                    <span v-if="plantDetails.width !== ''">{{plantDetails.width}}m wide</span>
                  </p>
<!--               <table class="deets"> -->
<!--                 <tr class="full-tab">Hardiness: {{plantDetails.hardiness}}; {{plantDetails.hardinessuse}}</tr> -->
<!--                 <tr> -->
<!--                   <td class="half-tab" v-if="plantDetails.height !== ''">{{plantDetails.height}}m tall</td>
                  <td v-if="plantDetails.width !== ''">{{plantDetails.width}}m wide</td> -->
                <!-- </tr> -->
                <p id="info-head"><p v-if="plantDetails.flowerstartmonth !== '' || plantDetails.seedstartmonth !== ''">Planting:</p></p>
                  <p id="info-text">
                    <span v-if="plantDetails.flowerstartmonth !== ''">Flowers - {{plantDetails.flowerstartmonth}}</span>
                    <span v-if="plantDetails.seedstartmonth !== ''">Harvest - {{plantDetails.seedstartmonth}}</span>
                  </p>
<!--                 <tr v-if="plantDetails.flowerstartmonth !== ''"> -->
<!--                   <td>Flowering: {{plantDetails.flowerstartmonth}}</td> -->
<!--                 </tr> -->
<!--                 <tr v-if="plantDetails.seedstartmonth !== ''"> -->
<!--                   <td>Harvest: {{plantDetails.seedstartmonth}}</td> -->
<!--                 </tr> -->
<!--                 <tr>
                  <td id="reference">USDA:<a :href="plantDetails.usdalink">{{plantDetails.usda}}</a></td>
                </tr>
                <tr>
                  <td id="reference">PFAF <a :href="plantDetails.pfaflink"><el-icon><TopRight /></el-icon></a></td>
                </tr>
                <tr>
                  <td id="reference">Wiki <a :href="plantDetails.wslink"><el-icon><TopRight /></el-icon></a></td>
                </tr>
              </table>-->
                    </div>
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

<!--             <div class="hazards" v-if="plantDetails.hazards !== 'none known'"> -->
            <p class="haz">
              <p class="haz-header"><el-icon fill="black" class="haz-icon"><Warning /></el-icon>Hazards<el-icon fill="black" class="haz-icon"><Warning /></el-icon></p>
              <p>{{plantDetails.hazards}}<a v-for="c in plantDetails.hazardscite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
<!--             </div> -->
  
            <p id="info-head"><p>Cultivation</p></p>
              <p id="info-text"><p>{{ plantDetails.cultivationdetails }}<a v-for="c in plantDetails.cultivationcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>

            <p id="info-head"><p>Plant: {{plantDetails.proptype}}</p></p>
              <p id="info-text"><p>{{ plantDetails.cultivationdetails }}<a v-for="c in plantDetails.cultivationcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>

            <div class="pol-tol">
              <p v-show="plantDetails.pollinators!==''">Pollinated by: 
                <span v-for="pol in plantDetails.pollinators" class="tp-list">{{ pol }} </span></p>
              <p v-show="plantDetails.tolerances!==''">Tolerant of: <span v-for="tol in plantDetails.tolerances" class="tp-list">{{ tol }} </span></p>
            </div>            
<!--             <div class="edible" v-if="plantDetails.ediblerating > 0"> -->
              <p id="info-head"><p>Edible uses</p></p>
               <p id="info-text"><p>{{ plantDetails.edibleuses }}
                  <a v-for="c in plantDetails.ediblecite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
            <!-- </div> -->
<!--             <div class="medicinal" v-if="plantDetails.medicinalrating !== 0"> -->
              <p id="info-head"><p>Medcinal uses</p></p>
               <p id="info-text"><p>{{ plantDetails.medicinaluses }}
                  <a v-for="c in plantDetails.medicinalcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
<!--             </div> -->
<!--             <div class="material" v-if="plantDetails.materialrating !== 0"> -->
              <p id="info-head"><p>Material uses</p></p>
               <p id="info-text"><p>{{ plantDetails.materialuses }}
                  <a v-for="c in plantDetails.materialcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
            <!-- </div> -->
<!--           </div> -->
        <!-- <p > Edible uses:</p> -->
        <!-- <el-collapse v-model="activeNames" @change="handleChange"> -->
<!--         <el-collapse v-model="activeNames">
          <el-collapse-item title="Edible uses" class="edible" name="1">
              <p id="info-text"><p>{{ plantDetails.edibleuses }}
                  <a v-for="c in plantDetails.ediblecite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
          </el-collapse-item>
          <el-collapse-item title="Medicinal uses" class="medicinal" name="2">
               <p id="info-text"><p>{{ plantDetails.medicinaluses }}
                  <a v-for="c in plantDetails.medicinalcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
          </el-collapse-item>
          <el-collapse-item title="Material uses" class="material" name="3">
               <p id="info-text"><p>{{ plantDetails.materialuses }}
                  <a v-for="c in plantDetails.materialcite" class="citations" id="external" href="https://pfaf.org/user/cmspage.aspx?pageid=174" target="_blank">{{c}}</a></p></p>
          </el-collapse-item>
        </el-collapse> -->
      <!-- </div> -->
      <p class="links">
        <div id="link">USDA:<a :href="plantDetails.usdalink">{{plantDetails.usda}}</a></div>
        <div id="link">PFAF:<a :href="plantDetails.pfaflink"><el-icon><TopRight /></el-icon></a></div>
        <div id="link">Wiki:<a :href="plantDetails.wslink"><el-icon><TopRight /></el-icon></a></div>
      </p>
      <div class="foot-links">
        <a class="credits" :href="img" target="_blank" id="credit">Header image from {{plantDetails.imgcreator}}, courtesy of Openverse</a>
        <a id="dwld" @click="generatePrint"><el-icon class="download" fill="var(--low-edible)"><download /></el-icon></a>
      </div>
      <img :src="output">
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// const activeNames = ref(['1'])
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
              removeContainer: false,
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
  text-align: left;
}

.factor-list {
  font-style: oblique;
  font-size: .7em;
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
  margin: 0 0 5% 3%;
  height: 100%;
  float: left;
  text-align: left;
}

.area {
  padding-bottom: 10px;
}

.haz {
  padding-top: 50px;
}

.haz,
.hazards {
  width: 100%;
  margin-top: 10px;
  text-align: center;
}

.haz-icon {
  float: center;
}

.haz-header {
  text-align: center;
  margin: 0 40%;
  font-weight: 400;  
}

#info-head,
#range-head  {
  text-align: left;
  font-weight: 400;
}

#info-text,
.hazards {
  text-align: left;
  padding-bottom: 20px;
}

.plant-info {
  float: none;
  padding: 20px;
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

.links {
  margin: 20px 0;
}

#link {
  width: 30%;
  float: left;
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
    width: 90%!important;
  }

  .el-drawer__body {
    width: 90%;
  }
}

</style>