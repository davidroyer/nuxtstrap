<template>
  <div id="app-wrapper">
    <!-- <AppHeader/> -->
    <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">
      <b-container class="b-container-comp">
        <n-link to="/" tag="b-navbar-brand">NuxtStrap</n-link>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item exact to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/posts">Posts</b-nav-item>

            <b-button
              v-if="!$store.state.user "
              to="/login"
              id="toggle-login"
              variant="primary"
              size="sm"
            >Login</b-button>
            <template v-else>
              <b-nav-item to="/admin">Admin</b-nav-item>
              <b-button
                id="toggle-login"
                @click="$store.dispatch('adminLogout')"
                variant="secondary"
                size="sm"
              >Logout</b-button>
            </template>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt id="view" class="container" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style src="@/assets/styles/transitions.scss" lang="scss"></style>

<style>
.navbar {
  width: 100%;
}
</style>