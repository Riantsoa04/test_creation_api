import { createRouter, createWebHistory } from 'vue-router'
import EntityPage from '@/components/organismes/EntityPage.vue';
import UserPage from '@/components/organismes/UserPage.vue';
import UserEntityPage from '@/components/organismes/UserEntityPage.vue';

const routes = [
    {
      path: '/',
      name: 'entity',
      component: EntityPage,
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
    },
    {
      path: '/userEntity',
      name: 'userEntity',
      component: UserEntityPage,
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router