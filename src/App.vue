<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { mapActions } from "vuex";

export default {
  components: {
    Header
  },
  methods: {
    ...mapActions(['cargarLocal'])
  },
  created(){
    this.cargarLocal()
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Arial, sans-serif, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
