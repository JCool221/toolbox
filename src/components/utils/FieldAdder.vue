<script setup>
import { ref } from 'vue'


const props = defineProps({
    modelValue: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const fields = ref([...props.modelValue])

function addField() {
    fields.value.push({ type: 'short', value: ''})
    emit('update:modelValue', fields.value)
}

function removeField(index) {
    fields.value.splice(index, 1)
    emit('update:modelValue', fields.value)
}
</script>

<template>
    <div class="container">

        <button @click="addField">Add Field</button>

        <div v-for="(field, index) in fields" :key="index">
            <select v-model="field.type">
                <option value="short">Short</option>
                <option value="long">Long</option>
            </select>
        </div>

        <div v-if="fields.type === 'short'">
            <input type="text" v-model="fields.value" placeholder="short" />
        </div>
        <div v-else="field.type === 'long'">
            <textarea v-model="fields.value" placeholder="long"></textarea>
        </div>

        <button @click="removeField(index)">Remove Field</button>
    </div>




</template>