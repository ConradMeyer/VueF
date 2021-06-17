<template>
  <div class="articulo">
    <div class="personaje">
      <img :src="this.articulo.image" alt="" />
      <h2>{{ this.articulo.name }}</h2>
      <h4>Status: {{ this.articulo.status }}</h4>
      <h4>Species: {{ this.articulo.species }}</h4>
      <h4>Gender: {{ this.articulo.gender }}</h4>
      <h4 class="btn">
        <router-link to="/blog">Atras</router-link>
      </h4>
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
  background-color: #2c3e50d2;
  padding: 20px;
}
div.personaje {
  box-shadow: 5px 5px 20px -3px black;
  width: 30%;
  margin: 0px auto;
  border-radius: 15px;
  padding: 20px;
  color: #2c3e50;
  background-color: whitesmoke;

  h4.btn {
    margin: 15px auto;
    text-decoration: none;
    background-color: white;
    padding: 5px 15px;
    border-radius: 15px;
    width: 80%;
    box-shadow: 5px 5px 20px -3px black;
    a {
      text-decoration: none;
      color: #2c3e50;
    }
  }
  h4.btn:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
}
img {
  border-radius: 50%;
  width: 80%;
}
</style>