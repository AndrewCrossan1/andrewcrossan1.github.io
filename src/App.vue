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

<style lang="scss">
 #app{
  background: url('@/assets/images/4kback.webp') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.other-route-view {
}

@media (min-width: 768px) {
  .home {
    min-height: 100vh;
  }
}
</style>
