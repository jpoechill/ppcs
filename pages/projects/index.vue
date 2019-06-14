<template>
  <div class="bg-custom">
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-12">
          <h3>Projects</h3>
          <p>
            It is our mission to provide high quality and effective building restoration and preservation services. Our team consists experienced and highly trained men and women who have extensive knowledge and experience. It is important to us that we provide the highest quality service and the results you desire.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-12 text-center pb-1 letter-spacing">
          <h5 class="font-light">
            <nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
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
          title: 'Featured Work',
          name: 'featured',
          url: '/projects',
          isActive: true
        },
        {
          title: 'Recent Work',
          name: 'recent',
          url: '/projects/recent',
          isActive: false
        },
        {
          title: 'All Work',
          name: 'all',
          url: '/projects/all',
          isActive: false
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

      if (path[1] === 'projects') {
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
  scrollToTop: true,
  transition: 'fade'
}
</script>

<style>
.font-light {
  font-weight: 500;
}

.bg-custom {
  background-color: #f7f7f7!important;
  border-bottom: none;
}
</style>
