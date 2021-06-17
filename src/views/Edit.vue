<template>
  <div class="edit">
    <h3>Editar Tarea - {{ $route.params.id }}</h3>
    <form @submit.prevent="updateTarea(tarea)">
      <Input :tarea="tarea" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input.vue";
export default {
  name: "Edit",
  props: {},
  components: {
    Input,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([`setTarea`, 'updateTarea']),
  },
  computed: {
    ...mapState(["tarea"]),
  },
  created() {
    this.setTarea(this.$route.params.id);
  },
};
</script>

<style lang='scss' scoped>
</style>