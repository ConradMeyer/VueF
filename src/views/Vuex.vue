<template>
  <div class="vuex">
    <h1>This page is to play with Vuex</h1>
    <h3>Your count is</h3>
    <p>{{ count }}</p>
    <button @click="aumentar(100)">Aumentar</button>
    <button @click="disminuir(100)">Disminuir</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Vuex",
  methods: {
    ...mapActions([
      "aumentar",
      "disminuir"
      ]),
  },
  computed: {
    ...mapState([
      "count"
    ])
  },
};
</script>

<style scoped>
  div.vuex {
    height: 100vh;
  }
  h1 {
    margin: 20px auto;
  }
  button {
    margin: 20px;
    border-radius: 15px;
    border: none;
    background-color: white;
    padding: 8px 20px;
    box-shadow: 5px 5px 20px -3px black;
  }
</style>