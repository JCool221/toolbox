<script setup lang="ts">

</script>

<template>
<nav>
    <p>Welcome</p>
    <button class="link-style">Login</button>
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

.link-style{
    outline: 0;
    border: 0;
    background: none;
    font-size: 18px;
    width: 5rem;
    padding: 5px;
}
.link-style:hover{
    text-decoration: underline;
    font-size: 20px;
    text-shadow: 0 0 10px white;
}
</style>