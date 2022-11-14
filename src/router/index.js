import { createRouter, createWebHistory } from 'vue-router'
import Permission from '../views/Permission.vue'
import Permission2 from '../views/Permission2.vue'
import Longpress from '../views/Longpress.vue'
import Longpress2 from '../views/Longpress2.vue'
import Shake from '../views/Shake.vue'
import Transition from '../views/Transition.vue'
import Memo from '../views/Memo.vue'
import LargeList from '../views/LargeList.vue'
import Test from '../views/1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'permission',
      component: Permission
    },
    {
      path: '/permission',
      name: 'permission-next',
      component: Permission2
    },
    {
      path: '/longpress',
      name: 'longpress',
      component: Longpress
    },
    {
      path: '/longpress2',
      name: 'longpress2',
      component: Longpress2
    },
    {
      path: '/shake',
      name: 'shake',
      component: Shake
    },
    {
      path: '/transition',
      name: 'transition',
      component: Transition
    },
    {
      path: '/memo',
      name: 'memo',
      component: Memo
    },
    {
      path: '/largelist',
      name: 'largelist',
      component: LargeList
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
