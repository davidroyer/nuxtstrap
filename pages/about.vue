<template lang="html">
  <section class="container">
    <div>
      <h1 class="title">About Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempora dicta fugiat dolore atque delectus alias, magni quos ullam rem, aliquid assumenda non aut at. Eaque recusandae, cupiditate vitae iusto repellendus omnis officia dignissimos natus modi, culpa unde temporibus illum.</p>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'About'
  },
  fetch(context) {
    const renderedFrom = process.server ? 'Server' : 'Client'
    context.store.commit('setRenderedResult', renderedFrom)
  }

}
</script>
