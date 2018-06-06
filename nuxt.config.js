const pkg = require('./package')

module.exports = {
  mode: 'universal',

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
  env: {
    PASS: 'passfromnuxtconfig'
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
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/dotenv',
    ['bootstrap-vue/nuxt', { css: false }],
    'nuxt-device-detect',
    '@nuxtjs/axios'
  ],

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
    // bodyParser.json(),
    // session middleware
    // session({
    //   secret: 'super-secret-key',
    //   resave: false,
    //   saveUninitialized: false,
    //   cookie: { maxAge: 60000 }
    // }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api/index.js'
  ]
}
