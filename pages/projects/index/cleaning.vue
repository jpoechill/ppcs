<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-3">
          <nuxt-link to="/">
            <h6>Eco-friendly Building Cleaning (12)</h6> 
          </nuxt-link>
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
    return {
      projects: [
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
        {
          title: 'Sitel Corporation – San Angelo, TX',
          name: 'sitel-san-angelo',
          description: 'The Sitel Building had gone through decades of harsh weather.',
          url: '',
          reference: 'HistoricRestoration'
        },
      ]
    }
  },
  transition: 'fade'
}
</script>

<style>
</style>
