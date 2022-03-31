<script>
export default {
  data() {
    return {
      items: [
        { msg: "Elemento 1" },
        { msg: "Elemento 2" },
        { msg: "Elemento 3" },
        { msg: "Elemento 4" },
      ],
    };
  },
};
</script>
<template>
<h3>Recorrido de arreglo ---></h3>
  <ul class="my-list">
    <li v-for="item in items" :key="item.msg">
      {{ item.msg }}
    </li>
  </ul>
</template>

<style scoped>
.my-list {
  font-size: 1.3rem;
}
</style>
