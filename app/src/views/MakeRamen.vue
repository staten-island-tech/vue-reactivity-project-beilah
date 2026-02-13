<template>
  <div class="container">
    <h1>Ramen Maker</h1>
    <img src="/EmptyBowl.png" alt="Empty Bowl Img Holder">

    <div class="card-grid">
      <IngredientCard
        v-for="ingredient in ingredients"
        :key="ingredient.name"
        :ingredient="ingredient"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import IngredientCard from '@/components/IngredientCard.vue'
const ingredients = ref([
  { name: 'Egg', img: '/Egg.png', price: '$2' },
  { name: 'Ham', img: '/Ham.png', price: '$2' },
  { name: 'Narutomaki', img: '/Narutomaki.png', price: '$2' },
  { name: 'Seaweed', img: '/Seaweed.png', price: '$2' },
])
</script>

<style>
h1 {
  color: white;
  font-size: 50px;
}
body {
  background-image: url("/Background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
img {
  width: 600px;
  height: auto;
  display: block;
  margin-top: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  height: 60vh;
    flex-wrap: wrap;
}
img {
  width: 600px;
  height: auto;
  margin: 20px 0;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 20px;
  justify-items: center;
}
div {
  padding: 16px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>