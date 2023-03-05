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
          <b-link to="/contact" class="nav-link text-white hover-underline" font="roboto">
            <b-icon icon="telephone-fill" class="text-white"/>
            Contact
          </b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/projects" class="nav-link text-white hover-underline" font="roboto">
            <b-icon icon="code-slash" class="text-white"/>
            Projects
          </b-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
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
  background-color: mediumseagreen;
  transform-origin: bottom right;
  transition: transform 0.4s ease-out;
}

.hover-underline:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.nav-link {
  font-size: 1.1rem;
}
</style>
