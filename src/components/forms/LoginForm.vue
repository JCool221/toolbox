<script setup>
import { handleFormSubmit } from '../../helpers/utils';
import Dropdown from '../Dropdown.vue';
import MinDropdown from '../utils/MinDropdown.vue';
import { ref, onMounted } from 'vue';
const newUser = ref(false)
const active = ref(null)
const list = ref([])
const userName = defineModel()
let listLength
onMounted(async () => {
    const res = await window.dispatch.getUser()
    active.value = res.active
    listLength = Object.keys(res.users).length
    list.value = Object.values(res.users).map(user => user.name)
    console.log(res)
})

// const test = async()=>{
//     console.log('renderer function call')
//     const res = await window.api.get('testLog')
//     console.log(res)
// }

const handleSubmit = async() =>{
    const userID = await window.api.get('makeUserID')
    const payload = { 
        userID, 
        userName: userName.value 
    }
    console.log(payload)
    const update = await window.dispatch.upgradeDefaultUser(payload)
}

</script>

<template>
    <div v-if="newUser && listLength === 1">
        <form name="updateDefault" @submit.prevent>
            <h1>Update Default user</h1>
            <p>user is: {{  userName }}</p>
            <!-- <button @click="test()">test</button> -->
            <label for="name">New Username:</label>
            <input v-model="userName">
            <button @click.stop.prevent = "handleSubmit">Submit</button>
            <button 
            @click.stop.prevent="newUser = !newUser"
            type="button"
            >
            Login
        </button>
        </form>

    </div>

    <div v-else-if="newUser">
        <form name="newUser" @submit.prevent="handleSubmit">
            <h1>Create new user</h1>
            <label for="name">New Username:</label>
            <input 
            type="text"
            name="name"
            id="name"
            required
            >
            <button 
            @click.stop.prevent="newUser = !newUser"
            type="button"
            >
            Login
        </button>
        </form>
    </div>

    <div v-else>
        <form name="changeUser" @submit.prevent="handleSubmit">
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