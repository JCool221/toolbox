<script setup>

</script>
<template>
    <h1>Data Management</h1>
    <div class="container">
        <router-link :to="null">Work on existing data</router-link>
        <router-link to="create">Create something new</router-link>
    </div>
</template> 
<style scoped>
    .container{
        width: 50vw;
        height: 15vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .container>a{
        outline: 2px solid white;
        padding: 15px;
        border-radius: 15px;
        background-color: black;
        color: white;
        box-shadow: 5px 5px 15px black;
    }
    .container>a:hover{
        box-shadow: 0 0 10px 5px white;
    }
</style>