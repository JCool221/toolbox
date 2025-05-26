<script setup>
import { ref } from 'vue';
const selection = ref(null)
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    selection: {
        type: String,
        required: false,
    }
})
console.log(props.selection, props.options)
</script>
<template>
<div>
    <select v-model="selection">
        <option 
        v-for="(option, index) in options" 
        :value="option"
        :key="index"
        >
        {{ option }}
    </option>
    </select>
</div>
</template>
<style scoped>
</style>