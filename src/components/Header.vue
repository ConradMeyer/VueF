<template>
  <div class="header">
    <div class="titulo">
      <h2>VueApp</h2>
      <img src="../assets/logo.png" alt="logo-vue" />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/blog">API</router-link> |
      <router-link to="/form">Form</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
div.header {
  background-color: coral;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
}
  a {
    font-size: 20px;
  }
div.titulo {
  display: flex;
  align-items: center;
}
div.titulo img {
  width: 25px;
}
</style>