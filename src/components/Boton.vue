<template>
  <button @click="accionBoton({estado: estado, numero: 50 })">{{ textoBoton }}</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        estado: Boolean
    },
    computed: {
        textoBoton() {
            return this.estado ? "Aumentar" : "Disminuir"
        }
    },
    methods: {
        ...mapActions([
            'accionBoton'
        ])
    }
}
</script>

<style scoped>
    button {
    margin: 20px;
    border-radius: 15px;
    border: none;
    background-color: white;
    padding: 8px 20px;
    box-shadow: 5px 5px 20px -3px black;
  }
</style>