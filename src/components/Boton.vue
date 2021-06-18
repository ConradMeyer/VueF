<template>
  <button @click="prueba" class="btn btn-warning mt-2 btn-md">
    Prueba
  </button>
</template>

<script>
export default {
    name: "Boton",
    props: {
        prueba: Function
    }

}
</script>
