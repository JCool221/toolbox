<script setup>
import { ref } from 'vue';
const props = defineProps({
    label: String,
    form: {
        type: Object,
        required: true
    },
    className: {
        type: String,
        default: ''
    }
})
const active = ref(false)
</script>

<template>
    <button :class="className" @click="active = !active">{{ props.label }}</button>
<div 
    v-if="active" 
    @click="active = !active" 
    class="backdrop">
    <div @click.stop class="modal-content">
        <component :is="props.form" />
    </div>
</div>
</template>

<style scoped>
.backdrop{
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: black;
    opacity: 75%;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  
}
</style>