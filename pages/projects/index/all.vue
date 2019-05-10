<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/projects/historic">
            <h6>Historic Restoration ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div v-for="historic in allWork" :key="historic.name" class="col-md-4 mb-4">
          <div class="w-100 bg-light">
            <nuxt-link :to="historic.url">
              <img :src="historic.thumbnail" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link to="/projects/historic/sitel-san-angelo-tx">
              <h6>{{ historic.title }}</h6>
            </nuxt-link>
            {{ historic.shortDescription }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/projects/consulting">
            <h6>Project Consulting & Testing ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/projects/sitel">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link to="/projects/sitel">
              <h6>Sitel Corporation – San Angelo, TX</h6>
            </nuxt-link>
            The Sitel Building had gone through decades of harsh weather.
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/projects/cleaning">
            <h6>Eco-friendly Building Cleaning ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/projects/sitel">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link to="/projects/sitel">
              <h6>Sitel Corporation – San Angelo, TX</h6>
            </nuxt-link>
            The Sitel Building had gone through decades of harsh weather.
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/projects/weatherproofing">
            <h6>Sealant Coatings & Weatherproofing ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/projects/sitel">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link to="/projects/sitel">
              <h6>Sitel Corporation – San Angelo, TX</h6>
            </nuxt-link>
            The Sitel Building had gone through decades of harsh weather.
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/projects/glass">
            <h6>Glass Restoration & Cleaning ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/projects/sitel">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link to="/projects/sitel">
              <h6>Sitel Corporation – San Angelo, TX</h6>
            </nuxt-link>
            The Sitel Building had gone through decades of harsh weather.
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/projects/birdcontrol">
            <h6>Bird Control Systems ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/projects/sitel">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link to="/projects/sitel">
              <h6>Sitel Corporation – San Angelo, TX</h6>
            </nuxt-link>
            The Sitel Building had gone through decades of harsh weather.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    allWork () {
      return this.$store.state.allWork
    }
  },
  transition: 'fade'
}
</script>

<style>
.font-light {
  font-weight: 500;
}

h5 a {
  padding: 10px;
}
</style>
