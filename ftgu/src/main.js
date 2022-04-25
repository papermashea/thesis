import { createApp } from "vue";

////functions
import mitt from 'mitt';
import router from "./router.js";
import Popper from "vue3-popper";

////libraries
import BootstrapVue3 from 'bootstrap-vue-3';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
// import bootstrap from 'bootstrap-vue';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";


const emitter = mitt();
const app = createApp(App);


app.use(router)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin)
app.component("Popper", Popper)
app.config.globalProperties.emitter = emitter
app.mount("#app")

