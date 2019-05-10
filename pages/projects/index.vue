<template>
  <div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h1>Projects</h1>
          It is our mission to provide high quality and effective building restoration and preservation services. Our team consists experienced and highly trained men and women who have extensive knowledge and experience. It is important to us that we provide the highest quality service and the results you desire.
          <!-- When you commission a project, we strive to offer a comprehensive and inclusive service. Our staff will walk you through every step of the project to ensure you are aware and current with what is happening with your building.  -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-5">
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
            <nuxt-link to="/projects"></nuxt-link>
            <nuxt-link to="/projects/recent">Recent Work</nuxt-link>
            <nuxt-link to="/projects/all">All Work</nuxt-link>
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
    }
  },
  transition: 'fade'
}
</script>

<style>
.font-light {
  font-weight: 500;
}

h5 a {
  padding: 10px;
}
</style>
