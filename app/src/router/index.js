import { createRouter, createWebHistory } from 'vue-router'
import MakeRamen from '@/views/MakeRamen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MakeRamen,
    }
  ],
})

export default router
