<script setup lang="ts">

</script>
<template>
    <footer>
        <div></div>
        <p>Copyright</p>
        <RouterLink to="/data">Data Manager</RouterLink>
    </footer>
</template>
<style scoped>
footer{
    height: 2rem;
    width: 100vw;
    bottom: 0;
    left: 0;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}
.data{
    margin-right: 15px;
}
</style>