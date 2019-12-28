<template>
  <div class="posts">
    <h1 class="mb-5 text-center">Posts</h1>
    <b-card-group deck>
      <b-card
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        style="max-width: 20rem;"
        class="post-title mb-2"
      >
        <b-card-text>
          <b-button :to="'/posts/' + post.id" nuxt variant="primary"
            >View Post</b-button
          >
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Posts'
  },
  async asyncData({ app }) {
    const posts = await app.$axios.$get('posts')
    return { posts }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &-deck {
    justify-content: space-around;

    .card {
      flex: 1 1 360px;
    }
  }
}
.post {
  &-title {
    text-transform: capitalize;
    font-weight: 400;
  }
}
</style>
