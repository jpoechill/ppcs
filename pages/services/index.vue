<template>
  <div>
    <div class="container">
      <div class="row pt-4 pb-4">
        <div class="col-md-12">
          <h1>Services</h1>
          We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
        </div>
      </div>
    </div>
    <nuxt-child></nuxt-child>
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
</style>
