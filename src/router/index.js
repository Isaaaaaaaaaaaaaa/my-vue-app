// router/index.js
import { createRouter, 
  //createWebHistory, 
  createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AnimalIntro from '../views/AnimalIntro.vue';
import AnimalDetect from '../views/AnimalDetect.vue';
import AnimalData from '../views/AnimalData.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/animal-intro', component: AnimalIntro },
  { path: '/animal-detect', component: AnimalDetect },
  { path: '/animal-data', component: AnimalData },
];

// 选择使用 hash 模式
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // 启用 hash 模式
  // history: createWebHistory(process.env.BASE_URL), // 或者启用 history 模式
  routes,
});

export default router;
