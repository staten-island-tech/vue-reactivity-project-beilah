<template>
    <div>
        <h1>You chose the tonkotsu base! <br>
          Choose your noodle type: Udon, or Soba?</h1>
        <RouterLink to="/tonkotsu-udon">
            <button>
                <img src="/TonkotsuUdon.png" alt="">
            </button>
        </RouterLink>
        <RouterLink to="/tonkotsu-soba">
            <button>
                <img src="/TonkotsuSoba.png" alt="">
            </button>
        </RouterLink>
    </div>
</template>

<script>

</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

div {
  width: 100%;
  margin: auto;
  text-align: center;
  animation: fadeIn 1s ease forwards;
}

h1 {
  text-align: center;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 65px;
  font-size: 60px;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin: 20px;
}

button:hover {
  transform: scale(1.1);
}
</style>