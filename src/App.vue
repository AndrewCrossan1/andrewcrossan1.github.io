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
  background: url("https://portfolio-cdn.nyc3.cdn.digitaloceanspaces.com/img%2FSprinkle.svg") no-repeat center center;
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
