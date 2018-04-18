<template>
  <section class="container">
    <div>
      <h1 class="title">NuxtStrap Project Template</h1>
      <b-button variant="primary" @click="modalShow = !modalShow">
        Open Modal
      </b-button>
      <b-modal modal-class="fade" v-model="modalShow" title="Nuxt Quickstart">
        <p class="my-4">Some modal content here...</p>
      </b-modal>
      <div class="links">
        <a href="https://github.com/davidroyer/nuxtstrap" target="_blank" class="button--green">NuxtStrap Project Repo</a>
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
