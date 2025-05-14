<script setup lang="ts">

</script>

<template>
<nav>
    <p>Welcome</p>
    <router-link to="/">Homebrew Toolbox</router-link>
    <button class="link">Login</button>
</nav>

</template>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    background-color: rgb(14, 17, 14);
    width: 100vw;
}

p{
    
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: bold;
}

</style>