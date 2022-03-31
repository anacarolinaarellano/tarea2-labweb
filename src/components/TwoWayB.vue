<script>
export default {
  props: {
    myinput() {
      return {
        myinput:"",
      };
    },
  },
};
</script>

<template class="my-binding">
  <h2>Escribe algo aquí</h2>
  <input type="text" v-model="myinput" />
  <h2>{{ myinput }}</h2>
</template>

<style scoped>
.my-binding {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}
</style>
