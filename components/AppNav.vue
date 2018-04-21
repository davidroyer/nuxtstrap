<template>
  <nav>
    <b-nav>
      <b-nav-item exact to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/admin">Admin</b-nav-item>
      <b-button v-if="!$store.state.loggedIn" id="toggle-login" @click="$store.dispatch('loginAsync')" variant="outline-secondary" size="sm">Login</b-button>
      <b-button v-else id="toggle-login" @click="$store.dispatch('logout')" variant="outline-secondary" size="sm">Logout</b-button>
    </b-nav>
  </nav>
</template>

<script>
  export default {
    name: 'AppNav'
  }
</script>
