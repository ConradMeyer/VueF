<template>
  <div class="blog">
    <h1>Characters Rick & Morty</h1>
    <div class="articulos">
      <div v-for="item in articulos" :key="item.id">
        <router-link :to="`/blog/${item.id}`">
          <h4 class="articulo">{{ item.id }} - {{ item.name }}</h4>
        </router-link>
      </div>
    </div>
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
        console.log(result);
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
  background-color: whitesmoke;
}
h1 {
  margin: 20px auto;
}
.articulos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
}
  a {
    text-decoration: none;
    color: #2c3e50;
  }
  h4 {
    margin: 10px auto;
  }
</style>