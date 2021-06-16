import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 500,
    articulos: []
  },
  mutations: {
    incrementar (state, payload) {
      state.count = state.count + payload
    },
    disminuir (state, payload) {
      state.count = state.count - payload
    },
    setearArticulos(state, array) {
      state.articulos = array
    }
  },
  actions: {
    accionBoton ({commit}, objeto) {
      if(objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    },
    consumirApi({commit}, array){
      commit('setearArticulos', array)
    }
  },
  modules: {
  }
})
