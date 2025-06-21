<script setup>
import Login from './views/Login.vue'
</script>

<template>
  <div class="app-center">
    <router-view />
  </div>
</template>

<style scoped>
.app-center {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;
}

/* Estilos originales, sin modo oscuro */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
