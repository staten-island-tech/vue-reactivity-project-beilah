import { createRouter, createWebHistory } from 'vue-router'
import MakeRamen from '@/views/MakeRamen.vue'
import RamenBase from '@/views/RamenBase.vue'
import TonkotsuBase from '@/views/TonkotsuBase.vue'
import ShoyuBase from '@/views/ShoyuBase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: RamenBase,
    },
    {
      path: '/tonkotsu-base',
      name: 'tonkotsuBase',
      component: TonkotsuBase,
    },
    {
      path: '/shoyu-base',
      name: 'shoyuBase',
      component: ShoyuBase,
    },
    {
      path: '/tonkotsu-udon',
      name: 'tonkotsuUdon',
      component: TonkotsuUdon,
    },
    {
      path: '/tonkotsu-soba',
      name: 'tonkotsuSoba',
      component: TonkotsuSoba,
    },
    {
      path: '/shoyu-udon',
      name: 'shoyuUdon',
      component: ShoyuUdon,
    },
    {
      path: '/shoyu-soba',
      name: 'shoyuSoba',
      component: ShoyuSoba,
    },
    {
      path: '/make-ramen',
      name: 'home',
      component: MakeRamen,
    },
  ],
})

export default router
