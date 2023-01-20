import { createRouter, createWebHistory } from "vue-router";
const routes = [{ path: "/", component: () => import("@/pages/home.vue") }];

export default createRouter({
  history: createWebHistory(),
  routes,
});
