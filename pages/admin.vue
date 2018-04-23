<template>
  <div>
    <h1 class="title">Admin Page</h1>
    <p>Your admin settings go here</p>

    <div class="mt-5">
      <span class="h3">User Details</span>
      <pre>{{$store.state.user}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Admin'
  },
  middleware: 'auth-check'
}
</script>
