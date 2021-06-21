<template>
  <div class="sign">
    <div class="container">
      <h3>SIGN UP</h3>
      <input type="text" placeholder="Nombre" v-model.trim="user.nombre" />
      <input type="email" placeholder="Email" v-model.trim="user.email" />
      <input type="password" placeholder="Password" v-model.trim="user.pass" />
      <button
        :disabled="bloquear"
        class="btn btn-dark mt-3 btn-block"
        @click="signup"
      >
        REGISTRAR
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sign",
  props: {},
  components: {},
  data() {
    return {
      user: {
        nombre: "",
        email: "",
        pass: "",
      },
    };
  },
  created() {},
  methods: {
    async signup() {
      const options = {
        "method": "POST",
        "body": JSON.stringify(this.user),
        "headers": {
          "Content-Type": "application/json",
        },
      };
      console.log(this.user);
      const res = await fetch("http://localhost:3000/users", options);
      const data = await res.json();
      console.log(data);
      this.user = {
        nombre: "",
        email: "",
        pass: "",
      };
    },
  },
  computed: {
    bloquear() {
      return this.user.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style lang='scss' scoped>
div.sign {
  min-height: 100vh;
  color: whitesmoke;
  background-color: #2c3e50d2;
  padding: 50px;
  div.container {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 500px;
    background-color: whitesmoke;
    border-radius: 20px;
    h3 {
      color: black;
      margin: 20px auto;
    }
    input {
      margin: 10px 0;
      border-radius: 20px;
      border: none;
      box-shadow: 3px 3px 20px -4px black;
      height: 30px;
      text-align: center;
    }
    button {
      margin: 20px 0;
    }
  }
}
</style>