<template>
  <div>
    <div class="bg-custom fixed-top">
      <!-- Desktop -->
      <div class="container pt-2 pb-2 d-none d-md-block">
        <div class="row">
          <div class="col-md-4 d-flex pt-2 align-items-middle justify-content-start">
            <nuxt-link to="/" @click.native="handleClick('')">
              <img src="/logo-light.png" class="w-custom pb-1 pt-2" alt="">
            </nuxt-link>
          </div>
          <div class="col-md-8 text-right pt-2 pb-1">
            <h5>
              <img src="/30-years-light.png" class="service-years pb-0 pr-2 ml-1" alt=""> 
              <nuxt-link v-for="link in links" :key="link.name" :to="link.url" class="header-links" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
              
            </h5>
          </div>
        </div>
      </div>
      <!-- Mobile -->
      <div class="container pt-3 pb-0 d-md-none">
        <div class="row">
          <div class="col-md-4 d-flex text-center align-items-middle justify-content-center">
            <nuxt-link to="/" @click.native="handleClick('')">
              <img src="/logo-light.png" class="w-custom pb-2" alt="">
            </nuxt-link>
          </div>
          <div class="col-md-8 text-center pt-1">
            <h5>
              <nuxt-link v-for="link in links" :key="link.name" :to="link.url" class="header-links p-2" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Project Header Links -->
    <transition name="fade" appear>
      <div v-if="currIndex !== -1" class="container mt-80 mb-80-custom">
        <div class="row pt-3">
          <div class="col-md-12 font-sml">
            <nuxt-link to="/projects">Back to Projects</nuxt-link> | 
            <nuxt-link :to="'/projects/' + listProjects[prevIndex].name">View Previous</nuxt-link> | 
            <nuxt-link :to="'/projects/' + listProjects[nextIndex].name">View Next →</nuxt-link> 
          </div>
        </div>
      </div>
    </transition>
    <nuxt class="mt-80" />
    <div class="footer">
      <div class="container mt-0 pt-5 pb-5 d-none d-md-block">
        <div class="row">
          <div class="offset-md-6 col-md-6 text-right">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="/logo-light.png" class="w-25 pb-2" alt=""> <br>
            Professional Property Consultants & Services, Inc. © 2019 <br>
            CL# 927489 | Classification: C61, D63, D64
          </div>
          <div class="col-md-6 text-right">
            <a href="https://instagram.com/ppcsrestore" target="_blank">
              <img src="/social-instagram.svg" alt="instagram">
            </a>
            <!-- <a href="https://twitter.com/ppcsrestore" target="_blank">
              <img src="/social-twitter.svg" class="pl-4" alt="twitter">
            </a> -->
            <a href="https://www.facebook.com/ppcsrestore" target="_blank">
              <img src="/social-facebook.svg" class="pl-4" alt="facebook">
            </a>
          </div>
        </div>
      </div>
      <div class="container pt-3 pb-5 d-md-none">
        <div class="row">
          <div class="col-md-6">
            <a href="https://instagram.com/ppcsrestore" target="_blank">
              <img src="/social-instagram.svg" alt="instagram">
            </a>
            <!-- <a href="https://twitter.com/ppcsrestore" target="_blank">
              <img src="/social-twitter.svg" class="pl-4" alt="twitter">
            </a> -->
            <a href="https://www.facebook.com/ppcsrestore" target="_blank">
              <img src="/social-facebook.svg" class="pl-4" alt="facebook">
            </a>
            <br><br>
            <img src="/logo-light.png" class="w-25 pb-2" alt=""> <br>
            PPC&S, Inc. © 2019 
          </div>
          <div class="col-md-6">
            CL# 927489 | Classification: C61, D63, D64
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      links: [
        {
          title: 'About',
          name: 'about',
          url: '/about',
          isActive: false
        },
        {
          title: 'Services',
          name: 'services',
          url: '/services',
          isActive: false
        },
        {
          title: 'Projects',
          name: 'projects',
          url: '/projects',
          isActive: false
        },
        {
          title: 'Contact',
          name: 'contact',
          url: '/contact',
          isActive: false
        },
      ]
    }
  },
  computed: {
    nextIndex() {
      if (this.currIndex === (this.listProjects.length-1)) {
        return 0
      } else {
        return this.currIndex + 1
      }
    },
    prevIndex() {
      if (this.currIndex === 0) {
        return this.listProjects.length-1
      } else {
        return this.currIndex - 1
      }
    },
    currIndex() {
      return this.$store.state.allWork.map(function (project) {
          return project.name
        }).indexOf(this.$route.params.projectName)
    },
    currProject () {
      let self = this 

      return this.$store.state.allWork.filter(function (project, index) {
        console.log('index:' + index)
        return project.name === self.$route.params.projectName
      })[0]
    },
    listProjects () {
      return this.$store.state.allWork
    }
  },
  mounted () {
    let currPath = this.$route.path.split('/')[1]

    this.links.forEach(function (link) {
      if (link.name === currPath) {
        link.isActive = true
      }
    })
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
}
</script>

<style>
body, html {
  font-size: 18px;
  background-color: #f7f7f7;
}

p, ul li, .font-sml {
  font-size: 16px;
  color: #555;
}

.letter-spacing {
  letter-spacing: .02rem;
}

.letter-spacing-sm {
  letter-spacing: .0rem;
}


.active {
  color: #0080ff !important;
}

a {
  color: #777;
  font-weight: 400;
}

a:hover {
  text-decoration: none;
}

.header-links {
  color: #111;
}

.header-links:hover {
  color: #0080ff;
}

.service-years {
  width: 60px;
}

.footer {
  background-color: #f6f6f6;
  font-size: 16px;
  color: #555;
}

.container {
  max-width: 1040px;
}

.w-custom {
  width: 60%;
}

.mb-custom {
  margin-bottom: 2.25rem!important;
}

.bg-custom {
  background-color: #fafafa;
  border-bottom: 1px solid #d9d9d9;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}

.long-fade-enter-active, .long-fade-leave-active {
  transition: opacity 3s;
}

.long-fade-enter, .long-fade-leave-to, .long-fade-leave-active {
  opacity: 0;
}

.fadein-custom {
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein 2s; /* Firefox < 16 */
      -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
          animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
