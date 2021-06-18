<template>
  <div class="articulo">
    <div class="personaje">
      <img :src="this.articulo.image" alt="" />
      <h2>{{ this.articulo.name }}</h2>
      <h4>Status: {{ this.articulo.status }}</h4>
      <h4>Species: {{ this.articulo.species }}</h4>
      <h4>Gender: {{ this.articulo.gender }}</h4>
      <h4 class="btn btn-primary mt-2 btn-sm">
        <router-link to="/blog">Blog</router-link>
      </h4>
      <h4 class="btn btn-secondary m-2 p btn-sm">
        <router-link to="/fav">Favs</router-link>
      </h4>
      <h4
        v-if="botones"
        class="btn btn-danger mt-2 btn-sm"
        @click="deleteFav(articulo.id)"
      >
        Delete
      </h4>
      <h4
        v-else
        class="btn btn-warning mt-2 btn-sm"
        @click="saveFav(articulo.id)"
      >
        Save
      </h4>
      <!-- <div v-else>
        <Boton :prueba="prueba"/>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Boton from "../components/Boton.vue";

export default {
  name: "Articulo",
  data() {
    return {
      articulo: {},
    };
  },
  components: {
    Boton,
  },
  computed: {
    ...mapState(["fav"]),
    botones() {
      let result = this.fav.find(
        (item) => item.id === Number(this.$route.params.id)
      );
      return result ? result : false;
    },
  },
  methods: {
    ...mapActions(["saveFav", "deleteFav"]),

    async consumirArt() {
      try {
        const data = await fetch(
          `http://localhost:3000/results/${this.$route.params.id}`
        );
        const result = await data.json();
        this.articulo = result;
      } catch (error) {
        console.log(error);
      }
    },

    prueba() {
      console.log("prueba correcta");
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
    width: 30%;
    a {
      text-decoration: none;
      color: white;
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