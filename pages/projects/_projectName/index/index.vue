<template>
  <div>
    <div class="container mh-custom">
      <div class="row pt-1 pb-4">
        <div class="col-md-12">
          <h3>{{ currProject.title }}</h3>
          <div id="carouselExampleIndicators" class="carousel slide pb-3" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="/covers/miami.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="/covers/houston.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="/covers/vegas.png" alt="Third slide">
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
          <div v-html="currProject.fullDescription"></div>
        </div>
      </div>
      <div class="row mb-4 mt-4">
        <div class="col-md-4">
          <h6>Client</h6>
          {{ currProject.client }}
        </div>
        <div class="col-md-4">
          <h6>Location</h6>
          {{ currProject.location }}
        </div>
        <div class="col-md-4">
          <h6>Type of Work</h6>
          {{ currProject.type }}
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
  transition: 'fade'
}
</script>

<style scoped>
.mh-custom {
  min-height: 600px;
}
</style>
