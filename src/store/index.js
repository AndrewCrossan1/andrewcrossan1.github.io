import Vue from 'vue'
import Vuex from 'vuex'
import ProjectStore from '@/store/modules/Projects'
import Auth from '@/store/modules/Auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ProjectStore: ProjectStore,
    Auth: Auth
  }
})
