<template>
  <section class="container">
    <h1 class="title">Login Page</h1>
    <h2 class="h5">Please Login</h2>
    <b-button @click="$store.dispatch('login')" variant="outline-secondary" size="lg">Login</b-button>
    <b-alert :show="$store.state.loading" variant="info">Loading...</b-alert>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Login'
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: .25em;
  }
  .btn {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
</style>
