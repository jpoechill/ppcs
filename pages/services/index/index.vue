<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="(service, index) in services" :key="index" class="col-md-4 mb-4">
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
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      showNav: false,
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
