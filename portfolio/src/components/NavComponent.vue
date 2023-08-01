<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/projects">projects</router-link>
      <router-link to="/contact">contact</router-link>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style>
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  float: left;

  position: fixed;
  gap: 20px;
}
</style>
