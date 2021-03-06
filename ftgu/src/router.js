import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/root",
    name: "Root",
    component:()=>import('./views/Root.vue'),
  },
  {
    path: "/",
    name: "Root",
    component:()=>import('./views/Root.vue'),
  },
  {
    path: "/learn",
    name: "Learn",
    component:()=>import('./views/Learn.vue'),
  },
  {
    path: "/dig",
    name: "Dig",
    component:()=>import('./views/Dig.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
