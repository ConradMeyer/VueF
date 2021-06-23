import * as types from './mutations-types'
import router from '../router/index'


export default {
    [types.CARGAR](state, payload) {
        state.tareas = payload
    },
    [types.SETEAR_ARTICULOS](state, array) {
        state.articulos = array
        state.fav = JSON.parse(localStorage.getItem('Favs'))
    },
    [types.SETEAR_TAREAS](state, payload) {
        state.tareas.push(payload)
        localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    [types.ELIMINAR_TAREA](state, payload) {
        state.tareas = state.tareas.filter(item => item.id !== payload)
        localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    [types.TAREA](state, payload) {
        if (!state.tareas.find(item => item.id === payload)) {
            router.push("form")
            return
        }
        state.tarea = state.tareas.find(item => item.id === payload)
    },
    [types.EDITAR_TAREA](state, payload) {
        state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
        localStorage.setItem('tareas', JSON.stringify(state.tareas))
        router.push('/form')
    },
    [types.GUARDAR_FAVORITO](state, payload) {
        state.fav.push(state.articulos.find(item => item.id === payload))
        localStorage.setItem('Favs', JSON.stringify(state.fav))
        router.push('/blog')
    },
    [types.CARGAR_FAVORITO](state, payload) {
        state.fav = payload
    },
    [types.BORRAR_FAVORITO](state, payload) {
        state.fav = state.fav.filter(item => item.id !== payload)
        localStorage.setItem('Favs', JSON.stringify(state.fav))
        router.push('/blog')
    }
}