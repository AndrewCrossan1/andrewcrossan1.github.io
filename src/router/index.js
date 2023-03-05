import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { seoGuardWithNext } from '@aminoeditor/vue-router-seo'
import AboutView from '@/views/AboutView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      seo: {
        title: 'Home | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'The personal website of Andrew Crossan'
          }
        ]
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      seo: {
        title: 'About | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'About me'
          }
        ]
      }
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(seoGuardWithNext)

export default router
