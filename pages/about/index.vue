<template>
  <div>
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-12">
          <h3>About</h3>
          We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
          </div>
      </div>
    </div>
    <!-- Desktop -->
    <div class="container d-none d-md-block">
      <div class="row pt-4">
        <div class="col-md-12 text-center pb-1 letter-spacing">
          <h5 class="font-light">
            <nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
          <hr>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="container d-md-none">
      <div class="row pt-4">
        <div class="col-md-12 text-center pb-0">
          <h5 class="font-light">
            <nuxt-link v-for="link in links" class="p-2" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
          <hr>
        </div>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'About',
          name: 'about',
          url: '/about',
          isActive: true
        },
        {
          title: 'History',
          name: 'history',
          url: '/about/history',
          isActive: false
        },
        {
          title: 'Leadership',
          name: 'leadership',
          url: '/about/leadership',
          isActive: false
        },
        {
          title: 'Safety',
          name: 'safety',
          url: '/about/safety',
          isActive: false
        },
        {
          title: 'Careers',
          name: 'careers',
          url: '/about/careers',
          isActive: false
        }
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
    }
  },
  watch: {
    $route () {
      // update active links
      let path = this.$route.path.split('/')
      let fullPath = this.$route.path


      if (path[1] === 'about') {
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
  transition: 'fade'
}
</script>

<style>
</style>
