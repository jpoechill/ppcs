<template>
  <div>
    <div class="container pb-4">
      <div class="row pb-3">
        <div class="col-md-12 pt-4">
          <form action="https://formspree.io/ppcswww@gmail.com" method="POST">
            <h5>Request an Estimate</h5>
            <p class="pt-3 pb-0 mb-2">
              Who are you?
            </p>
            <input type="text" name="Name" placeholder="John Smith, General Manager" class="form-control w-100">
            <p class="pt-3 pb-0 mb-2">
              Who do you represent?
            </p>
            <input type="text" name="Company" placeholder="The White House – USA" class="form-control w-100">
            <p class="pt-3 pb-0 mb-2">
              Where is your building, or worksite located (city, state)?
            </p>
            <input type="text" name="Location" placeholder="Washington D.C, MD" class="form-control w-100">
            <p class="pt-3 pb-0 mb-2">
              What is your concern, or what do you need to have restored?
            </p>
            <textarea rows="4" name="ProjectDescription" placeholder="Tell us about your building, what services you might need, or what expertise you might currently require." class="form-control w-100"></textarea>
            <p class="pt-3 pb-0 mb-2">
              Lastly, how can we contact you?
            </p>
            <input type="text" name="Contact" placeholder="john.smith@gmail.com, or phone at 415-555-5555" class="form-control w-100">
            <button type="submit" class="mx-auto w-50 form-control fake-link text-uppercase font-weight-bold btn-dark py-1 mt-4">
              Request an Estimate
            </button>
          </form>
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
