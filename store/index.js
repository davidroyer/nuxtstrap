export const state = () => ({
  loading: false,
  renderedFrom: null,
  user: null
})

export const mutations = {
  setLoading(state, loadingStatus) {
    state.loading = loadingStatus
  },

  setRenderedResult(state, renderResult) {
    state.renderedFrom = renderResult
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {}
}

// eslint-disable-next-line no-unused-vars
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
