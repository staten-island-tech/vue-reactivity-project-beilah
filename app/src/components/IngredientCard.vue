<template>
  <div class="card">
    <h2>{{ ingredient.name }}</h2>
    <div class="image-wrapper">
      <img :src="ingredient.img" :alt="ingredient.name" />
    </div>
    <p>{{ ingredient.price }}</p>
  </div>
</template>

<script setup>
defineProps({
    ingredient: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 250px;
  height: 25s0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.image-wrapper {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-wrapper img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

</style>