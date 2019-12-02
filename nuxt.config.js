const pkg = require("./package");
require("dotenv").config();

module.exports = {
  // mode: 'universal',
  env: {
    adminPassword: process.env.PASSWORD
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - NuxtStrap",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  dir: {
    middleware: "router-middleware" // Default: 'middleware'
  },

  router: {
    middleware: "rendered"
  },

  generate: {
    fallback: true
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#FFFFFF" },

  /*
   ** Global CSS
   */
  css: ["@/assets/styles/app.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ,
    "@nuxtjs/dotenv",
    "@nuxtjs/toast",
    ["bootstrap-vue/nuxt", { css: false }],
    "@nuxtjs/device",
    "@nuxtjs/axios"
  ],

  axios: {
    baseURL: "https://json-api.now.sh"
  },

  toast: {
    position: "top-center",
    duration: 1500
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
