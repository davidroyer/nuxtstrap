async loginNew ({ commit }, { username, password }) {
  try {
    const data = await this.$axios.$post('/api/auth/login', { username, password })
    commit('setUser', data)
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
},
