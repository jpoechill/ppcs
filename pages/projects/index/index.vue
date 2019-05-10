<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="project in featuredProjects" :key="project.name" class="col-md-4 mb-4">
          <div class="w-100 bg-light">
            <nuxt-link to="/projects/sitel">
              <img :src="project.thumbnail" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link :to="project.url">
              <h6>{{ project.title }}</h6>
            </nuxt-link>
            <p>
              {{ project.description }}
            </p>
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
    featuredProjects () {
      return this.$store.state.featuredProjects
    },
  },
  data () {
    return {
    }
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
