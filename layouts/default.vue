<template>
  <div id="app-wrapper">
    <AppHeader/>
    <nuxt/>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'

  export default {
    components: {
      AppHeader,
      AppFooter: () => import('@/components/AppFooter')
    }
  }
</script>

<!-- <style src="@/assets/styles/first-transition.scss"></style> -->
<style src="@/assets/styles/transitions.scss"></style>
