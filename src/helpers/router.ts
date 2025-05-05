import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../pages/Home.vue'
import DataManager from "../pages/DataManager.vue";
import DataEntry from "../pages/DataEntry.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/data', component: DataManager},
    {path: '/create', component: DataEntry}
    // {path: '/'}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router