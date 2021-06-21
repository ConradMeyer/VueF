<template>
  <div class="home">
    <!-- <Header /> -->

    <h1>New Project with Vue.js</h1>
    <img src="../assets/logo.png" alt="logo-vue" />
    <!-- <Taildwind /> -->
  </div>
</template>

<script>
import Taildwind from '../components/Tailwind.vue'
import Header from '../components/Header.vue'
export default {
  name: 'Home',
  components: {
    Taildwind,
    Header
  }
}
</script>

<style lang="scss" scoped>
  div.home {
    min-height: 100vh;
    color: whitesmoke;
    background-color: #2c3e50d2;
    padding: 20px;
    h1{
      margin-bottom: 50px;
    }
  }
</style>