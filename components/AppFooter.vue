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

<style lang="scss">
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  padding: .5em;
  background: #eee;
}
</style>
