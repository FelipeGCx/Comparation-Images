import { createRouter, createWebHistory } from 'vue-router'
import Comparation from '@/views/ComparationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CompartionImages',
      component: Comparation
    },
  ]
})

export default router
