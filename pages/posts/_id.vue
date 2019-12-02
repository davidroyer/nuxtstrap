<template>
  <div class="post">
    <nuxt-link to="/posts">&larr; Back To Posts</nuxt-link>
    <h2 v-html="post.title" class="post-title"></h2>
    <article v-html="post.body"></article>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Post'
  },
  async asyncData({ app, params }) {
    const post = await app.$axios.$get(`posts/${params.id}`)
    return { post }
  }
}
</script>

<style lang="scss" scoped>
.post {
  align-items: flex-start !important;
  max-width: 800px;

  &-title {
    margin-bottom: 0.75em;
    text-transform: capitalize;
  }
}
</style>
