<script>
export default {
  data() {
    return {
      clicked: false,
    };
  },
};
</script>
<template>
  <b-button class="my-show" variant="dark" @click="clicked = !clicked"
    >Click para mostar/ocultar elemento</b-button
  >
  <h3 v-show="clicked">Hola mundo!</h3>
</template>
<style scoped>
.my-show{
    margin: 30px auto;
}
</style>