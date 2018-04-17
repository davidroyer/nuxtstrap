export const state = () => ({
  user: null,
  loggedIn: false,
  renderedFrom: null
})

export const mutations = {
  toggleLoggedIn: (state) => {
    state.loggedIn = !state.loggedIn
  },

  setRenderedResult: (state, renderResult) => {
    state.renderedFrom = renderResult
  }
}
