import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // 更新为新的组件名称
import AnimalIntro from '../views/AnimalIntro.vue';
import AnimalDetect from '../views/AnimalDetect.vue';
import AnimalData from '../views/AnimalData.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/animal-intro', component: AnimalIntro },
  { path: '/animal-detect', component: AnimalDetect },
  { path: '/animal-data', component: AnimalData },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
