<template>
  <div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h1>About</h1>
          <!-- <img src="/wall-climbers.png" class="w-100 mb-4" alt=""> -->
          We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
          </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12 text-center pb-1 letter-spacing">
          <h5 class="font-light">
            <nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{ 'active': link.isActive }" @click.native="handleClick(link.name)">{{ link.title }}</nuxt-link>
          </h5>
          <hr>
        </div>
      </div>
    </div>
    <nuxt-child></nuxt-child>
    <!-- <div class="container">
      <div class="row pt-5">
        <div class="col-md-12">
          <h4>History</h4>
          We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h4>Leadership</h4>
          Paul M. Popa – <i>President & CEO</i><br>
          We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
          <br><br>
          David M. Popa – <i>Director of Field Operations</i><br>
          We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside. It is our priority to be experts in all the latest methods and utilize only state-of-the-art technology to provide superior building preservation services.
        </div>
      </div>
    </div> -->
    <!-- <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h4>Leadership</h4>
        </div>
        <div class="col-md-3">
          <img src="paul-popa.jpg" class="w-100" alt="">
        </div>
        <div class="col-md-9">
          Paul M. Popa <br>
          President, and CEO <br><br>
          A native of Canton Ohio Paul M. Popa has been working in the building restoration and preservation industry since 1965. Following in his Father’s footsteps (John Z. Popa) who found and operated Ace Window Cleaning in Brooklyn NY and  where Paul began working at the age of 15. He migrated to the San Francisco area in 1976 and started as a single man operation cleaning high rise windows. Since the early days, he has statically built and diversified the company into a multi-faceted national Building restoration/preservation company with completed/ongoing project is almost every state. 
       </div>
      </div>
    </div> -->
    <!-- <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h4>Safety</h4>
          Safe job sites are all about protecting our people. We believe it is our moral responsibility to make sure every single worker in the field and in the office goes home safely every day, our friends and families count on this. Our initiatives reach well-beyond wearing safety glasses and hard hats. We make prevention and awareness a priority and it has become second nature.
          <br><br>
          Not only is safety good for our people, it’s also good for business. Safe job sites produce projects that stay on schedule and on budget by avoiding costly delays due to unsafe practices. Safety is an essential business principle, and it is as important to a project’s success as are our restoration processes.
          <br><br>
          Our company has invested resources, time, and money to ensure that every job site is safe for our employees, subcontractors and suppliers. This investment has paid off for our people and ultimately, our clients. PPCS maintains one of the lowest injury rates in the country – year after year – and has never experienced a loss of life or serious injury. </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <h4>Careers</h4>
            We are always looking for talented and client-focused people. <br><br>
            Please email your cover letter and resume to ppc@ppc-restore.com or send to: <br><br>

            PPC&S, Inc.<br>
            584 Castro Street, Suite 512<br>
            San Francisco, CA 94114
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'History',
          name: 'history',
          url: '/about',
          isActive: true
        },
        {
          title: 'Leadership',
          name: 'leadership',
          url: '/about/leadership',
          isActive: false
        },
        {
          title: 'Safety',
          name: 'safety',
          url: '/about/safety',
          isActive: false
        },
        {
          title: 'Careers',
          name: 'careers',
          url: '/about/careers',
          isActive: false
        }
      ]
    }
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
  transition: 'fade'
}
</script>

<style>
</style>
