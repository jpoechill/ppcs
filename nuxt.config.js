const pkg = require('./package')

module.exports = {
  mode: 'universal',

  generate: {
    routes: [
      "/projects/stanford-knight-center",
      "/projects/600-canal",
      "/projects/dropbox",
      "/projects/millenium-tower",
      "/projects/sitel-san-angelo",
      "/projects/hamilton-palo-alto",
      "/projects/panama-stanford",
      "/projects/hilton-waco",
      "/projects/sculpture-hyatt",
      "/projects/samsung-mountain-view",
      "/projects/harley-davidson-stafford",
      "/projects/anti-graff-ucsf",
      "/projects/hyatt-san-francisco",
      "/projects/true-wind-sf",
      "/projects/oyster-point-ssf",
      "/projects/childrens-hospital-slc",
      "/projects/stanford-palo-alto",
      "/projects/pge-san-luis",
      "/projects/hyatt-sf-balcony",
      "/projects/wells-houston",
      "/projects/one-hawthorne-sf",
      "/projects/1200-california",
      "/projects/wynot-towers-ks",
      "/projects/st-pauls-oakland",
      "/projects/mcdills-tampa",
      "/projects/los-rios-cc",
      "/projects/mozart-dev",
      "/projects/lv-cc",
      "/projects/us-customs-house",
      "/projects/rr-square-san-luis",
      "/projects/david-cowens-drive",
      "/projects/juhl-condo-lv",
      "/projects/hyatt-monthly-sf",
      "/projects/genentech-vacaville",
      "/projects/devry-uni-fremont",
      "/projects/944-market-sf",
      "/projects/benicia-martinez",
      "/projects/alcatraz-sf",
      "/projects/anheuser-houston",
      "/projects/central-oakland",
      "/projects/boto-sf",
      "/projects/bishop-ranch-san-ramon",
    ]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'PPC&S | Professional Property Consultants & Services, Inc.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside.'
      }, 
      {
        hid: 'title',
        name: 'title',
        content: 'PPC&S | Professional Property Consultants & Services, Inc.'
      }, 
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:apple-mobile-web-app-title',
        property: 'og:apple-mobile-web-app-title',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'PPC&S | Professional Property Consultants & Services, Inc.'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'PPC&S | Professional Property Consultants & Services, Inc.'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ppc-restore.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'We are an experienced and licensed contracting company that offers top notch building restoration and preservation services. We know how important it is for your building or property to look perfect on the outside.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ppc-restore.com/covers/millenium-02.png'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=1000' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
