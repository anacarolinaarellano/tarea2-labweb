<script setup>
import MyCard from "./components/Card.vue";
import Navbar from "./components/Navbar.vue";
import MyHeader from "./components/MyHeader.vue";
import MyImage from "./components/MyImage.vue";
</script>

<template>
  <Navbar />
  <main class="my-main">
    <MyHeader />
    <div class="my-row">
      <MyCard
        cardTitle="Mi Card 1"
        content="Este es un componente reusable que recibe tituloo y texto"
      />
      <MyCard
        cardTitle="Mi Card 2"
        content="Estoy reutilizando el mismo componente"
        url="./assets/images/kit.jpeg"
      />
    </div>
    <div class="center">
      <MyImage/>
    </div>
  </main>
</template>

<style>
.my-main {
  padding: 25px;
}
.my-row {
  display: flex;
  justify-content: space-around;
}
.center{
  justify-content: space-evenly;
  display: flex;
}
</style>
