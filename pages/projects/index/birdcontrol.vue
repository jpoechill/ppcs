<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <h6>
            Bird Control Systems ({{projects.length}})</h6> 
        </div>
      </div>
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col-md-4 mb-4">
          <div class="services-panel h-100">
            <div class="position-relative">
              <nuxt-link :to="project.url">
                <div class="position-absolute w-100 bg-overlay h-100">
                </div>
                <div>
                  <div class="w-100 bg-light">
                    <img :src="project.thumbnail" class="w-100" alt="">
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="w-100 p-4">
              <nuxt-link :to="project.url">
                <h6 class="link-dark">{{ project.title }}</h6>
              </nuxt-link>
              <p>
                {{ project.shortDescription }}
              </p>
            </div>
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
        return project.type.includes('bird-control')
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
</style>
