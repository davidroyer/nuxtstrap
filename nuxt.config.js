/* eslint-disable no-console */
import { readFileSync } from 'fs'
import axios from 'axios'
import yaml from 'js-yaml'

const fileContents = readFileSync('db/site.yaml', 'utf8')
const siteData = yaml.safeLoad(fileContents)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    /**
     * NOTE: It does not work to try to use `siteData` here because its undefined for some reason
     */
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - NuxtStrap` : 'NuxtStrap'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteData.description
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  router: {
    middleware: 'rendered'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/app.scss'],

  // css: ['@/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    'nuxt-navi'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap'
  ],

  navi: {
    src: 'db/nav.yml'
  },

  /**
   * Modules Config/Customizations
   */
  axios: {
    baseURL: 'https://json-api.now.sh'
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  webfontloader: {
    custom: {
      families: ['Noto Sans:n4', 'Lato:n4,n7'],
      urls: [
        // 'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i&display=swap',
        'https://fonts.googleapis.com/css?family=Noto+Sans:400&display=swap',
        'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap'
      ]
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  generate: {
    async routes() {
      const { data } = await axios.get('https://json-api.now.sh/posts')
      return data.map((post) => `posts/${post.id}`)
    },

    dir: 'public',
    fallback: true
  },

  sitemap: {
    hostname: 'https://nuxtstrap.now.sh/',
    gzip: true,
    exclude: ['/404']
  }
}
