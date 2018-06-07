<template>
<div class="">
  <h1 class="title">Home Page</h1>
  <img class="hero-image" src="@/assets/images/image-example.jpg" alt="Image Example">
  <b-button variant="primary" @click="modalShow = !modalShow">
    Open Modal
  </b-button>
  <b-modal v-model="modalShow" title="Nuxt Quickstart">
    <p class="my-4">Some modal content here...</p>
  </b-modal>
  <hr>
  <b-form-input id="title" type="text" v-model="post.title" placeholder="Post Title">
  </b-form-input>
  <b-form-textarea id="body" v-model="post.body" placeholder="Enter something" :rows="3" :max-rows="6"></b-form-textarea>
  <b-button variant="primary" @click="addPost">Add Post</b-button>
</div>
</template>

<script>
export default {
  head: {
    title: 'Home'
  },
  data: () => ({
    modalShow: false,
    post: {
      title: '',
      body: ''
    }
  }),

  mounted() {
    this.getPosts()
  },

  methods: {
    async getPosts() {
      const posts = await this.$axios.$get('/api/posts')
    },

    async addPost() {
      const response = await this.$axios.$post('/api/posts', this.post)
      console.log(response);
    }
  }
}
</script>
