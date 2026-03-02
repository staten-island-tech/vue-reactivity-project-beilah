<template>
  <div class="container">
    <h1>You chose the tonkotsu base with udon noodles! Add toppings here.</h1>
    <div class="imageContainer">
      <img src="/TonkotsuUdon.png" alt="Empty Bowl Img Holder" />
    </div>

    <div class="overlayImgDiv">
      <img
        v-for="(ingredient, index) in placedIngredients"
        :key="ingredient.name + index"
        :src="ingredient.img"
        :alt="ingredient.name"
        class="overlayImage"
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
  { name: 'Egg', img: '/Egg.png', price: '$2' },
  { name: 'Ham', img: '/Ham.png', price: '$2' },
  { name: 'Narutomaki', img: '/Narutomaki.png', price: '$2' },
  { name: 'Seaweed', img: '/Seaweed.png', price: '$2' },
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
.overlayImage {
  position: absolute;
  left: 640px;
  top: 210px;

  width: 175px;
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
