<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pt-4">
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
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h5>The Leading Company for Building Restoration and Preservation </h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum hendrerit dui, at mollis mi vestibulum in. Morbi porttitor turpis eget tortor lacinia, id venenatis felis vehicula. Vivamus porttitor, arcu sit amet mollis semper, mauris est sodales lacus, eu iaculis ligula est at velit. Aliquam quis magna eget eros pharetra rutrum molestie id urna.
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-5 ">
        <div class="col-md-12">
          <h5>Services</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light">
            <img src="/services/historic.png" class="w-100" alt="">
          </div>
          <!-- <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/services/historic-restoration">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div> -->
          <div class="w-100 pt-3">
            <nuxt-link to="/services/historic-restoration">
              <h5>Historic Restoration</h5>
            </nuxt-link>
            Our historic building restoration services allow important and historically valuable buildings and property to be restored to original or close to original condition. We are passionate about preserving symbols of the past and also ensuring they are protected from future damage.
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <img src="/services/consulting.png" class="w-100" alt="">
          </div>
          <!-- <div class="w-100 bg-light pt-5 pb-5">
            <img src="" class="pt-5 pb-5" alt="">
          </div> -->
          <div class="w-100 pt-3">
            <nuxt-link to="/services/consulting">
              <h5>Project Consulting & Testing</h5>
            </nuxt-link>
            We pride ourselves in offering a comprehensive list of building preservation services. It includes property consulting services that involve a thorough evaluation of your desired project. We determine the best solution with you and once we can establish the most effective approach, we begin the process.
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <img src="/services/building.png" class="w-100" alt="">
          </div>
          <!-- <div class="w-100 bg-light pt-5 pb-5">
            <img src="" class="pt-5 pb-5" alt="">
          </div> -->
          <div class="w-100 pt-3">
            <nuxt-link to="/services/cleaning">
              <h5>Building Restoration & Cleaning</h5>
            </nuxt-link>
            Our building cleaning consists of cleaning up years of waste and pollutants that build up on GRFC panels, stone, brick, concrete, aluminum, and other materials. Our building preservation services are guaranteed to make your building or property look beautiful again!
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <!-- <div class="w-100 bg-light pt-5 pb-5">
            <img src="" class="pt-5 pb-5" alt="">
          </div> -->
          <div class="w-100 bg-light">
            <img src="/services/weatherproofing.png" class="w-100" alt="">
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/weatherproofing">
              <h5>Sealants, Coatings & Weatherproofing</h5>
            </nuxt-link>
            Constant exposure to rain, snow, and other weather conditions can cause decay to the exterior of buildings. Our building waterproofing services ensure that your building maintain its beautiful look, despite the weather!
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <!-- <div class="w-100 bg-light pt-5 pb-5">
            <img src="" class="pt-5 pb-5" alt="">
          </div> -->
          <div class="w-100 bg-light">
            <img src="/services/glass.png" class="w-100" alt="">
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/glass-restoration">
              <h5>Glass Restoration & Cleaning</h5>
            </nuxt-link>
            We provide a thorough and high quality window washing service and glass restoration for commercial buildings. We also have the technology and skills to remove graffiti, scratches, stains, and other damage.
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <img src="/services/birdnetting.png" class="w-100" alt="">
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/bird-control">
              <h5>Bird Control Systems</h5>
            </nuxt-link>
           Bird droppings can carry numerous diseases that can be transmitted to people who come in contact with the building or structure. To prevent these issues, PPC&S developed an efficient and humane way to inhibit birds from nesting or roosting on your building.
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-6">
          <h5>Recent Projects</h5>
        </div>
        <div class="col-md-6 text-right">
          View All
        </div>
      </div>
      <div class="row">
        <div v-for="(project, index) in recentProjects" :key="index" class="col-md-4 mb-4">
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
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-6">
          <h5>Client List</h5>
        </div>
        <div class="col-md-6 text-right">
          <nuxt-link to="/clients">View All</nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img src="construction-logos.png" class="w-100" alt="">
        </div>
      </div>
    </div>
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
    }
  },
  data () {
    return {}
  },
  transition: 'fade'
}
</script>

<style>
.link-dark {
  color: #333;
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
