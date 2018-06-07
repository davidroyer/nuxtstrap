const pkg = require('./package')
const bodyParser = require('body-parser')
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

  // proxy: {
  //   '/api': 'http://localhost:3000/api'
  // },

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
    ['bootstrap-vue/nuxt', { css: false }],
    'nuxt-device-detect',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_URL : 'http://localhost:3000'
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
    // body-parser middleware
    bodyParser.json(),
    // session middleware
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
