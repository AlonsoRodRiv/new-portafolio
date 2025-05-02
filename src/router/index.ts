import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import PortafolioView from '../views/PortafolioView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PortafolioView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
