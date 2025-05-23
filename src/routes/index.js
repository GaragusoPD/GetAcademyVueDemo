// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/tasks', 
    name: 'Tasks', 
    component: () => import('../views/Tasks.vue') 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;