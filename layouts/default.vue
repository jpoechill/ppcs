<template>
  <div>
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-6">
          <nuxt-link to="/">[[ logo ]] PPCS</nuxt-link>
        </div>
        <div class="col-md-6 word-spacing text-right letter-spacing">
          <h5>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/services">Services</nuxt-link>
          <nuxt-link to="/projects">Projects</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>   
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

a {
  color: #999;
  font-weight: 400;
}

a:hover {
  text-decoration: none;
}
</style>
