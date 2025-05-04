import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../pages/Home.vue'
import DataManager from "../pages/DataManager.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/data', component: DataManager}
    // {path: '/'}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router