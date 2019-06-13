<template>
  <div class="bg-custom">
    <div class="container">
      <div class="row pt-3 pb-4">
        <div class="col-md-12">
          <h3>Services</h3>
          <p>
            We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
          </p>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="showNav" class="container">
        <div class="row pb-3">
          <div class="col-md-12">
            <nuxt-link to="/services">Back to Services</nuxt-link> | 
            <nuxt-link :to="'/services/' + nextPage">View next service →</nuxt-link>
          </div>
        </div>
      </div>
    </transition>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: false,
      nextPage: 'historic-restoration',
      linksList: [
        'historic-restoration',
        'consulting',
        'cleaning',
        'weatherproofing',
        'glass-restoration',
        'bird-control'
      ]
    }
  },
  methods: {
    updatePath () {
      let path = this.$route.path.split('/')
      let fullPath = this.$route.path

      if (path[2]) {
        this.showNav = true
      } else {
        this.showNav = false
      }
    },
    updateNext () {
      let path = this.$route.path.split('/')
      let currPath = path[2]

      let currIndex = this.linksList.indexOf(currPath)

      console.log('curr:' + currIndex)
      console.log('len:' + this.linksList.length)

      if (currIndex === (this.linksList.length - 1)) {
        currIndex = -1
      }

      this.nextPage = this.linksList[currIndex+1]
    }
  },
  mounted() {
    this.updatePath()
  },
  watch: {
    $route () {
      this.updateNext()
      this.updatePath()
    }
  },
  scrollToTop: true,
  transition: 'fade'
}
</script>

<style scoped>
.bg-custom {
  background-color: #f7f7f7!important;
  border-bottom: none;
}
</style>
