<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <h6>
            Sealants, Coatings & Weatherproofing ({{projects.length}})</h6> 
        </div>
      </div>
      <div class="row">
        <div v-for="(historic, index) in projects" :key="index" class="col-md-4 mb-4">
          <div class="position-relative">
            <nuxt-link :to="historic.url">
              <div class="position-absolute bg-overlay w-100 h-100">
              </div>
              <div class="w-100 bg-light">
                  <img :src="historic.thumbnail" class="w-100" alt="">
              </div>
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    projects () {
      return this.$store.state.allWork.filter(function (project) {
        return project.type.includes('weatherproofing')
      })
    }
  },
  data () {
    return {}
  },
  transition: 'fade'
}
</script>

<style>
.font-light {
  font-weight: 500;
}

a h6 {
  color: #333;
}

a h6:hover {
  color: #0056b3;
}
</style>
