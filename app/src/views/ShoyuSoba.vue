<template>
  <div class="container">
    <h1>You chose the shoyu base with soba noodles! Add toppings here.</h1>
    <div class="imageContainer">
      <img src="/ShoyuSoba.png" alt="Empty Bowl Img Holder" />
    </div>

    <div class="bowlWrapper">

  <img
    v-for="(ingredient, index) in placedIngredients"
    :key="ingredient.name + index"
    :src="ingredient.img"
    :alt="ingredient.name"
    class="overlayImage"
    :style="{
      top: ingredient.top,
      left: ingredient.left,
      width: ingredient.width
    }"
  />
</div>

    <div class="ingredientsList">
      <IngredientCard
        class="ingredientCard"
        @click="addIngredient(ingredient), removeBtn(ingredient)"
        v-for="ingredient in ingredients"
        :key="ingredient.name + index"
        :ingredient="ingredient"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IngredientCard from '@/components/IngredientCard.vue'
const ingredients = ref([
  { name: 'Egg', img: '/Egg.png', price: '$2', top: '-405px', left: '60px' },
  { name: 'Ham', img: '/Ham.png', price: '$2', top: '-370px', left: '230px', width: '200px'},
  { name: 'Narutomaki', img: '/Narutomaki.png', price: '$2', top: '-420px', left: '450px', width: '120px' },
  { name: 'Seaweed', img: '/Seaweed.png', price: '$2', top: '-500px', left: '380px', width: '170px' },
])

const placedIngredients = ref([])

function addIngredient(ingredient) {
  placedIngredients.value.push(ingredient)
}
function removeBtn(ingredient) {}
</script>

<style>
h1 {
  color: white;
  font-size: 50px;
  width: 400px;
  text-align: center;
  margin-bottom: 20px;
}
body {
  background-image: url('/Background.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
}
img {
  width: 600px;
  height: auto;
  display: block;
  margin-top: 20px;
}
.bowlWrapper {
  position: relative;
  width: 600px;
}

.overlayImage {
  position: absolute;
  width: 160px;
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

.ingredientsList {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 20px;
  justify-items: center;
}
div {
  padding: 16px;
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