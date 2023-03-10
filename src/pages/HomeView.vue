<template>
  <div class="home">
    <b-container size="md" class="justify-content-center pb-5 pt-xl-5">
      <b-row class="justify-content-center mt-2 gx-3 pt-xl-5">
        <b-col xl="6" lg="6" md="6" sm="12" class="py-xl-0 py-lg-0 py-md-0 py-sm-3 py-3">
            <h1 class="text-white fw-normal display-3 text-tilt-warp">Welcome</h1>
            <p class="text-white text-roboto fs-6">
              Hi there! I'm Andrew Crossan, a Software Engineering student at the University of Strathclyde.
              I'm currently in my 2nd year of my degree and I'm looking to get into the industry as soon as I graduate.
              I've created this website as a way to showcase not only what I am capable of, but also to show off my other
              projects and interests.
            </p>
            <div class="account-view glass-card">
              <div class="col p-3">
                <div class="d-flex flex-column align-items-center justify-content-start">
                  <div class="d-flex me-auto">
                    <img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="75" height="75" src="https://media.licdn.com/dms/image/D4E03AQGQSZyqYNiJ0g/profile-displayphoto-shrink_200_200/0/1677864513662?e=1683158400&v=beta&t=suYTSTY4xvVG2u0D8KaHCxZACgz74xUXaUVOyL-rCDg"  alt="Avater"/>
                    <div>
                      <p class="fw-bold text-aquamarine text-tilt-warp fs-3 mb-0">Andrew Crossan</p>
                      <p class="text-white mb-0 text-bebas fs-5">Web Developer</p>
                      <hr/>
                    </div>
                  </div>
                  <p class="text-start text-white text-roboto">
                    I decided to create this website with Vue and Bootstrap as a way to expand my knowledge in both of these technologies.
                    Ideally it would be consuming a Django REST API, but for now its just a static website. Watch this space for <span class="text-primary">V2</span>!
                  </p>
                  <b-button variant="aquamarine" class="mt-3 w-100 me-auto">Projects</b-button>
                  <div class="card border-0 shadow-none">
                    <div class="card-body d-flex align-items-center p-0"></div>
                  </div>
                </div>
              </div>
            </div>
        </b-col>
        <b-col xl="4" lg="4" md="6" sm="12" size="12" class="text-white offset-xl-1 d-flex align-items-center">
          <div class="p-3 justify-content-center glass-card-darker w-100">
            <h3 class="text-aquamarine text-tilt-warp fs-1 text-decoration-underline">Get in touch</h3>
            <b-nav vertical class="text-roboto">
              <b-nav-item>
                <b-link href="https://twitter.com/Andrewcrossan11" class="nav-link text-white">
                  <b-icon icon="twitter"></b-icon>
                  <span class="ms-2 hover-underline">Twitter</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="https://github.com/AndrewCrossan1" class="nav-link text-white">
                  <b-icon icon="github"></b-icon>
                  <span class="ms-2 hover-underline">GitHub</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="https://www.linkedin.com/in/andrewcrossan1/" class="nav-link text-white">
                  <b-icon icon="linkedin"/>
                  <span class="ms-2 hover-underline">LinkedIn</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="mailto:andrew.crossan23@outlook.com" class="nav-link text-white">
                  <b-icon icon="envelope-fill"/>
                  <span class="ms-2 hover-underline">Email</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="#" class="nav-link text-white">
                  <b-icon icon="discord"/>
                  <span class="ms-2 hover-underline">AndrewCrossan#5280</span>
                </b-link>
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
      <!-- Tech Stack -->
      <b-row class="py-xl-5 py-5 gx-3 justify-content-center">
        <b-col xl="4" lg="4" md="6" sm="12" class="col-12 text-white d-flex align-items-center">
          <div class="p-3 justify-content-center glass-card-darker w-100 mb-4">
            <h3 class="text-aquamarine text-tilt-warp fs-1 text-decoration-underline">Tech Stack</h3>
            <b-nav vertical class="text-roboto">
              <b-nav-item>
                <b-link href="https://twitter.com/Andrewcrossan11" class="nav-link text-white">
                  <img alt="vue.js" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/vue-icon.png" height="32" width="32"/>
                  <span class="ms-2 hover-underline">Vue.JS</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="https://github.com/AndrewCrossan1" class="nav-link text-white">
                  <img alt="django" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/django-icon.png"/>
                  <span class="ms-2 hover-underline">Django</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="https://www.linkedin.com/in/andrewcrossan1/" class="nav-link text-white">
                  <img alt="postgres" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-postgresql-48.png" height="32" width="32"/>
                  <span class="ms-2 hover-underline">PostgresQL</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="mailto:andrew.crossan23@outlook.com" class="nav-link text-white">
                  <img alt="redis" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-redis-48.png" height="32" width="32"/>
                  <span class="ms-2 hover-underline">Redis</span>
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link href="#" class="nav-link text-white">
                  <img alt="bootstrap" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-bootstrap-48.png" height="32" width="32"/>
                  <span class="ms-2 hover-underline">Bootstrap</span>
                </b-link>
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
        <b-col xl="6" lg="6" md="6" sm="12" class="py-xl-0 py-lg-0 py-md-0 py-sm-3 offset-xl-1">
          <h1 class="text-white fw-normal display-3 text-tilt-warp">My Tech Stack</h1>
          <p class="text-white text-roboto fs-6">
            Being a student, I don't have every minute to learn all the latest technologies or spread out my learning
            amongst three different frameworks, however I have a fond love for technologies like Django, Vue.js, Redis,
            PostgresSQL and Docker. I also have a passion for learning new technologies and I am always looking to improve!
          </p>
          <div class="account-view glass-card">
            <div class="col p-3">
              <div class="d-flex flex-column align-items-center justify-content-start">
                <div class="d-flex me-auto">
                  <img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="75" height="75" src="https://media.licdn.com/dms/image/D4E03AQGQSZyqYNiJ0g/profile-displayphoto-shrink_200_200/0/1677864513662?e=1683158400&v=beta&t=suYTSTY4xvVG2u0D8KaHCxZACgz74xUXaUVOyL-rCDg"  alt="Avater"/>
                  <div>
                    <p class="fw-bold text-aquamarine text-tilt-warp fs-3 mb-0">Andrew Crossan</p>
                    <p class="text-white mb-0 text-bebas fs-5">Web Developer</p>
                    <hr/>
                  </div>
                </div>
                <p class="text-start text-white text-roboto">
                  I am always open to learning new projects and technologies, so if you have any ideas or projects where
                  help is needed, please feel free to contact me! As for now, I am currently working on a few projects
                  which are all available on GitHub, majority of which follow this stack!
                </p>
                <b-btn-group class="w-100">
                  <!-- Instagram button -->
                  <b-link href="https://www.instagram.com/andrewcrossan1/" class="btn btn-outline-light btn-md">
                    <img alt="instagram" role="button" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-instagram-48.png" height="32" width="32"/>
                  </b-link>
                  <!-- LinkedIn button -->
                  <b-link href="https://www.linkedin.com/in/andrewcrossan1/" class="btn btn-outline-light btn-md">
                    <img alt="linkedin" role="button" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-linkedin-48.png" height="32" width="32"/>
                  </b-link>
                  <!-- GitHub button -->
                  <b-link href="" class="btn btn-outline-light btn-md">
                    <img alt="github" role="button" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-github-50.png" height="32" width="32">
                  </b-link>
                  <!-- Twitter button -->
                  <b-link href="" class="btn btn-outline-light btn-md">
                    <img alt="twitter" role="button" class="img-fluid" src="https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img/icons8-twitter-48.png" height="32" width="32">
                  </b-link>
                </b-btn-group>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>

.glass-card {
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 2px 4px 1px rgba( 0, 0, 0, 0.3 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.glass-card-darker {
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 2px 4px 1px rgba( 0, 0, 0, 0.3 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
