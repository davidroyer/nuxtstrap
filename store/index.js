export const state = () => ({
  user: null,
  loggedIn: false,
})

export const mutations = {
  toggleLoggedIn: (state) => {
    state.loggedIn = !state.loggedIn
  }
}
