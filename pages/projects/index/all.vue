<template>
  <div>
    <div v-for="(service, index) in services" :key="index" class="container">
      <div class="row">
        <div class="col-md-6 pb-2">
          <nuxt-link :to="service.url">
            <h6>{{ service.title }} ({{ filterWork(service.filter) }})</h6> 
          </nuxt-link>
        </div>
        <div class="col-md-6 text-right font-sml">
          <nuxt-link :to="service.url">
            View All →
          </nuxt-link>
        </div>
      </div>
      <div class="row pb-3">
        <div v-for="(project, index) in getFirstThree(allWork, service.filter)" :key="index" class="col-md-4 mb-4">
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
    allWork () {
      return this.$store.state.allWork
    }
  },
  data: function () {
    return {
      services: [
        {
          title: 'Historic Restoration',
          filter: 'historic',
          url: '/projects/historic'
        },
        {
          title: 'Project Consulting & Testing',
          filter: 'consulting',
          url: '/projects/consulting'
        },
        {
          title: 'Building Restoration & Cleaning',
          filter: 'restoration',
          url: '/projects/restoration'
        },
        {
          title: 'Sealants, Coatings & Weatherproofing',
          filter: 'weatherproofing',
          url: '/projects/weatherproofing'
        },
        {
          title: 'Glass Restoration & Cleaning',
          filter: 'glass',
          url: '/projects/glass'
        },
        {
          title: 'Bird Control Systems',
          filter: 'bird-control',
          url: '/projects/birdcontrol'
        },
      ]
    }
  },
  methods: {
    getFirstThree (arr, filter) {
      return this.allWork.filter(function (project) {
        return project.type.includes(filter)
      }).slice(0, 3)
    },
    filterWork (filter) {
      return this.allWork.filter(function (project) {
        return project.type.includes(filter)
      }).length
    }
  },
  transition: 'fade'
}
</script>

<style scoped>
.font-light {
  font-weight: 500;
}

h5 a {
  padding: 10px;
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
