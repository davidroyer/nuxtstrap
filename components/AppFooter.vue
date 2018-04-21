<template>
  <footer>
    <div key="user-info" v-if="$auth.$state.loggedIn">
      <div v-if="$auth.user.name" v-text="$auth.user.name"></div>
      <b-img v-if="$auth.user.picture_large" :src="$auth.user.picture_large" rounded="circle" width="65" height="65" alt="img" class="m-1" />
    </div>
    <div v-else key="no-user">
      <h3>No User Seen</h3>
    </div>
    <div class="pre-wrapper">
      <pre>{{$auth.user}}</pre>
    </div>
  <div class="pre-wrapper">
      <pre>{{$auth.$state}}</pre>
  </div>
    <h4 class="render-result">Rendered From:  <span class="subtitle" v-text="$store.state.renderedFrom"></span></h4>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: ['renderResult']
}
</script>

<style src="@/assets/styles/components/app-footer.scss" lang="scss" scoped></style>
