import { createRouter, createWebHistory } from 'vue-router'
import Einleitung from '@/pages/Einleitung.vue'
import FlappyBird from '@/pages/FlappyBird.vue'
import Springen from '../pages/Springen.vue'
import Roehre from '../pages/Roehre.vue'
import Kollision from '../pages/Kollision.vue'
import Score from '../pages/Score.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chapter/einleitung' },
        { path: '/chapter/einleitung', name: "Einleitung", component: Einleitung },
        { path: '/chapter/springen', name: "Springen", component: Springen },
        { path: '/chapter/roehre', name: "Roehre", component: Roehre },
        { path: '/chapter/kollision', name: "Kollision", component: Kollision },
        { path: '/chapter/score', name: "Punktestand", component: Score },
        { path: '/chapter/flappy-bird', name: "FlappyBird", component: FlappyBird },


    ]
})