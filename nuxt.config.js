const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    titleTemplate: '%s - NuxtStrap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { type: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt'
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // serverMiddleware: ['../api/auth'],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api': 'http://localhost:3000'
  // },
  auth: {
    redirect: {
      callback: '/about'
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'droyer.auth0.com',
        client_id: 'jMSvvKeFirdoe72DO221g7eoYlWGJM0h'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
