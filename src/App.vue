<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
// const options = ref<string[]>(['Option 1', 'Option 2', 'Option 3'])
</script>

<template>
  <div class="base-container">

    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.base-container{
  height: 75vh;
}

</style>
