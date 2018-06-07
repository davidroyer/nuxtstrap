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

  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('setUser', req.session.authUser)
    }
  },

  async adminLogin ({ commit }, { username, password }) {
    const userData = await this.$axios.$post('/api/auth/login', { username, password })
    commit('setUser', userData)
  },

  async adminLogout ({ commit }) {
    await this.$axios.$post('/api/auth/logout')
    commit('setUser', null)
    this.$router.push('/login')

  },

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

  logout ({ commit }) {
    commit('setUser', null)
    this.$router.push('/login')
  }
}
