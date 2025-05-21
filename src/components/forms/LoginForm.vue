<script setup>
import Dropdown from '../Dropdown.vue';
import MinDropdown from '../utils/MinDropdown.vue';
import { ref, onMounted } from 'vue';
const newUser = ref(false)
const active = ref(null)
const listLength = ref(null)
const list = ref([])
onMounted(async () => {
    const res = await window.dispatch.getUser()
    active.value = res.active
    listLength.value = Object.keys(res.users).length
    list.value = Object.values(res.users).map(user => user.name)
})

</script>

<template>
    <div v-if="newUser && listLength===1">

    </div>

    <div v-if="newUser">
        <form action="submit">
            <h1>Create new user</h1>
            <button 
            @click.stop.prevent="newUser = !newUser"
            type="button"
            >
            Login
        </button>
        </form>
    </div>

    <div v-else>
        <form action="submit">
            <h1>Hello {{ active }}</h1>
                <MinDropdown :options = 'list' />
            <button 
            @click.stop.prevent="newUser = !newUser"
            type="button"
            >
            Create new user
        </button>
        </form>
    </div>
</template>
<style scoped>
form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 40vh;
    width: 50vw;
    background-color: gray;
    border-radius: 15px;
}
</style>