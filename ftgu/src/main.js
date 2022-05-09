import { createApp } from "vue";

////functions
import mitt from 'mitt';
import router from "./router.js";
import Popper from "vue3-popper";

////libraries
import BootstrapVue3 from 'bootstrap-vue-3';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "element-plus/theme-chalk/index.css";

////components
import Multiselect from 'vue-multiselect';

import App from "./App.vue";

const emitter = mitt();
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin)
app.use(ElementPlus)
app.component("Popper", Popper)
app.component('multiselect', Multiselect)
app.config.globalProperties.emitter = emitter
app.mount("#app")

