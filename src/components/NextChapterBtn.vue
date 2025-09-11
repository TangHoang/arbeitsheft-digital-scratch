<template>
    <transition name="fade">
        <nav v-if="isChapter" class="next-nav" role="navigation" aria-label="Kapitel-Navigation">
            <button v-if="prevChapter" class="btn btn-secondary" @click="goPrev" aria-label="Vorheriges Kapitel">
                ◀ Kapitel: {{ prevChapter.title }}
            </button>

            <button v-if="nextChapter" class="btn btn-primary" @click="goNext" aria-label="Nächstes Kapitel">
                Kapitel: {{ nextChapter.title }} ▶
            </button>

            <button v-else class="btn btn-finish" @click="finish" aria-label="Kapitel abschließen">
                Kapitel: Rückblick ✓
            </button>
        </nav>
    </transition>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const OVERVIEW_ROUTE = 'rueckblick'

const chapters = [
    { id: 0, title: "Einleitung", routeName: "einleitung" },
    { id: 1, title: "Scratch-Einführung", routeName: "scratch-einfuehrung" },
    { id: 2, title: "Springen", routeName: "springen" },
    { id: 3, title: "Röhre", routeName: "roehre" },
    { id: 4, title: "Kollision", routeName: "kollision" },
    { id: 5, title: "Punktestand", routeName: "score" },
]

const router = useRouter()
const route = useRoute()

const isChapter = computed(() =>
    chapters.some(c => c.routeName === route.name)
)

const currentIndex = computed(() =>
    chapters.findIndex(c => c.routeName === route.name)
)

const prevChapter = computed(() =>
    currentIndex.value > 0 ? chapters[currentIndex.value - 1] : null
)

const nextChapter = computed(() =>
    currentIndex.value >= 0 && currentIndex.value < chapters.length - 1
        ? chapters[currentIndex.value + 1]
        : null
)

function goPrev() {
    if (!prevChapter.value) return
    router.push({ name: prevChapter.value.routeName }).then(scTop)
}

function goNext() {
    if (!nextChapter.value) return
    router.push({ name: nextChapter.value.routeName }).then(scTop)
}

function finish() {
    const hasOverview =
        router.getRoutes().some(r => r.name === OVERVIEW_ROUTE)
    const target = hasOverview
        ? { name: OVERVIEW_ROUTE }
        : { name: chapters[0].routeName }

    router.push(target).then(scTop)
}

function scTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.next-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;

    padding: 12px clamp(12px, 4vw, 24px);
    padding-bottom: calc(12px + env(safe-area-inset-bottom));

    background: rgba(255, 255, 255, 0.0.1);
    -webkit-backdrop-filter: blur(1px) saturate(0.2);
    backdrop-filter: blur(1px) saturate(1.2);

    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.08);
    z-index: 1000;
}

@supports not ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {
    .next-nav {
        background: rgba(255, 255, 255, 0.52);
    }
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.65);
    border-color: rgba(0, 0, 0, 0.12);
}

@media (prefers-color-scheme: dark) {
    .btn-secondary {
        background: rgba(255, 255, 255, 0.06);
        color: #e5e7eb;
        border-color: rgba(255, 255, 255, 0.12);
    }
}

.btn {
    min-height: 44px;
    padding: 10px 14px;
    border-radius: 12px;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform .04s ease, box-shadow .15s ease, background-color .15s ease;
    white-space: nowrap;
    max-width: 48vw;
    overflow: hidden;
    text-overflow: ellipsis;
}

.btn:active {
    transform: translateY(1px);
}

.btn-primary {
    background: #9b46e5;
    color: #fff;
    box-shadow: 0 4px 16px rgba(79, 70, 229, .25);
}

.btn-primary:hover {
    background: #b638ca;
}

.btn-secondary {
    background: #fff;
    color: #374151;
    border-color: rgba(0, 0, 0, .12);
}

.btn-secondary:hover {
    background: #f3f4f6;
}

.btn-finish {
    background: #16a34a;
    color: #fff;
    box-shadow: 0 4px 16px rgba(22, 163, 74, .25);
}

.btn-finish:hover {
    background: #15803d;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
