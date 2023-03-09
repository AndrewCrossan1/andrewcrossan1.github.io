<template>
  <div class="about-view mt-5">
    <b-container size="md" class="pt-5 mt-5">
      <b-row>
        <b-col>
          <h1 class="text-center text-tilt-warp text-white">About Me</h1>
        </b-col>
      </b-row>
      <div class="divider">
        <b-icon icon="star-fill" class="text-white" font-scale="2"/>
      </div>
      <b-row class="mt-5">
        <b-col>
          <about-me-card/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import aboutMeCard from '@/components/about-me-card'

export default {
  name: 'AboutView',
  components: {
    aboutMeCard
  }
}
</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #c2c2c2;
}

.divider::before, .divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid white;
}
.divider::before {
  margin-right: 0.25em;
}
.divider::after {
  margin-left: 0.25em;
}
</style>
