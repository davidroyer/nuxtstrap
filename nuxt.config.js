const pkg = require('./package')
// const bodyParser = require('body-parser')
const session = require('express-session')
require('dotenv').config()

module.exports = {
  // mode: 'universal',
  env: {
    adminPassword: process.env.PASSWORD
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - NuxtStrap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  dir: {
    middleware: 'router-middleware', // Default: 'middleware'
  },

  router: {
    middleware: 'rendered'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#007bff',
    // height: '5px'
  },
  // loading: { color: '#FFFFFF' },

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
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/device',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_URL : 'http://localhost:3000'
  },

  toast: {
    position: 'top-center',
    duration: 1500
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
  },
  serverMiddleware: [
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api/index.js'
  ]
}
