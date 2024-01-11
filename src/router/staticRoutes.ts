import GwmsDashboardVue from '@/pages/GwmsDashboard/GwmsDashboard.vue';
import { type RouteRecordRaw } from 'vue-router';

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: GwmsDashboardVue
  },
  {
    path: '/**',
    name: '404',
    component: import('@/pages/NotFound/NotFound.vue')
  }
];

export default staticRoutes;
