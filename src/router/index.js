import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontView',
    component: () => import('../views/client/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/client/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/client/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/client/ProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/client/CartView.vue'),
      },
      {
        path: 'about',
        component: () => import('@/views/client/AboutView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/client/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/ProductsAdmin.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/OrdersAdmin.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/CouponsAdmin.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active',
});

export default router;
