<template>
  <div>
    <div class="container">
      <div class="row pb-3">
        <div class="col-md-12">
          <nuxt-link to="/services">Back to Services</nuxt-link> | 
          <nuxt-link to="/services/cleaning">View next service →</nuxt-link> 
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h5>Project Consulting and Testing</h5>
          <p>
            Each service project we provide is guaranteed to be unique and personalized to every client's needs. There is no one “magic formula” that works on every building or in every situation. 
          </p>
          <p>
            We offer the following:
          </p>
          <ul>
            <li>Building Restoration and Cleaning</li>
            <li>Building Restoration and Preservation</li>
            <li>Historic Building Restoration</li>
            <li>Implementing Cruelty Free and Efficient Bird Control Systems</li>
            <li>Commercial Window Washing Service and Maintenance</li>
            <li>Top Notch Building Waterproofing Services</li>
            <li>Project Consulting and Testing</li>
          </ul>
          <p>
            Our Project Consulting service will provide a comprehensive evaluation of your project(s) to determine the most effective means, methods, and products necessary to tackle even the most difficult problems. Once we have determined the process required we conduct fielding testing to insure we have provided the best possible solution.
          </p>
          <p>
             When and only when we have obtained the desired results, we issue a detailed restoration plan. This includes: a written narrative describing each problem and the corrective measures to be taken along with a photo journal, project specification, means, methods and application instructions, production schedules, safety plans, and a detailed cost analysis for the work.
          </p>
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
</style>
