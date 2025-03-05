// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import DashBoard from '../views/DashBoard.vue';
import Setting from '../views/setting/index.vue';
import UserInfo from "../views/userInfo/index.vue"
import SelectNo from '../views/selectNo/index.vue'
import Monitor from '../views/monitor/index.vue'
import Home from '../views/home/index.vue'
import Notify from '../views/notify/index.vue'
import Time from '../views/time/index.vue'
import { getToken } from '../utils/auth'; // 访问缓存的用户名

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard,
    meta: { requiresAuth: true },
    children:[
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true },
      },
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: UserInfo,
        meta: { requiresAuth: true },
      },
      {
        path: 'notify',
        name: 'Notify',
        component: Notify,
        meta: { requiresAuth: true },
      },
      {
        path: 'setting',
        name: 'Setting',
        component: Setting,
        meta: { requiresAuth: true },
      },
      {
        path: 'selectNo',
        name: 'SelectNo',
        component: SelectNo,
        meta: { requiresAuth: true },
      },
      {
        path: 'monitor',
        name: 'Monitor',
        component: Monitor,
        meta: { requiresAuth: true },
      },
      {
        path: 'time',
        name: 'Time',
        component: Time,
        meta: { requiresAuth: true },
      },

    ]
  },
  {
    path: '/',
    redirect: '/dashboard/home',
  },
  // {
  //   path:'/record',
  //   name:'Record',
  //   component: Record,
  //   meta:{requiresAuth: true}

  // }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!getToken(); // 根据缓存判断是否登录

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // 未登录重定向到登录页
  } else {
    next(); // 允许访问
  }
});

export default router;
