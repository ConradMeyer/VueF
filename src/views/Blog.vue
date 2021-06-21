<template>
  <div class="blog">
    <h1>Rick & Morty API</h1>
    <div class="buscador">
      <input
        type="text"
        class="form-control my-2 barra"
        placeholder="Busca aquí tu personaje de Rick & Morty"
        v-model="keyword"
      />
      <button class="btn btn-dark mt-3 btn-block" @click="buscar()">BUSCAR</button>
    </div>
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
  data() {
    return {
      keyword: ""
    }
  },
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
    async buscar() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.keyword}`);
        const result = await data.json();
        this.consumirApi(result.results);
        console.log(result.results);
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(["consumirApi"]),
  },
  created() {
    // this.llamada();
  },
};
</script>

<style lang="scss" scoped>
div.blog {
  min-height: 100vh;
  padding: 20px;
  background-color: #2c3e50d2;
  color: whitesmoke;
  div.buscador {
    width: 40%;
    margin: 20px auto;
  }
  .articulos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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