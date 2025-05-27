    <script setup>
    import { onMounted, ref } from 'vue'

    const user = ref(null)
    onMounted(async () => {
        const res = await window.dispatch.getUser()
        user.value = res.active
        })
    async function get(){
        try{
            await window.dispatch.devResetState()
            const res = window.dispatch.getUser()
            console.log(res)
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
    <button type="button" @click = "get()">Button</button>
</template>