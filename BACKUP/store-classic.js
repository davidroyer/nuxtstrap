import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: false,
      renderedFrom: null,
      user: null,
    },

    mutations: {
      setLoading: (state, loadingStatus) => {
        state.loading = loadingStatus
      },

      setRenderedResult: (state, renderResult) => {
        state.renderedFrom = renderResult
      },

      setUser: (state, user) => {
        state.user = user
      }
    },

    actions: {
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
      },

      mockLoginRequest () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({name: 'David Royer', id: 1})
          }, 2000)
        })
      }
    }
  })
}

export default createStore
