<template>
  <div class="blog">
    <h1>Characters from Rick & Morty</h1>
    <div v-if="articulos.length > 0" class="articulos">
      <div v-for="item in articulos" :key="item.id">
        <router-link :to="`/blog/${item.id}`">
          <h3 class="articulo btn btn-primary btn-lg">{{ item.name }}</h3>
        </router-link>
      </div>
    </div>
    <h4 v-else>No hay resultados</h4>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Blog",
  computed: {
    ...mapState(["articulos"]),
  },
  methods: {
    async llamada() {
      try {
        const data = await fetch("http://localhost:3000/results");
        const result = await data.json();
        this.consumirApi(result);
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(["consumirApi"]),
  },
  created() {
    this.llamada();
  },
};
</script>

<style lang="scss" scoped>
div.blog {
  min-height: 100vh;
  padding: 20px;
  background-color: #2c3e50d2;
  color: whitesmoke;
  .articulos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto;
    .articulo {
      margin: 10px;
    }
    a {
      text-decoration: none;
      color: whitesmoke;
    }
  }
}
</style>