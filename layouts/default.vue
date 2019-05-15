<template>
  <div>
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-4 d-flex align-items-middle justify-content-start">
          <nuxt-link to="/" @click.native="handleClick('')"><img src="/logo-02.png" class="w-50" alt=""></nuxt-link>
        </div>
        <div class="col-md-8 text-right pt-1">
          <h5>
            <nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <div v-if="currIndex !== -1" class="container">
        <div class="row pt-4">
          <div class="col-md-12">
            <nuxt-link to="/projects">Back to Projects</nuxt-link> | 
            <nuxt-link :to="'/projects/' + listProjects[prevIndex].name">View Previous</nuxt-link> | 
            <nuxt-link :to="'/projects/' + listProjects[nextIndex].name">View Next →</nuxt-link> 
          </div>
        </div>
      </div>
    </transition>
    <nuxt />
    <div class="container pt-5 pb-4">
      <div class="row">
        <div class="col-md-6">
          Professional Property Consultants & Services, Inc. © 2019 
        </div>
        <div class="col-md-6 text-right">
          CL# 927489 | Classification: C61, D63, D64
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  head () {
    return {
      title: 'PPC&S | Professional Property Consultants & Services',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
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
}


.letter-spacing {
  letter-spacing: .02rem;
}

.active {
  color: #0056b3;
}

a {
  color: #777;
  font-weight: 400;
}

a:hover {
  text-decoration: none;
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
