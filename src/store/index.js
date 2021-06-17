import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 500,
    articulos: [],
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      categorias: [],
      estado: "",
      numero: 0,
    }
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload
    },
    incrementar(state, payload) {
      state.count = state.count + payload
    },
    disminuir(state, payload) {
      state.count = state.count - payload
    },
    setearArticulos(state, array) {
      state.articulos = array
    },
    setearTareas(state, payload) {
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload) {
      if (!state.tareas.find(item => item.id === payload)) {
        router.push("form")
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    editar(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/form')
    }
  },
  actions: {
    cargarLocal({commit}) {
      if(localStorage.getItem('tareas')){
        commit('cargar', JSON.parse(localStorage.getItem('tareas')))
        return
      }

      localStorage.setItem('tareas', JSON.stringify([]))
    },
    accionBoton({ commit }, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    },
    consumirApi({ commit }, array) {
      commit('setearArticulos', array)
    },
    setTareas({ commit }, tarea) {
      commit('setearTareas', tarea)
    },
    deleteTarea({ commit }, id) {
      commit('eliminar', id)
    },
    setTarea({ commit }, id) {
      commit('tarea', id)
    },
    updateTarea({ commit }, tarea) {
      commit('editar', tarea)
    }
  },
  modules: {
  }
})
