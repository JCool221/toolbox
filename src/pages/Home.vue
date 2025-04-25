    <script setup>
    import { onMounted, ref } from 'vue'
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
    <h1>
        welcome {{ user }}!
    </h1>
    <button type="button" @click = "get()">{{ res }}</button>
    
</template>