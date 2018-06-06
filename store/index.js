const netlifyIdentity = require("netlify-identity-widget");

export const state = () => ({
  loading: false,
  renderedFrom: null,
  user: null
})

export const mutations = {
  setLoading (state, loadingStatus) {
    state.loading = loadingStatus
  },

  setRenderedResult (state, renderResult) {
    state.renderedFrom = renderResult
  },

  setUser (state, user) {
    state.user = user
  }
}


export const actions = {
  // nuxtClientInit ()
  mockLoginRequest () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name: 'David Royer', id: 1})
      }, 2000)
    })
  },

  async login ({ dispatch, commit }) {
    commit('setLoading', true)
    const user = await dispatch('mockLoginRequest')
    commit('setUser', user)
    commit('setLoading', false)
    this.$router.push('/admin')
  },

  netlifyLogin ({ dispatch, commit }) {
    netlifyIdentity.open();
  },

  netlifyLogout ({ dispatch, commit }) {
    commit('setUser', null)
    netlifyIdentity.logout();
  },
  // handleLogin()
  logout ({ commit }) {
    commit('setUser', null)
    this.$router.push('/login')
  },

  nuxtServerInit ({ commit }, { req }) {
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  }
}
