<template>
  <section class="container">
    <div>
      <h1 class="title">Admin Page</h1>
      <h2>Super Secret Info Here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempora dicta fugiat dolore atque delectus alias, magni quos ullam rem, aliquid assumenda non aut at. Eaque recusandae, cupiditate vitae iusto repellendus omnis officia dignissimos natus modi, culpa unde temporibus illum.</p>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Admin'
  },
  middleware: 'auth-check'
}
</script>
