import { createRouter, createWebHistory, type Router } from 'vue-router';
import staticRoutes from './staticRoutes';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [...staticRoutes],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach(() => {});

router.afterEach(() => {});
export default router;
