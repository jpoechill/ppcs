<template>
  <div>
    <transition name="fade" appear>
      <nuxt />
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      nextPage: null,
      prevPage: null,
      projectIndex: null
    }
  },
  computed: {
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
  methods: {
    updateNext () {
      let path = this.$route.path.split('/')
      let currPath = path[2]

      let currIndex = this.linksList.indexOf(currPath)

      if (currIndex === (this.linksList.length - 1)) {
        currIndex = -1
      }

      this.nextPage = this.linksList[currIndex+1]
    }
  },
  mounted() {},
  transition: 'fade'
}
</script>


