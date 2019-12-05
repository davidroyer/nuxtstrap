<template>
  <div class>
    <h1 class="title">Home Page</h1>
    <img
      class="hero-image"
      src="@/assets/images/image-example.jpg"
      alt="Image Example"
    />
    <pre>{{ this.$store.site }}</pre>
    <b-button @click="modalShow = !modalShow" variant="primary"
      >Open Modal</b-button
    >
    <b-modal v-model="modalShow" title="Nuxt Quickstart">
      <p class="my-4">Some modal content here...</p>
    </b-modal>
    <hr />
    <b-form-input
      id="title"
      v-model="post.title"
      type="text"
      placeholder="Post Title"
    ></b-form-input>
    <b-form-textarea
      id="body"
      v-model="post.body"
      :rows="3"
      :max-rows="6"
      placeholder="Enter something"
    ></b-form-textarea>
    <b-button @click="addPost" variant="primary">Add Post</b-button>
  </div>
</template>

<script>
export default {
  head: {
    // title: 'Home'
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
      const posts = await this.$axios.$get('posts')
      // eslint-disable-next-line no-console
      console.log('TCL: getPosts -> posts', posts)
    },

    async addPost() {
      const response = await this.$axios.$post('posts', this.post)
      // eslint-disable-next-line no-console
      console.log(response)
    }
  }
}
</script>
