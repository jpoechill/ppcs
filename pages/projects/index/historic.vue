<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <h6>
            <nuxt-link to="/">Historic Restoration (12)</nuxt-link> | All Work</h6> 
        </div>
      </div>
      <div class="row">
        <div v-for="project in projects" :key="project.name" class="col-md-4 mb-4">
          <div class="w-100 bg-light pt-5 pb-5">
            <nuxt-link to="/projects/sitel">
              <img src="" class="pt-5 pb-5" alt="">
            </nuxt-link>
          </div>
          <div class="w-100 pt-2">
            <nuxt-link :to="project.url">
              <h6>{{ project.title }}</h6>
            </nuxt-link>
            <p>
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  transition: 'fade'
}
</script>

<style>
.font-light {
  font-weight: 500;
}

a h6 {
  color: #333;
}

a h6:hover {
  color: #0056b3;
}
</style>
