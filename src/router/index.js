import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuCheng from '../views/jianshui-gucheng.vue'
import SuYuan from '../views/zitao-suyuan.vue'
import DIY from '../views/DIYpage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jianshui-gucheng',
      name: 'GuCheng',
      component: GuCheng
    },
    {
      path: '/zitao-suyuan',
      name: 'SuYuan',
      component: SuYuan
    },
    {
      path: '/DIYpage',
      name: 'diy',
      component: DIY
    },
    {
      path: '/zitao-suyuan',
      name: 'SuYuan',
      component: SuYuan
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
