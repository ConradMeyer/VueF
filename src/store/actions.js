import * as types from './mutations-types'

export default {
    cargarLocal({ commit }) {
        if (localStorage.getItem('tareas')) {
            commit(types.CARGAR, JSON.parse(localStorage.getItem('tareas')))
            return
        }

        localStorage.setItem('tareas', JSON.stringify([]))
    },
    consumirApi({ commit }, array) {
        commit(types.SETEAR_ARTICULOS, array)
    },
    setTareas({ commit }, tarea) {
        commit(types.SETEAR_TAREAS, tarea)
    },
    deleteTarea({ commit }, id) {
        commit(types.ELIMINAR_TAREA, id)
    },
    setTarea({ commit }, id) {
        commit(types.TAREA, id)
    },
    updateTarea({ commit }, tarea) {
        commit(types.EDITAR_TAREA, tarea)
    },
    saveFav({ commit }, id) {
        commit(types.GUARDAR_FAVORITO, id)
    },
    getFav({ commit }) {
        if (localStorage.getItem('Favs')) {
            commit(types.CARGAR_FAVORITO, JSON.parse(localStorage.getItem('Favs')))
            return
        }

        localStorage.setItem('Favs', JSON.stringify([]))
    },
    deleteFav({ commit }, id) {
        commit(types.BORRAR_FAVORITO, id)
    }
}