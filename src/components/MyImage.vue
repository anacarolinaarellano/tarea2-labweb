<script>
export default {
  data() {
    return {
      showCat: true,
    };
  },
};
</script>
<template class="image-btn">
    <b-img v-if="showCat"
      class="my-image"
      src="../src/assets/images/kit.jpeg"
      fluid
    ></b-img>
    <b-img v-else
      class="my-image"
      src="../src/assets/images/puppy.jpeg"
      fluid
    ></b-img>
    <b-button class="mx-1 my-btn" variant="info" @click="showCat = !showCat">Cambiar Imagen</b-button>
</template>

<style scoped>
    .my-image{
        margin: 10px auto;
    }
    .image-btn{
        display: flex;
        justify-content:center;
        align-content: center;
    }
    .my-btn{
        height: 3rem;
    }
</style>