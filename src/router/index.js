import { createRouter, createWebHistory } from 'vue-router'
import Einleitung from '@/pages/Einleitung.vue'
import Springen from '../pages/Springen.vue'
import Roehre from '../pages/Roehre.vue'
import Kollision from '../pages/Kollision.vue'
import Score from '../pages/Score.vue'
import ScratchEinfuehrung from '../pages/ScratchEinfuehrung.vue'
import Rueckblick from '../pages/Rueckblick.vue'

import { nextTick } from 'vue'

const router = createRouter({
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

        {
            path: '/standalone/scratch-einfuehrung',
            name: 'scratch-einfuehrung-standalone',
            component: ScratchEinfuehrung,
            meta: { standalone: true }
        },
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


export default router