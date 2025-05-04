<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue';
// import Dropdown from './components/Dropdown.vue';
// import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
// const options = ref<string[]>(['Option 1', 'Option 2', 'Option 3'])
</script>

<template>
  <div class="base-container">

    <Navbar />
    <nav>
      <!-- <Dropdown :options = "options"/> -->
      <!-- this line isn't necessary but i'm leaving it for now for syntax -->
      <!-- <RouterLink to='/home'>go to the home</RouterLink> -->
    </nav>
    <HelloWorld msg="Homebrew Toolbox" />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.base-container{
  height: 75vh;
}

</style>
