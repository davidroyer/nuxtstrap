export const state = () => ({
  loading: false,
  renderedFrom: null,
  user: null
})

// Without Arrow Functions
// export const state = function() {
//   return {
//     loading: false,
//     renderedFrom: null,
//     user: null
//   };
// };

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
