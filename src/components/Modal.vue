<script setup>
import { ref } from 'vue';
defineProps({
    text: String
})
const active = ref(false)
</script>
<template>
    <button @click="active = !active">{{ text }}</button>
<div 
    v-if="active" 
    @click="active = !active" 
    class="backdrop">
    <div class="splash">Hello World</div>

</div>
</template>
<style scoped>
.backdrop{
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: black;
    opacity: 75%;
    top: 0;
    left: 0;
}
</style>