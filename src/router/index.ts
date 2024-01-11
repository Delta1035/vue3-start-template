import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import staticRoutes from './staticRoutes';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach(() => {});

router.afterEach(() => {});
export default router;
