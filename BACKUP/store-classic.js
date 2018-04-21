import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loggedIn: false,
      loading: false,
      user: null,
      renderedFrom: null
    },

    mutations: {
      setLoggedIn: (state, loggedInStatus) => {
        state.loggedIn = loggedInStatus
      },

      setUser: (state, user) => {
        state.user = user
      },

      setLoading: (state, loadingStatus) => {
        state.loading = loadingStatus
      },

      setRenderedResult: (state, renderResult) => {
        state.renderedFrom = renderResult
      }
    },

    actions: {
      login ({ dispatch, commit }) {
        return dispatch('mockLoginRequest', ).then(() => {
          this.$router.push('/admin')
        })
      },

      async loginAsync ({ dispatch, commit }) {
        commit('setLoading', true)
        const user = await dispatch('mockLoginRequest')
        dispatch('setCommitsForSuccessfulLogin', user)
        this.$router.push('/admin')
      },

      logout ({ commit }) {
        commit('setLoggedIn', false)
        commit('setUser', null)
        this.$router.push('/login')
      },

      setCommitsForSuccessfulLogin ({commit}, user) {
        commit('setLoggedIn', true)
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

  })
}

export default createStore
