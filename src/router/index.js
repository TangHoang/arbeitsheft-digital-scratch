import { createRouter, createWebHistory } from 'vue-router'
import Kontrollstrukturen from '@/pages/Kontrollstrukturen.vue'
import Variablen from '@/pages/Variablen.vue'
import FlappyBird from '@/pages/FlappyBird.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chapter/kontrollstrukturen' },
        { path: '/chapter/kontrollstrukturen', name: "Kontrollstrukturen", component: Kontrollstrukturen },
        { path: '/chapter/variablen', name: "Variablen", component: Variablen },
        { path: '/chapter/flappy-bird', name: "FlappyBird", component: FlappyBird },


    ]
})