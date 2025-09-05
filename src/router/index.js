import { createRouter, createWebHistory } from 'vue-router'
import Einleitung from '@/pages/Einleitung.vue'
import FlappyBird from '@/pages/FlappyBird.vue'
import Springen from '../pages/Springen.vue'
import Roehre from '../pages/Roehre.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chapter/einleitung' },
        { path: '/chapter/einleitung', name: "Einleitung", component: Einleitung },
        { path: '/chapter/springen', name: "Springen", component: Springen },
        { path: '/chapter/roehre', name: "Roehre", component: Roehre },

        { path: '/chapter/flappy-bird', name: "FlappyBird", component: FlappyBird },


    ]
})