<script setup>
import LogoIcon from './components/icons/LogoIcon.vue'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <NavComponent></NavComponent>
  <div class="main-container">
    <LogoIcon></LogoIcon>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Raleway:ital,wght@1,900&family=Ramaraja&display=swap');

body {
  font-family: 'Raleway', Helvetica, sans-serif, Arial;
  font-size: 14px;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 2.5em;
  font-family: Ramaraja;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  width: 100%;
}
</style>
