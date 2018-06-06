<template>
  <nav>
    <b-nav>
      <b-nav-item exact to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/posts">Posts</b-nav-item>
      <b-nav-item to="/api/">API</b-nav-item>
      <!-- <b-nav-item to="/api/app-test">API</b-nav-item> -->

      <b-button v-if="!$store.state.user " to="/login"  id="toggle-login" variant="primary" size="sm">Login</b-button>
      <template v-else>
        <b-nav-item to="/admin">Admin</b-nav-item>
        <b-button id="toggle-login" @click="$store.dispatch('netlifyLogout')" variant="secondary" size="sm">Logout</b-button>
      </template>
    </b-nav>
  </nav>
</template>

<script>
  export default {
    name: 'AppNav'
  }
</script>
