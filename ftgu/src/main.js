import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import BootstrapVue3 from 'bootstrap-vue-3'


const app = createApp(App)

app.use(router)
app.mount("#app");

