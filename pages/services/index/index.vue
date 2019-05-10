<template>
  <div>
    <div class="container">
      <div class="row pt-4">
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
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  transition: 'fade'
}
</script>

<style>
a h5 {
  color: #333;
}

a h5:hover {
  color: #0056b3;
}
</style>
