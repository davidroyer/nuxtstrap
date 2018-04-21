<template>
  <footer>
    <h4 class="render-result">Rendered From:  <span class="subtitle" v-text="$store.state.renderedFrom"></span></h4>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: ['renderResult']
}
</script>

<style src="@/assets/styles/components/app-footer.scss" lang="scss" scoped></style>
