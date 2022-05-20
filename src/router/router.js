import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'



const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Dashboard
        }
    ]
})

export default router