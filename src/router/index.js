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
    component: () => import(/* webpackChunkName: "blog" */ '../views/blog/BlogView.vue'),
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
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import(/* webpackChunkName: "blog-post" */ '../views/blog/PostView.vue'),
    meta: {
      seo: {
        title: 'Blog Post | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'A blog post'
          },
          {
            name: 'keywords',
            content: 'blog, post, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectView.vue'),
    meta: {
      seo: {
        title: 'Projects | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'A list of projects I have worked on'
          },
          {
            name: 'keywords',
            content: 'projects, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '../views/ProjectView.vue'),
    meta: {
      seo: {
        title: 'Project | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'A project'
          },
          {
            name: 'keywords',
            content: 'project, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Login | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Login to your account'
          },
          {
            name: 'keywords',
            content: 'login, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Register | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Register for an account'
          },
          {
            name: 'keywords',
            content: 'register, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Account | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Your account'
          },
          {
            name: 'keywords',
            content: 'account, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account/verify/:token',
    name: 'verify',
    component: () => import(/* webpackChunkName: "verify" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Verify | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Verify your account'
          },
          {
            name: 'keywords',
            content: 'verify, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account/reset-password',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "reset-password" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Reset Password | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Reset your password'
          },
          {
            name: 'keywords',
            content: 'reset password, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account/reset-password/:token',
    name: 'reset-password-token',
    component: () => import(/* webpackChunkName: "reset-password-token" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Reset Password | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Reset your password'
          },
          {
            name: 'keywords',
            content: 'reset password, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
          }
        ]
      }
    }
  },
  {
    path: '/account/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/AccountView.vue'),
    meta: {
      seo: {
        title: 'Logout | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'Logout of your account'
          },
          {
            name: 'keywords',
            content: 'logout, Andrew Crossan, Vue, JavaScript, Web Development, Andrew. Crossan, Web, Development, Portfolio, home'
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
