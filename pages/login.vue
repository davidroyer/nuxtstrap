<template>
  <section class="container">
    <h1 class="title">Login Page</h1>
    <h2 class="subtitle">Please Login First</h2>
    <!-- <b-button id="toggle-login" @click="$store.dispatch('loginAsync')" variant="outline-secondary" size="sm">Login</b-button> -->
    <b-button id="toggle-login" @click="$auth.loginWith('auth0')" variant="outline-primary" size="sm">Auth0 Login</b-button>

    <h4 v-show="$store.state.loading">Loading...</h4>
  </section>
</template>

<script>
export default {
  name: 'Login',
  head: {
    title: 'Login'
  },
  methods: {
    async login() {
      await this.$auth.loginWith('auth0')
      alert('logged in!')
    }
  }
}
</script>
