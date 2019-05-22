<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col-md-4 mb-4">
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
          <div class="w-100 pt-2">
            <nuxt-link :to="project.url">
              <h6>{{ project.title }}</h6>
            </nuxt-link>
            <p>
              {{ project.shortDescription }}
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
    projects () {
      return this.$store.state.allWork.filter(function (project) {
        return project.recent
      })
    },
  },
  data () {
    return {
    }
  },
  transition: 'fade'
}
</script>

<style scoped>
.font-light {
  font-weight: 500;
}

a h6 {
  color: #333;
}

a h6:hover {
  color: #0056b3;
}


.bg-overlay {
  opacity: .4;
  transition: 0.4s ease;
}

.bg-overlay:hover {
  background-color: #555;
  cursor: pointer;
  opacity: .1;
}
</style>
