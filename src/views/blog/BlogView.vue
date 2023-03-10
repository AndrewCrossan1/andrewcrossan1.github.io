<template>
  <div class="container-fluid w-75 py-5" v-if="this.$debug">
    <b-row class="justify-content-center white-glass-card">
      <b-row>
        <div class="col-2 col__left pt-4">
          <h3 class="text-tilt-warp text-white">Your stuff</h3>
          <p class="small text-roboto text-white">View liked posts, account details, tags and more!</p>
          <!-- Navigation -->
        </div>
        <div class="col-7 pt-4 p-4">
          <b-row class="row__bottom">
            <div class="col-8">
              <h2 class="text-tilt-warp text-white mb-0">Posts</h2>
              <p class="text-roboto mt-2 text-white">
                View all posts here or click one of the buttons below to sort by a specific criteria.
              </p>
            </div>
            <div class="col-4 d-flex align-items-center justify-content-end">
              <b-button variant="aquamarine" class="float-end mb-0">New Post</b-button>
            </div>
          </b-row>
          <b-row class="pt-4 justify-content-end row__bottom pb-4">
            <b-btn-group>
              <b-button variant="outline-aquamarine">Newest</b-button>
              <b-button variant="outline-aquamarine">Oldest</b-button>
              <b-button variant="outline-aquamarine">Most Popular</b-button>
              <b-button variant="outline-aquamarine">Top Rated</b-button>
            </b-btn-group>
          </b-row>
        </div>
        <div class="col-3 pt-4 justify-content-end">
          <div class="card bg-transparent shadow-light-sm ">
            <div class="card-header bg-light">
              <h3 class="text-bebas text-black mb-0">Top Posts</h3>
            </div>
            <b-list-group class="card__top">
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
            </b-list-group>
          </div>
          <div class="bg-dark-card my-4 rounded-2 p-2">
            AdSpace
          </div>
          <div class="card bg-transparent shadow-light-sm">
            <div class="card-header bg-light">
              <h3 class="text-bebas text-black mb-0">Top Users</h3>
            </div>
            <b-list-group class="card__top">
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
            </b-list-group>
          </div>
          <div class="bg-dark-card my-4 rounded-2 p-2">
            AdSpace
          </div>
          <div class="card bg-transparent shadow-light-sm my-4">
            <div class="card-header bg-light">
              <h3 class="text-bebas text-black mb-0">Top Tags</h3>
            </div>
            <b-list-group class="card__top">
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
              <b-list-group-item>Item 1</b-list-group-item>
            </b-list-group>
          </div>
        </div>
      </b-row>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'BlogView'
}
</script>

<style scoped>

.white-glass-card {
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 2px 4px 1px rgba( 0, 0, 0, 0.3 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 5px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.col__left {
  border-right: 1px solid rgba( 255, 255, 255, 0.18 );
}

.shadow-light-sm {
  box-shadow: 0 0 0.3rem white;
  border: none !important;
}

</style>
