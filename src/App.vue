<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Dropdown from './components/Dropdown.vue';
</script>

<template>
  <nav>
    <Dropdown />
    <!-- this line isn't necessary but i'm leaving it for now for syntax -->
    <!-- <RouterLink to='/home'>go to the home</RouterLink> -->
  </nav>
  <HelloWorld msg="Homebrew Toolbox" />
  <RouterView />
</template>

<style scoped>

</style>
