<template>
  <div class="about-me-card bg-dark-card mb-5">
    <b-row>
      <b-col xl="6" lg="6" md="6" sm="12" class="py-xl-0 py-lg-0 py-md-0 py-sm-3 py-3">
        <div class="glass-card m-3 p-1">
          <div class="col p-3">
            <div class="d-flex flex-column align-items-center justify-content-start">
              <div class="d-flex me-auto">
                <img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="75" height="75" src="https://media.licdn.com/dms/image/D4E03AQGQSZyqYNiJ0g/profile-displayphoto-shrink_200_200/0/1677864513662?e=1683158400&v=beta&t=suYTSTY4xvVG2u0D8KaHCxZACgz74xUXaUVOyL-rCDg"  alt="Avater"/>
                <div>
                  <p class="fw-bold text-aquamarine text-tilt-warp fs-3 mb-0">Andrew Crossan</p>
                  <p class="text-white mb-0">Web Developer</p>
                  <hr/>
                </div>
              </div>
              <span class="text-roboto text-white">
                BSc Software Engineering @ University of Strathclyde
              </span>
              <div class="card border-0 shadow-none">
                <div class="card-body d-flex align-items-center p-0"></div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col xl="6" lg="6" md="6" sm="12" class="p-3">
        <p class="text-white text-roboto p-3">
          Web Development wasn't always the dream for me! For a long time I was hellbent on becoming a haematologist
          as I took an interest in blood and the human body.<br/> However, I soon realised that I was more interested in
          web development - Strange shift, I know! <br/>I took an interest in web development in Secondary School and from there
          it sparked a passion.
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center p-4">
      <!-- Education section -->
      <b-col xl="8" lg="8" md="8" sm="12">
        <h2 class="text-tilt-warp text-center text-aquamarine fs-1 text-decoration-underline">Education</h2>
        <h6 class="text-white text-center pt-2 text-roboto">HND Computing: Software Development</h6>
        <hr/>
        <p class="text-white text-roboto">
          Getting my HND in Computing: Software Development was a great experience. I learned a lot about the fundamentals
          of programming and how to apply them to real world problems. I also learned a lot about the software development
          lifecycle and how to apply it to my own projects. I took various modules, including Data Strucutures, Object Analysis
          and Design, Database Design and Development, Web Development, and many more.
          I managed to come out of the experience with grades AA and two Oracle Database Certifications!
        </p>
        <h6 class="text-white text-center pt-2 text-roboto">BSc Software Engineering</h6>
        <hr/>
        <p class="text-white text-roboto">
          I am currently studying for my BSc Software Engineering at the University of Strathclyde.
          I am in my second year and enjoy it, it has it's challenges but with a bit of problem solving
          and perserverance I am sure I will come out of it with a good degree. The degree is much more in depth
          covering modules like Advanced Programming, Logic and Algorithms, Quantitative Methods for Research just to name a few!
          A lot of the content we are covering just now is similar to what I have completed in College, however the
          opportunity to strengthen and further build on these skills is terrific!
        </p>
      </b-col>
      <b-col class="justify-content-center text-center" xl="4" lg="4" md="4" sm="12">
        <img src="../assets/images/cert.svg" class="img-fluid img-thumbnail" alt="education"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'about-me-card'
}
</script>

<style scoped>

</style>
