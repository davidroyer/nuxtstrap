<template>
  <div id="app-wrapper">
    <AppHeader />
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


<style>
  .navbar {
    width: 100%;
  }
</style>