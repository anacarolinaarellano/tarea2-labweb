<template class="image-btn">
    <b-img
      class="my-image"
      src="../src/assets/images/kit.jpeg"
      fluid
    ></b-img>
    <b-button class="mx-1 my-btn" variant="info">Cambiar Imagen</b-button>
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