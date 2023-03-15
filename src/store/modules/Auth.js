import axios from 'axios'

const actions = {
  async login ({ commit }, payload) {
    return new Promise(function (resolve, reject) {
      axios.post('/users//login', payload)
        .then(
          response => {
            commit('SET_USER', response.data.user)
            commit('SET_TOKEN', response.data.token)
            commit('SET_LOGGED_IN', true)
            resolve(response)
          })
        .catch(err => {
          reject(err)
        })
    })
  },
  async logout ({ commit }) {
    axios.post('/api/auth/logout')
      .then(
        response => {
          commit('SET_USER', {})
          commit('SET_TOKEN', '')
          commit('SET_LOGGED_IN', false)
        }
      )
      .catch(
      )
  },
  async register ({ commit }, payload) {},
  async fetchUser ({ commit }, payload) {},
  async updateUser ({ commit }, payload) {},
  async deleteUser ({ commit }, payload) {},
  async fetchUsers ({ commit }, payload) {},
  async fetchUserById ({ commit }, payload) {}
}

const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  SET_LOGGED_IN (state, payload) {
    state.loggedIn = payload
  }
}

const getters = {
  isLoggedIn: state => state.loggedIn,
  user: state => state.user,
  token: state => state.token
}

const state = {
  user: {},
  token: '',
  loggedIn: false
}

export default {
  state,
  getters,
  mutations,
  actions
}
