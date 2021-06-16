<template>
  <div class="articulo">
    <div class="personaje">
      <img :src="this.articulo.image" alt="" />
      <h2>{{ this.articulo.name }}</h2>
      <h4>Status: {{ this.articulo.status }}</h4>
      <h4>Species: {{ this.articulo.species }}</h4>
      <h4>Gender: {{ this.articulo.gender }}</h4>
      <router-link to="/blog">Atras</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articulo",
  data() {
    return {
      articulo: {},
    };
  },
  methods: {
    async consumirArt() {
      try {
        const data = await fetch(
          `http://localhost:3000/results/${this.$route.params.id}`
        );
        const result = await data.json();
        this.articulo = result;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirArt();
  },
};
</script>

<style lang="scss" scoped>
div.articulo {
  min-height: 85vh;
}
div.personaje {
  box-shadow: 5px 5px 20px -3px black;
  width: 30%;
  margin: 20px auto;
  border-radius: 15px;
  padding: 20px;
}
  img {
    border-radius: 50%;
    width: 250px;
  }
</style>