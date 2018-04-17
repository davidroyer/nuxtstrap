<template lang="html">
  <section class="container">
    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

    <!-- Modal Component -->
    <b-modal id="modal1" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>    
    <div>
      <h1 class="title">Examples Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempora dicta fugiat dolore atque delectus alias, magni quos ullam rem, aliquid assumenda non aut at. Eaque recusandae, cupiditate vitae iusto repellendus omnis officia dignissimos natus modi, culpa unde temporibus illum.</p>
    </div>
  </section>
</template>

<script>
export default {
  fetch(context) {
    const renderedFrom = process.server ? 'Server' : 'Client'
    context.store.commit('setRenderedResult', renderedFrom)
  },

  head: {
    title: 'Examples'
  }
}
</script>
