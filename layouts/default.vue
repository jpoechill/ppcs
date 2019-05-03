<template>
  <div>
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-6">
          <nuxt-link to="/"><img src="/logo_updated.png" class="w-25" alt=""></nuxt-link>
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
