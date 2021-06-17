<template>
  <div class="inputs">
    <input
      type="text"
      class="form-control my-2 barra"
      placeholder="Ingrese una tarea"
      v-model.trim="tarea.nombre"
    />
    <div class="mt-2">
      <input
        type="number"
        placeholder="Dias Disponibles"
        class="form-control barra"
        v-model.number="tarea.numero"
      />
    </div>
    <div class="categorias">
        <h4>Categorias:</h4>
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          id="check-1"
          class="form-check-input"
          v-model="tarea.categorias"
          value="Front-End"
        />
        <label for="check-1" class="form-check-label">Front-End</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          id="check-2"
          class="form-check-input"
          v-model="tarea.categorias"
          value="Back-End"
        />
        <label for="check-2" class="form-check-label">Back-End</label>
      </div>
    </div>

    <div class="mt-2 estado">
        <h4>Estado:</h4>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          value="Urgente"
          v-model="tarea.estado"
        />
        <label for="radio-1" class="form-check-label">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-2"
          class="form-check-input"
          value="Relax"
          v-model="tarea.estado"
        />
        <label for="radio-2" class="form-check-label">Relax</label>
      </div>
    </div>

    <button
      class="btn btn-dark mt-3 btn-block"
      type="submit"
      :disabled="bloquear"
    >
      Procesar
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
input.barra {
  width: 80%;
  margin: 0 auto;
}
button {
  width: 80%;
}
</style>