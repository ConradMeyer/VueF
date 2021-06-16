<template>
  <div class="vuex">
    <h1>This page is to play with Vuex</h1>
    <h3>Your count is</h3>
    <p>{{ count }}</p>
    <Boton :estado="true" />
    <Boton :estado="false" />
  </div>
</template>

<script>
import Boton from '../components/Boton.vue'
import { mapState } from "vuex";

export default {
  name: "Vuex",
  components: {
    Boton
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
</style>