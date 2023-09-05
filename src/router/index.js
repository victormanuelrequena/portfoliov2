import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorkView from '../views/WorkView.vue';
import ResumeView from '../views/ResumeView.vue';
import WorkListView from '../views/work/WorksList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/work/:work',
      name: 'work-projects-list',
      component: WorkListView,
    },
  ],
});

export default router;
