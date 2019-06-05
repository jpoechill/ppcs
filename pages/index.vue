<template>
  <div>
    <section class="bg-white">
      <!-- <div class="container">
        <div class="row"> -->
          <!-- <div class="col-md-12 pt-0"> -->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
            <!-- <img src="covers/vegas.png" class="w-100 pt-3" alt=""> -->
          <!-- </div> -->
        <!-- </div>
      </div> -->
      <div class="container">
        <div class="row pt-4 pb-5">
          <div class="col-md-12">
            <h5>The Leading Company for Building Restoration and Preservation </h5>
            <p>
              Since 1983, it has been our mission to be the leading source for efficient building restoration and preservation services.
              When you choose PPC&S’s building preservation services, you are receiving services from our efficient and results driven professionals. We are proud to have an exemplary safety record and a work force of over 100 highly trained and dedicated men and women. 
            </p></div>
        </div>
      </div>
    </section>
    <section class="section-service">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-12">
            <h5>Services</h5>
            <hr>
          </div>
        </div>
        <div class="row">
          <div v-for="(service, index) in services" :key="index" class="col-md-4 mb-custom">
            <div class="services-panel h-100">
              <div class="w-100 bg-light">
                <nuxt-link :to="service.url">
                  <img :src="service.img" class="w-100" alt="">
                </nuxt-link>
              </div>
              <div class="w-100 p-4">
                <nuxt-link to="/services/historic-restoration">
                  <h6>{{ service.title }}</h6>
                </nuxt-link>
                <p>
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-6">
          <h5>Recent Projects</h5>
        </div>
        <div class="col-md-6 text-right font-sml">
          <nuxt-link to="projects/recent">
            View All →
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <hr class="mt-0">
        </div>
      </div>
      <div class="row">
        <div v-for="(project, index) in recentProjects" :key="index" class="col-md-4 mb-custom">
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
    <!-- <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            Request a Free Estimate
          </div>
        </div>
      </div>
    </section> -->
    <section class="bg-white">
      <div class="container pb-4 mt-4">
        <div class="row pt-4">
          <div class="col-md-6 pt-4">
            <h5>Client List</h5>
          </div>
          <div class="col-md-6 text-right">
            <!-- <nuxt-link to="/clients">View All</nuxt-link> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <img src="construction-logos.png" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    recentProjects () {
      return this.$store.state.allWork.filter(function (project) {
        return project.recent
      }).slice(0, 3)
    },
    allWork () {
      return this.$store.state.allWork.map(function (item) {
        return item.name
      })
    }
  },
  mounted() {
    console.log(
      this.allWork
    )
  },
  data () {
    return {
      services: [
        {
          title: 'Historic Restoration',
          url: '/services/historic-restoration',
          img: '/services/historic.png',
          description: 'Our historic building restoration services allow important and historically valuable buildings and property to be restored to original or close to original condition.'
        },
        {
          title: 'Project Consulting and Testing',
          url: '/services/consulting',
          img: '/services/consulting.png',
          description: 'Our primary service includes property consulting services that involve a thorough evaluation of your desired project.'
        },
        {
          title: 'Building Restoration & Cleaning',
          url: '/services/cleaning',
          img: '/services/building.png',
          description: 'Our building cleaning consists of cleaning up years of waste and pollutants that build up on GRFC panels, stone, brick, concrete, aluminum, and other materials.'
        },
        {
          title: 'Sealants, Coatings & Weatherproofing',
          url: '/services/weatherproofing',
          img: '/services/weatherproofing.png',
          description: 'Constant exposure to rain, snow, and other weather conditions can cause decay to the exterior of buildings.'
        },
        {
          title: 'Glass Restoration & Cleaning',
          url: '/services/glass-restoration',
          img: '/services/glass.png',
          description: 'We provide a thorough and high quality window washing service and glass restoration for commercial buildings.'
        },
        {
          title: 'Bird Control Systems',
          url: '/services/bird-control',
          img: '/services/birdnetting.png',
          description: 'Bird droppings can carry numerous diseases that can be transmitted to people who come in contact with the building or structure.'
        },
      ]
    }
  },
  transition: 'fade'
}
</script>

<style>
.link-dark, a {
  color: #111;
}

.link-dark:hover, a:hover {
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

.section-service {
  /* background: #f6f6f6; */
}

.bg-light-custom {
  background: #f6f6f6;
}

.bg-light-custom {
  background: #f6f6f6;
}

.services-panel {
  background-color: #fff;
  box-shadow: 6px 6px 14px rgba(0, 0, 0, .075);
  border-radius: 10px;
  overflow: hidden;    
  /* -webkit-transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -ms-transition: 1s ease-in-out;
    -o-transition: 1s ease-in-out; */
    transition: .2s ease-in-out;
}

.services-panel:hover {
  box-shadow: 6px 6px 14px rgba(0, 0, 0, .15);
}

.height-80 {
  height: 80px;
}

.mt-80 {
  margin-top: 80px;
}

.mb-80-custom {
  margin-bottom: -80px;
}

@media only screen and (max-width: 768px) {
  .mb-80-custom {
    margin-bottom: -100px;
  }
}

</style>
