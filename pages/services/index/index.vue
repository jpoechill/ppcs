<template>
  <div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-4 mb-4">
          <div class="w-100 bg-light">
            <nuxt-link to="/services/historic-restoration">
              <img src="/services/historic.png" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/historic-restoration">
              <h6>Historic Restoration</h6>
            </nuxt-link>
            <p>
              Our historic building restoration services allow important and historically valuable buildings and property to be restored to original or close to original condition. We are passionate about preserving symbols of the past and also ensuring they are protected from future damage.
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <nuxt-link to="/services/consulting">
              <img src="/services/consulting.png" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/consulting">
              <h6>Project Consulting & Testing</h6>
            </nuxt-link>
            <p> 
              We pride ourselves in offering a comprehensive list of building preservation services. It includes property consulting services that involve a thorough evaluation of your desired project. We determine the best solution with you and once we can establish the most effective approach, we begin the process.
            </p>
            </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <nuxt-link to="/services/cleaning">
              <img src="/services/building.png" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/cleaning">
              <h6>Building Restoration & Cleaning</h6>
            </nuxt-link>
            <p>
              Our building cleaning consists of cleaning up years of waste and pollutants that build up on GRFC panels, stone, brick, concrete, aluminum, and other materials. Our building preservation services are guaranteed to make your building or property look beautiful again!
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <nuxt-link to="/services/weatherproofing">
              <img src="/services/weatherproofing.png" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/weatherproofing">
              <h6>Sealants, Coatings & Weatherproofing</h6>
            </nuxt-link>
            <p>
              Constant exposure to rain, snow, and other weather conditions can cause decay to the exterior of buildings. Our building waterproofing services ensure that your building maintain its beautiful look, despite the weather!
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <nuxt-link to="/services/glass-restoration">
              <img src="/services/glass.png" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/glass-restoration">
              <h6>Glass Restoration & Cleaning</h6>
            </nuxt-link>
            <p>
              We provide a thorough and high quality window washing service and glass restoration for commercial buildings. We also have the technology and skills to remove graffiti, scratches, stains, and other damage.
            </p>
            </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="w-100 bg-light">
            <nuxt-link to="/services/bird-control">
              <img src="/services/birdnetting.png" class="w-100" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-3">
            <nuxt-link to="/services/bird-control">
              <h6>Bird Control Systems</h6>
            </nuxt-link>
            <p>
              Bird droppings can carry numerous diseases that can be transmitted to people who come in contact with the building or structure. To prevent these issues, PPC&S developed an efficient and humane way to inhibit birds from nesting or roosting on your building.
            </p>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      showNav: false
    }
  },
  components: {
    Logo
  },
  transition: 'fade'
}
</script>

<style>
a h6 {
  color: #333;
}

a h6:hover {
  color: #0056b3;
}
</style>
