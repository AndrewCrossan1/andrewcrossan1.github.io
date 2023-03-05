import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue, { IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/styles/base.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Axios configuration
Vue.prototype.$http = axios

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
