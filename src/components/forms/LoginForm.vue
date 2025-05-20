<script setup>
import { ref } from 'vue';
const newUser = ref(false)
</script>

<template>
    <div v-if="newUser">

        <form action="submit">
            <h1>Create new user</h1>
    
            <button 
            @click.stop.prevent="newUser = !newUser"
            type="button"
            >Login</button>
        </form>
        
    </div>
    <div v-else>
        <form action="submit">
            <h1>Login</h1>
            <button 
            @click.stop.prevent="newUser = !newUser"
            type="button"
            >Create new user</button>
        </form>

    </div>
</template>
<style scoped>
form{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    width: 50vw;
    background-color: gray;
    border-radius: 15px;
}
</style>