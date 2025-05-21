<script setup>
        import { onMounted, ref } from 'vue'
    import Modal from '../components/Modal.vue'
    import LoginForm from '../components/forms/LoginForm.vue'

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
<nav>
    <p>Welcome</p>
    <router-link to="/">Homebrew Toolbox</router-link>
    <!-- <button class="link">Login</button> -->
         <Modal label="Login" :form="LoginForm" className="link"/>

</nav>

</template>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    background-color: rgb(14, 17, 14);
    width: 100vw;
}

p{
    
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: bold;
}

</style>