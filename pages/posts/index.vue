<template lang="html">
  <div class="posts">
    <h2>Posts</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h4 v-html="post.title" class="post-title"></h4>
        <nuxt-link class="post-link" :to="'/posts/'+post.id">View Post</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Login'
  },
  async asyncData({ app }) {
    const posts = await app.$axios.$get('http://jsonplaceholder.typicode.com/posts?_limit=10')
    return { posts }
  }
}
</script>

<style lang="scss" scoped>
.post {
  &-list {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  &-item {
    flex: 0 1 280px;
    margin: .75em;
    padding: .5em 1em;
    height: 140px;
    border: 2px solid lightgray;
  }

  &-title {
    font-size: 1.25em;
    font-weight: 400;
  }
}
</style>
