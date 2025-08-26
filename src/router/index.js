import { createRouter, createWebHistory } from 'vue-router'
import Einleitung from '@/pages/Einleitung.vue'
import Kontrollstrukturen from '@/pages/Kontrollstrukturen.vue'
import Variablen from '@/pages/Variablen.vue'
import FlappyBird from '@/pages/FlappyBird.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chapter/einleitung' },
        { path: '/chapter/einleitung', name: "Einleitung", component: Einleitung },
        { path: '/chapter/kontrollstrukturen', name: "Kontrollstrukturen", component: Kontrollstrukturen },
        { path: '/chapter/variablen', name: "Variablen", component: Variablen },
        { path: '/chapter/flappy-bird', name: "FlappyBird", component: FlappyBird },


    ]
})