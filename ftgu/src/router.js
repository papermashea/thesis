import * as VueRouter from "vue-router";
import App from "./App.vue";
import Table from "./Table.vue";

const routes = [
  { path: "/", component: App },
  { path: "/search", component: Table },
];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
