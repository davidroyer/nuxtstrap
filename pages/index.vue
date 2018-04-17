<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-starter
      </h1>
      <h2 class="subtitle">
        My super Nuxt.js project
      </h2>
      <b-button variant="primary" @click="modalShow = !modalShow">
        Open Modal
      </b-button>
      <b-modal v-model="modalShow" title="Nuxt Quickstart">
        Hello From Modal!
      </b-modal>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head: {
    title: 'Home'
  },
  fetch(context) {
    const renderedFrom = process.server ? 'Server' : 'Client'
    context.store.commit('setRenderedResult', renderedFrom)
  },  
  data: () => ({
    modalShow: false
  }),
  components: {
    Logo
  },
}
</script>
