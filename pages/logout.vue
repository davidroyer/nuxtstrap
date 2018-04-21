<template>
  <section class="container">
    <h1 class="title">Logout Page</h1>
    <h2 class="subtitle">TESTING</h2>
  </section>
</template>

<script>
export default {
  name: 'Logout',
  head: {
    title: 'Logout'
  },
  methods: {
    async login() {
      await this.$auth.loginWith('auth0')
      alert('logged in!')
    }
  }
}
</script>
