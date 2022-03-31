<script setup>
defineProps({
  cardTitle: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div>
    <b-card
      :title='cardTitle'
      img-src="../src/assets/images/puppy.jpeg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{content}}
      </b-card-text>
    </b-card>
  </div>
</template>
