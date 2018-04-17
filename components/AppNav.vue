<template>
  <nav>
    <b-nav>
      <b-nav-item exact to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/admin">Admin</b-nav-item>
      <b-button @click="$store.commit('toggleLoggedIn')" variant="primary" size="sm">Toggle Login</b-button>
    </b-nav>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss">
.active {
  &:focus, &:hover {
    background: darkblue !important;
    color: white;
  }
}
</style>
