<template>
  <div class="home">
    <b-container size="md" class="justify-content-center pb-5 pt-xl-5">
      <b-row class="justify-content-center mt-2 gx-3 pt-xl-5">
        <b-col xl="6" lg="6" md="6" sm="12" class="py-xl-0 py-lg-0 py-md-0 py-sm-3 py-3">
          <h1 class="text-white fw-normal display-3 text-tilt-warp text-decoration-underline">Projects</h1>
          <p class="text-white text-roboto fs-6">
            Welcome to my projects, here you can find projects, I have worked on, and projects I am currently working on.
            Each project features a link to the github repository, and a link to the live website. Feel free to check them out!
          </p>
        </b-col>
        <b-col xl="4" lg="4" md="6" sm="12" size="12" class="text-white offset-xl-1">
          <div class="account-view glass-card">
            <div class="col p-3">
              <div class="d-flex flex-column align-items-center justify-content-start">
                <div class="d-flex me-auto">
                  <div>
                    <p class="text-aquamarine text-tilt-warp fs-3 mb-0">Note!</p>
                    <hr/>
                  </div>
                </div>
                <p class="text-start text-white text-roboto">
                  Some of these projects may be unfinished, or may not be fully functional. This is because I am still working on them.
                  If you have any questions, feel free to contact me!
                </p>
                <div class="card border-0 shadow-none">
                  <div class="card-body d-flex align-items-center p-0"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-2 gx-5 pt-xl-5">
        <div class="col-6 my-3" v-for="x in 6" v-bind:key="x" >
          <div class="card bg-dark-card">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://via.placeholder.com/1x1.png?text=Placeholder+Image" height="254" class="card-img rounded-2" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body text-white">
                  <h5 class="card-title text-bebas fs-3 mb-0">Project title</h5>
                  <p class="card-subtitle">
                    <span class="text-white text-bebas">Tags: </span>
                    Django, Python, Vue.JS, JavaScript
                  </p>
                  <p class="card-text text-roboto mb-1">
                    Project Content Goes here
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </p>
                  <b-button variant="outline-aquamarine" class="w-100">
                    View
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ProjectView',
  computed: {
    projects: {
      get () {
        return this.$store.getters.projects
      },
      set () {
        this.$store.commit('setProjects', this.projects)
      }
    }
  },
  methods: {
    getProjects () {
      this.$store.dispatch('getProjects')
        .then(() => {
          this.projects = this.$store.getters.projects
        })
        .catch((err) => {
          // Push route to error page
          this.$router.push({ name: 'ErrorView', params: { error: err } })
        })
    }
  },
  created () {
    this.$watch(
      () => this.$route.name,
      () => {
        this.getProjects()
      },
      { immediate: true }
    )
  }
}
</script>

<style>
</style>
