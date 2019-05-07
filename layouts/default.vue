<template>
  <div>
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-6">
          <nuxt-link to="/"><img src="/logo_updated.png" class="w-25" alt=""></nuxt-link>
        </div>
        <div class="col-md-6 word-spacing text-right letter-spacing">
          <h5>
            <nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
        </div>
      </div>
    </div>
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
.word-spacing {
  word-spacing: 0px;
}

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
  color: #999;
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
