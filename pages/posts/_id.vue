<template>
  <div class="post">
    <nuxt-link to="/posts">&larr; Back To Posts</nuxt-link>
    <h1 v-html="post.title" class="post-title" />
    <article v-html="post.body"></article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title
    }
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
