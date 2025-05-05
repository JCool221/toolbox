<script setup>
import FieldAdder from '../components/utils/FieldAdder.vue';
import { ref } from 'vue';

const fields = ref([])
</script>

<template>
    <div>
        <FieldAdder v-model="fields" />

        <pre>{{ fields }}</pre>
    </div>
</template>