<template>
  <div class="vuex">
    <h1>This page is to play with Vuex</h1>
    <h3>Your count is:</h3>
    <h3>{{ count }}</h3>
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

<style lang="scss" scoped>
  div.vuex {
    height: 100vh;
    color: whitesmoke;
    padding: 20px;
    background-color: #2c3e50d2;
    h1 {
      text-decoration: underline;
    }
  }
</style>