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
