import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogInView from '../views/LogInView.vue';
import DashboardView from '../views/DashboardView.vue';
// import { from } from 'core-js/core/array';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      noAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
    meta: {
      noAuth: true,
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      noAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  let loggedIn = false;
  let token = localStorage.getItem('token');
  if (token) {
    loggedIn = true;
  }
  if (!to.meta.noAuth && !loggedIn) {
    return '/login';
  }
});

export default router;
