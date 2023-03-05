<template>
  <div class="home">
    <b-container size="md" class="d-flex justify-content-center align-items-center pb-5 pt-xl-5">
      <b-row class="justify-content-center mt-2 gx-3 pt-xl-5">
        <b-col xl="6" lg="6" md="6" sm="12" class="py-xl-0 py-lg-0 py-md-0 py-sm-3 py-3">
            <h1 font="dosis" class="text-white fw-normal display-3">Welcome</h1>
            <p font="roboto" class="text-white">
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
                      <p class="fw-bold text-black text-bebas fs-3 mb-0">Andrew Crossan</p>
                      <p class="text-white mb-0">Web Developer</p>
                      <hr/>
                    </div>
                  </div>
                  <p class="text-start text-white text-roboto">
                    I decided to create this website with Vue and Bootstrap as a way to expand my knowledge in both of these technologies.
                    Ideally it would be consuming a Django REST API, but for now its just a static website. Watch this space for <span class="text-primary">V2</span>!
                  </p>
                  <b-button variant="galaxy" class="mt-3 w-100 me-auto">Projects</b-button>
                  <div class="card border-0 shadow-none">
                    <div class="card-body d-flex align-items-center p-0"></div>
                  </div>
                </div>
              </div>
            </div>
        </b-col>
        <b-col xl="4" lg="4" md="6" sm="12" size="12" class="text-white offset-xl-1 d-flex align-items-center justify-content-center justify-content-lg-start">
          <div class="p-3 justify-content-center glass-card-darker">
            <h3 class="mb-4 text-black text-bebas fs-1 text-decoration-underline">Get in touch</h3>
            <b-nav vertical>
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

.hover-underline {
  display: inline-block;
  position: relative;
  color: white;
}

.hover-underline:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.4s ease-out;
}

.hover-underline:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.glass-card {
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.glass-card-darker {
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 0px );
  -webkit-backdrop-filter: blur( 0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

</style>
