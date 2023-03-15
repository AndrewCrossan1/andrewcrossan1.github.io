import axios from 'axios'

const actions = {
  async getProjects ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/products')
        .then(response => {
          commit('SET_PROJECTS', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  async getProject ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/products/${id}`)
        .then(response => {
          commit('SET_PROJECT', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  SET_PROJECTS (state, projects) {
    state.projects = projects
  },
  SET_PROJECT (state, project) {
    state.project = project
  }
}

const getters = {
  projects: state => state.projects,
  project: state => state.project,
  projectCount: state => state.projects.length,
  projectById: state => id => state.projects.find(project => project.id === id)
}

const state = {
  projects: [],
  /**
   * @type {Project}
   * @property {number} id
   * @property {string} Name
   * @property {string} Description
   * @property {string} Image
   * @property {string} Git_Repo
   * @property {string} StartDate
   * @property {string} EndDate
   * @property {string} ProjectType
   * @property {string} Status
   * @property {Array} Languages
   */
  project: {
    id: 0,
    Name: '',
    Description: '',
    Image: '',
    Git_Repo: '',
    StartDate: '',
    EndDate: '',
    ProjectType: '',
    Status: '',
    Languages: []
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
