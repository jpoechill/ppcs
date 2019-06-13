<template>
  <div>
    <div class="container">
      <div class="row pt-3 pb-0">
        <div class="col-md-12">
          <h3>Contact</h3>
          <!-- <img src="desk.png" class="w-100 mb-3" alt=""> -->
          <p>
            We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
          </p>
        </div>
      </div>
    </div>
    <div class="container pt-3">
        <div class="row pt-0">
          <div class="col-md-12">
            <h5>Telephone</h5>
            <hr>
          </div>
          <div class="col-md-12 pt-0 pb-4">
            <p>
              Please reach us directly by telephone at: 1-888-772-2448. 
            </p>
            <p>
              Our hours are 9am-5pm, Monday through Friday.
            </p>
          </div>
        </div>
    </div>
    <div class="container">
        <div class="row pt-0 pb-5">
          <div class="col-md-12">
            <h5>Locations</h5>
            <hr>
          </div>
          <div class="col-md-6 pt-0 mb-2">
            <div class="w-100 pt-0">
              <h6>San Francisco</h6>
              <p>
                584 Castro Street, Suite 512<br> 
                San Francisco, CA 94114<br><br>
                Phone: 415-487-6323
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="w-100 pt-2">
              <h6>Concord</h6>
              <p>
                1717 Solano Way, Unit 32 <br>
                Concord, CA 94520 <br><br>
                Phone: 925-247-0334 <br>
                Fax: 925-247-0286
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="w-100 pt-2">
              <h6>Reno</h6>
              <p>
                2621 Northgate Lane, Suite 6<br>
                Carson City, NV 89706 <br><br>
                Phone: 775-888-1332 <br>
                Fax: 775-883-2384
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="w-100 pt-2">
              <h6>Nevada</h6>
              <p>
                9120 Double Diamond Parkway<br>
                Reno, NV 89521<br><br>
                Phone: 775-525-2892 <br>
                Fax: 775-525-2898
              </p>
            </div>
          </div>
        </div>
    </div>
    <!-- Desktop -->
    <!-- <div class="container d-none d-md-block">
      <div class="row pt-4">
        <div class="col-md-12 text-center pb-1 letter-spacing">
          <h5 class="font-light">
            <nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
          <hr>
        </div>
      </div>
    </div> -->
    <!-- Mobile -->
    <!-- <div class="container d-md-none">
      <div class="row pt-4">
        <div class="col-md-12 text-center pb-0">
          <h5 class="font-light">
            <nuxt-link v-for="link in links" class="p-2" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
          <hr>
        </div>
      </div>
    </div>
    <div class="">
      <nuxt-child></nuxt-child>
    </div> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      links: [
        {
          title: 'Request an Estimate',
          name: 'request',
          url: '/contact/request',
          isActive: false
        },
        {
          title: 'Telephone',
          name: 'telephone',
          url: '/contact/telephone',
          isActive: false
        },
        {
          title: 'Locations',
          name: 'contact',
          url: '/contact',
          isActive: true
        },
      ]
    }
  },
  methods: {
    handleClick(linkName) {
      this.links.forEach(function(link) {
        if (link.name === linkName) {
          link.isActive = true
        } else {
          link.isActive = false
        }
      })
    },
    updatePath () {
      let path = this.$route.path.split('/')
      let fullPath = this.$route.path

      if (path[1] === 'contact') {
        this.links.forEach(function(link) {
          if (link.url === fullPath) {
            link.isActive = true
          } else {
            link.isActive = false
          }
        })
      }
    }
  },
  mounted() {
    this.updatePath()
  },
  watch: {
    $route () {
      this.updatePath()
    }
  },
  transition: 'fade'
}
</script>

<style>
input, textarea {
  border-radius: 18px!important;
  padding-left: 18px!important;
}
</style>
