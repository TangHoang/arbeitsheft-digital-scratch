import { createRouter, createWebHistory } from 'vue-router'
import Chapter1 from '@/pages/Chapter1.vue'
import Chapter2 from '@/pages/Chapter2.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chapter/1' },
        { path: '/chapter/1', component: Chapter1 },
        { path: '/chapter/2', component: Chapter2 },
    ]
})