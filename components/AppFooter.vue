<template>
  <footer class="bg-dark mt-4 pt-3 pb-1 text-white">
    <b-container class="text-center">
      <b-row>
        <b-col align-v="center">
          <h4 class="h5">
            Rendered From:
            <span
              v-text="$store.state.renderedFrom"
              class="font-weight-bold"
            ></span>
          </h4>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
