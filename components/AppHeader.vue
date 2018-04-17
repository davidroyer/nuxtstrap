<template>
  <header>
    <h1>Creating Nuxt.js Apps</h1>
    <AppNav/>
    <span class="loggedIn-status">{{$store.state.loggedIn}}</span>
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

<style src="@/assets/styles/header.scss" lang="scss"></style>
