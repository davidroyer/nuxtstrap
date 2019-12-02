<template>
  <footer>
    <h4 class="render-result">
      Rendered From:
      <span v-text="$store.state.renderedFrom" class="subtitle"></span>
    </h4>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5em;
  background: #eee;
}
</style>
