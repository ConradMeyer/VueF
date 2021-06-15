import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 500
  },
  mutations: {
    aumentar (state, payload) {
      state.count = state.count + payload
    },
    disminuir (state, payload) {
      state.count = state.count - payload
    }
  },
  actions: {
    aumentar ({commit}, num) {
      commit('aumentar', num)
    },
    disminuir ({commit}, num) {
      commit('disminuir', num)
    }
  },
  modules: {
  }
})
