<template>
  <div>
    <h1 class="title">Login Page</h1>
    <h2 class="h5">Please Login</h2>
    <b-button @click="$store.dispatch('netlifyLogin')" variant="outline-secondary" size="lg">Login</b-button>
    <!-- <b-button @click="handleLogin" variant="outline-secondary" size="lg">Netlify Login</b-button> -->
    <b-alert :show="$store.state.loading" variant="info">Loading...</b-alert>
  </div>
</template>

<script>
// const netlifyIdentity = require("netlify-identity-widget");

// netlifyIdentity.init({
//   container: "#netlify-modal" // defaults to document.body,
// });

// netlifyIdentity.open(); // open the modal
// netlifyIdentity.open("login"); // open the modal to the login tab
// netlifyIdentity.open("signup"); // open the modal to the signup tab
//
//
//
// // Close the modal
// netlifyIdentity.close();
//
// // Logout the user
// netlifyIdentity.logout();
export default {
  head: {
    title: 'Login'
  },
  data: () => ({
    user: null
  }),
  created() {
    // netlifyIdentity.on("init", user => console.log(user));
    // netlifyIdentity.on("login", user => console.log(user));
    // netlifyIdentity.on("logout", () => console.log("Logged out"));
    // netlifyIdentity.on("error", err => console.error("Logged out"));
    // netlifyIdentity.on("open", () => console.log("Widget opened"));
    // netlifyIdentity.on("close", () => console.log("Widget closed"));

  },

  mounted() {
    // netlifyIdentity.init();
  },

  methods: {
    handleLogin() {
      netlifyIdentity.open(); // open the modal
    },
    handleLogout() {
      netlifyIdentity.logout();
    }
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
