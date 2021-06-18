<template>
  <div class="tareas">
    <h2>Tareas</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categorías</th>
          <th scope="col">Estado</th>
          <th scope="col">Días</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarea, index) in tareas" :key="index">
          <th scope="row">{{ tarea.id }}</th>
          <td>{{ tarea.nombre }}</td>
          <td>{{ tarea.categorias.join(" | ") }}</td>
          <td>{{ tarea.estado }}</td>
          <td>{{ tarea.numero }}</td>
          <td class="botones">
            <button
              class="btn btn-danger btn-sm"
              @click="deleteTarea(tarea.id)"
            >
              Eliminar
            </button>
            <router-link
              :to="{
                name: 'Edit',
                params: {
                  id: tarea.id,
                },
              }"
            >
              <button class="btn btn-warning btn-sm">Editar</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTarea"]),
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 45%;
  margin: 0 2px;
}
</style>
