import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../pages/Home.vue'

const routes = [
    {path: '/home', component: Home}
    // {path: '/'}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router