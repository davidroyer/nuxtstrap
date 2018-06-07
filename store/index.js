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
  nuxtServerInit({ commit }, context) {
    if (context.req && context.req.session && context.req.session.authUser) {
      commit('setUser', context.req.session.authUser)
    }
  },

  async adminLogin ({ commit }, { username, password }) {
    const userData = await this.$axios.$post('/api/auth/login', { username, password })
    commit('setUser', userData)
    this.$router.push('/admin')
    await delay(750)
    this.$toast.info('Successfully Logged In!')
  },

  async adminLogout ({ commit }) {
    await this.$axios.$post('/api/auth/logout')
    commit('setUser', null)
    this.$router.push('/login')
    await delay(750)
    this.$toast.show('Successfully Logged Out!')
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
