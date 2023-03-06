<template>
  <div id="app" class="home">
      <nav-bar/>
      <router-view/>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
 #app{
  background: url("https://github.com/AndrewCrossan1/andrewcrossan1.github.io/raw/gh-pages/img/4kback.a3960780.webp") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media (min-width: 768px) {
  .home {
    min-height: 100vh;
  }
}
</style>
