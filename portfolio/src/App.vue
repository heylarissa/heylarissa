<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>larissa hey</div>
    <div>
      <v-icon icon="mdi:mdi-home" />
      <v-icon icon="fas fa-plus" />
      <v-icon icon="mdi:mdi-minus" />
      <RouterLink to="https://github.com/heylarissa">Github</RouterLink>
      <RouterLink to="https://github.com/heylarissa">Linkedin</RouterLink>
      <RouterLink to="https://github.com/heylarissa">Instagram</RouterLink>
      <RouterLink to="https://github.com/heylarissa">Behance</RouterLink>
    </div>
  </header>
  <v-icon icon="fa-check" />
  <v-icon icon="fas fa-plus" />

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
}
</style>
