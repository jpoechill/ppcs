<template>
  <div>
    <div class="container mh-custom">
      <div class="row mb-0-responsive pt-2-responsive pb-32">
        <div class="col-md-12">
          <div v-if="currProject.headerImages.length === 1">
            <img :src="currProject.headerImages[0]" class="w-100 mb-3" alt="">
          </div>
          <div v-else id="carouselExampleIndicators" class="carousel slide pb-3" data-ride="carousel">
            <ol class="carousel-indicators">
              <li v-for="(headerImg, index) in currProject.headerImages" :key="index" data-target="#carouselExampleIndicators" :data-slide-to="index" :class="{ active: (index===0) }"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item" :class="{ active: (index === 0) }" v-for="(headerImg, index) in currProject.headerImages" :key="index">
                <img class="d-block w-100" :src="headerImg" alt="First slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h3 class="pb-1">{{ currProject.title }}</h3>
          <div v-html="currProject.fullDescription"></div>
        </div>
      </div>
      <div v-if="currProject.selectedImages" class="container p-0 mt-4">
        <div class="row">
          <div class="col-md-12">
            <p>
              <em>Selected Project Images</em>
            </p>
          </div>  
        </div>
        <div class="row">
          <div v-for="(img, index) in currProject.selectedImages" :key="index" class="col-md-4">
            <img :src="img.url" class="w-100 mb-4" alt="">
          </div>
        </div>
      </div>
      <div class="row mb-4 mt-4">
        <div class="col-md-4">
          <h6>Client</h6>
          <p>
            {{ currProject.client }}
          </p>
        </div>
        <div class="col-md-4">
          <h6>Location</h6>
          <p>
            {{ currProject.location }}
          </p>
        </div>
        <div class="col-md-4">
          <h6>Project Type</h6>
          <p>
            {{ currProject.reference }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    currProject () {
      let self = this 

      return this.$store.state.allWork.filter(function (project, index) {
        return project.name === self.$route.params.projectName
      })[0]
    }
  },
  mounted() {},
  scrollToTop: true,
  transition: 'fade'
}
</script>

<style scoped>
.mh-custom {
  min-height: 600px;
}
</style>
