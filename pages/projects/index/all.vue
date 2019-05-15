<template>
  <div>
    <div v-for="(service, index) in services" :key="index" class="container">
      <div class="row">
        <div class="col-md-12 pb-2">
          <nuxt-link to="/projects/historic">
            <h6>{{ service.title }} ({{ allWork.length }})</h6> 
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div v-for="(historic, index) in getFirstThree(allWork)" :key="index" class="col-md-4 mb-4">
          <div class="position-relative">
            <nuxt-link :to="historic.url">
              <div class="position-absolute w-100 bg-custom h-100">
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
    allWork () {
      return this.$store.state.allWork
    }
  },
  data: function () {
    return {
      services: [
        {
          title: 'Historic Restoration'
        },
        {
          title: 'Project Consulting & Testing'
        },
        {
          title: 'Building Restoration & Cleaning'
        },
        {
          title: 'Sealants, Coatings & Weatherproofing'
        },
        {
          title: 'Glass Restoration & Cleaning'
        },
        {
          title: 'Bird Control Systems'
        },
      ]
    }
  },
  methods: {
    getFirstThree (arr) {
      return arr.slice(0, 3)
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

.bg-custom {
  background-color: #111;
  opacity: .4;
  transition: 0.4s ease;
}

.bg-custom:hover {
  cursor: pointer;
  opacity: .1;
}
</style>
