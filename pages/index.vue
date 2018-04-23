<template>
  <div class="">
    <h1 class="title">Home Page</h1>
    <img class="hero-image" src="@/assets/images/nuxtstrap-image1.jpg" alt="">
    <b-button variant="primary" @click="modalShow = !modalShow">
      Open Modal
    </b-button>
    <b-modal v-model="modalShow" title="Nuxt Quickstart">
      <p class="my-4">Some modal content here...</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home'
  },
  data: () => ({
    modalShow: false
  })
}
</script>
