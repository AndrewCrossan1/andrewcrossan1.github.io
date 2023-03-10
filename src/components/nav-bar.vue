<template>
  <b-navbar toggleable="md" type="dark" variant="dark-card" class="p-3 shadow-sm shadow" sticky>
    <b-navbar-brand>
      <b-link to="/" class="navbar-brand ms-auto d-xl-none d-lg-none d-md-none text-lobster fs-1">
        Andrew Crossan
      </b-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item>
          <b-link to="/" class="nav-link text-white hover-underline" font="roboto">
            <b-icon icon="house-fill"/>
            Home
          </b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/about" class="nav-link text-white hover-underline" font="roboto">
            <b-icon icon="person-fill" class="text-white"/>
            About
          </b-link>
        </b-nav-item>
        <b-nav-item class="d-none d-xl-block d-lg-block d-md-block">
          <b-link to="/" class="navbar-brand mx-auto">
            <img src="@/assets/images/logo.png" alt="logo" width="30" height="30">
          </b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/blog" class="nav-link text-white hover-underline" font="roboto">
            <b-icon icon="people-fill" class="text-white"/>
            Blog
          </b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/projects" class="nav-link text-white hover-underline" font="roboto">
            <b-icon icon="code-slash" class="text-white"/>
            Projects
          </b-link>
        </b-nav-item>
        <!-- TODO: Integrate with backend (To get logged in status) -->
        <b-nav-item-dropdown v-if="this.routeName === null || this.routeName.startsWith('blog')" text="Account" tag="a" right class="nav-link text-white hover-underline">
          <b-dropdown-item to="/account/login">Login</b-dropdown-item>
          <b-dropdown-item to="/account/register">Register</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item to="/account/reset-password">Password Reset</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- TODO: Add dropdown for logged in users -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      routeName: null
    }
  },
  watch: {
    '$route.name' (newVal) {
      this.routeName = newVal
    }
  }
}
</script>

<style scoped>
.nav-link {
  font-size: 1.1rem;
}
</style>
