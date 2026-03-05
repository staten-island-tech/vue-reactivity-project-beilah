<template>
    <div>
        <h1>
            Welcome to Kiki and Jelly's! <br>
            Choose your ramen base here: Tonkotsu, or Shoyu?</h1>
        <RouterLink to="/tonkotsu-base">
            <button>
                <img src="/TonkotsuBase.png" alt="Tonkotsu Base">
            </button>
        </RouterLink>
        <RouterLink to="/shoyu-base">
            <button>
                <img src="/ShoyuBase.png" alt="Shoyu Base">
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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