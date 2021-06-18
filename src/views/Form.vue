<template>
  <div class="form">
    <h1>Lista de Tareas con Vue.js</h1>
    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea" />
    </form>
    <hr />
    <ListaTareas />
  </div>
</template>

<script>
import Input from "../components/Input";
import ListaTareas from '../components/ListaTareas'
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: "Home",
  components: {
    Input,
    ListaTareas
  },
  data() {
    return {
      tarea: {
        id:"",
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(["setTareas"]),

    procesarFormulario() {
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacío");
        return;
      }
      this.tarea.id = shortid.generate();
      this.setTareas(this.tarea)
      
      this.tarea = {
        id:"",
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
div.form {
  background-color: whitesmoke;
  min-height: 85vh;
  input.barra {
    width: 80%;
    margin: 0 auto;
  }
  button {
    width: 80%;
  }
}
</style>