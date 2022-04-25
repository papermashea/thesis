import { createApp } from "vue";
import mitt from 'mitt';
import router from "./router.js";
import BootstrapVue3 from 'bootstrap-vue-3';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import App from "./App.vue";


const emitter = mitt();
const app = createApp(App);


app.use(router)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin)
app.config.globalProperties.emitter = emitter
app.mount("#app")

