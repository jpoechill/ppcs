<template>
  <div>
    <div class="container">
        <div class="row pt-0 pb-5">
          <!-- <div class="col-md-12">
            <h5>Locations</h5>
          </div> -->
          <div class="col-md-6 pt-2 mb-2">
            <div class="w-100 pt-2">
              <h5>San Francisco</h5>
              <p>
                584 Castro Street, Suite 512<br> 
                San Francisco, CA 94114<br><br>
                Phone: 415-487-6323
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="w-100 pt-2">
              <h5>Concord</h5>
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
              <h5>Reno</h5>
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
              <h5>Nevada</h5>
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
