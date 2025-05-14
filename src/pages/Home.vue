    <script setup>
    import { onMounted, ref } from 'vue'
    import Modal from '../components/Modal.vue'
    const res = ref('Click Me!')
    const user = ref(null)
    onMounted(async () => {
        const res = await window.dispatch.getUser()
        user.value = res.active
        })
    async function get(){
        try{
            res.value = await window.api.get()
            console.log(res.value)
        } catch (e) {
            console.log(`didn't work` + e)
        }
    }
    </script>
<template>
    <h1 v-if="user === 'default'">
        Welcome to Homebrew Toolbox
    </h1>
    <h1 v-else>
        welcome {{ user }}!
    </h1>
    <button type="button" @click = "get()">{{ res }}</button>
    <Modal text="modal test" />
</template>