export const state = () => ({
  loading: false,
  renderedFrom: null,
  user: null
})

export const mutations = {

  setLoading: (state, loadingStatus) => {
    state.loading = loadingStatus
  },

  setRenderedResult: (state, renderResult) => {
    state.renderedFrom = renderResult
  },

  setUser: (state, user) => {
    state.user = user
  }

}

export const actions = {

  async login ({ dispatch, commit }) {
    commit('setLoading', true)
    const user = await dispatch('mockLoginRequest')
    dispatch('setCommitsForSuccessfulLogin', user)
    this.$router.push('/admin')
  },

  logout ({ commit }) {
    commit('setUser', null)
    this.$router.push('/login')
  },

  setCommitsForSuccessfulLogin ({commit}, user) {
    commit('setUser', user)
    commit('setLoading', false)
  },

  mockLoginRequest () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name: 'David Royer', id: 1})
      }, 2000)
    })
  }

}
