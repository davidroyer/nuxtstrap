<template>
  <div id="app-wrapper" class="container">
    <AppHeader/>
    <nuxt id="view"/>
    <AppFooter/>
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

<style src="@/assets/styles/transitions.scss"></style>
