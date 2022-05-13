import { createApp } from "vue";

////functions
import mitt from 'mitt';
import router from "./router.js";
import Popper from "vue3-popper";

////libraries
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "element-plus/theme-chalk/index.css";
// import Scrollama from "vue-scrollama";

import App from "./App.vue";

const emitter = mitt();
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
// app.use(Scrollama)
app.use(ElementPlus)
app.component("Popper", Popper)
// app.provide('emitter', emitter); 
app.config.globalProperties.emitter = emitter
app.mount("#app")

