<template>
  <div class="fav">
    <h1>Favoritos</h1>
    <div class="favoritos">
      <div v-for="item in fav" :key="item.id">
        <div class="favorito">
          <router-link :to="`/blog/${item.id}`">
            <img :src="item.image" alt="imagen" />
            <h4 class="articulo">{{ item.name }}</h4>
          </router-link>
          <h4 class="btn btn-danger" @click="deleteFav(item.id)">Delete</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Fav",
  methods: {
    ...mapActions(["getFav", "deleteFav"]),
  },
  computed: {
    ...mapState(["fav"]),
  },
  created() {
    this.getFav();
  },
};
</script>

<style lang='scss' scoped>
div.fav {
  background-color: #2c3e50d2;
  min-height: 100vh;
  color: whitesmoke;
  div.favoritos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .favorito {
      margin: 20px;
      background-color: whitesmoke;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 3px 3px 20px -3px black;
      width: 300px;
      img {
        width: 200px;
        border-radius: 50%;
      }
      h4.articulo {
          color: #2c3e50d2;
      }
      .btn {
        width: 70%;
      }
    }
  }
  a {
    text-decoration: none;
    color: whitesmoke;
  }
}
</style>