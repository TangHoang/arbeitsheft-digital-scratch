import { createRouter, createWebHistory } from 'vue-router'
import Einleitung from '@/pages/Einleitung.vue'
import FlappyBird from '@/pages/FlappyBird.vue'
import Springen from '../pages/Springen.vue'
import Roehre from '../pages/Roehre.vue'
import Kollision from '../pages/Kollision.vue'
import Score from '../pages/Score.vue'
import ScratchEinfuehrung from '../pages/ScratchEinfuehrung.vue'
import Rueckblick from '../pages/Rueckblick.vue'

import { nextTick } from 'vue'


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/chapter/einleitung' },
        { path: '/chapter/einleitung', name: "einleitung", component: Einleitung },
        { path: '/chapter/scratch-einfuehrung', name: "scratch-einfuehrung", component: ScratchEinfuehrung },
        { path: '/chapter/springen', name: "springen", component: Springen },
        { path: '/chapter/roehre', name: "roehre", component: Roehre },
        { path: '/chapter/kollision', name: "kollision", component: Kollision },
        { path: '/chapter/score', name: "score", component: Score },
        { path: '/chapter/rueckblick', name: "rueckblick", component: Rueckblick },
    ],

    scrollBehavior() {
        return new Promise((resolve) => {
            nextTick(() => {
                requestAnimationFrame(() => {
                    resolve({ top: 0, behavior: 'smooth' })
                })
            })
        })
    }

})