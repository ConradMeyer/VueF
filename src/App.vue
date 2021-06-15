<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:whitesmoke;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #358662;
    }
  }
}
</style>
