<template>
  <header>
    <h1>NuxtStrap</h1>
    <AppNav/>
    <!-- <h6 class="loggedIn-status">Logged In: <b-badge variant="info">{{$store.state.loggedIn}}</b-badge></h6> -->

  </header>
</template>

<script>
import AppNav from '@/components/AppNav'

export default {
  name: 'AppHeader',
  components: {
    AppNav
  }
}
</script>

<style src="@/assets/styles/components/app-header.scss" lang="scss"></style>
