import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component:()=>import('./views/Home.vue'),
  },
  {
    path: "/search",
    name: "Search",
    component:()=>import('./views/Search.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
