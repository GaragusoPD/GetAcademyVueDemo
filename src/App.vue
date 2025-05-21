<!-- src/App.vue -->
<script setup>
import MainMenu from './components/navigation/MainMenu.vue';
</script>

<template>
  <div>
    <MainMenu />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 1rem;
  max-width: 800px;
  margin: auto;
}

h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  color: red;
}
</style>
