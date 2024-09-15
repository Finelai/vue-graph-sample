import { createWebHistory, createRouter } from 'vue-router';

import { PATHS } from '@/routes/paths';

import HomePage from '@/views/Home.vue';
import NotFoundPage from '@/views/NotFound.vue';
import GraphPage from '@/views/Graph.vue';

export const routes = [
  {
    path: PATHS.home.path,
    name: PATHS.home.name,
    component: HomePage,
  },
  {
    path: PATHS.graph.path,
    name: PATHS.graph.name,
    component: GraphPage,
  },
  {
    path: PATHS.notFound.path,
    name: PATHS.notFound.name,
    component: NotFoundPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
