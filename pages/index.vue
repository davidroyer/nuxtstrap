<template>
  <section class="container">
    <div>
      <h1 class="title">NuxtStrap</h1>
      <b-button variant="primary" @click="modalShow = !modalShow">
        Open Modal
      </b-button>
      <!-- <b-modal v-model="modalShow" title="Nuxt Quickstart">
        <p class="my-4">Hello from modal!</p>
        Hello From Modal!
      </b-modal> -->
      <b-modal v-model="modalShow" id="modal1" title="Bootstrap-Vue">
        <p class="my-4">Hello from modal!</p>
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
