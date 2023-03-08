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
          },
          {
            name: 'keywords',
            content: 'Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          },
          {
            name: 'author',
            content: 'Andrew Crossan'
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
          },
          {
            name: 'keywords',
            content: 'about, me, about me, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          },
          {
            name: 'author',
            content: 'Andrew Crossan'
          }
        ]
      }
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue'),
    meta: {
      seo: {
        title: 'Blog | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'A blog where I write about things I find interesting, developers are also welcome to contribute'
          },
          {
            name: 'keywords',
            content: 'blog, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
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
