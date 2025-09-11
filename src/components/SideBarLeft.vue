<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <h2>Kapitelübersicht</h2>
            <ul>
                <li v-for="chapter in chapter_list" :key="chapter.id">
                    <router-link :to="chapter.routeName" class="chapter-link"
                        :class="{ active: currentName === chapter.routeName }">
                        {{ chapter.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentName = computed(() => String(route.name ?? ''))

const chapter_list = [
    { id: 0, title: " Einleitung", routeName: "einleitung" }, {
        id: 1, title: "Scratch-Einführung",
        routeName: "scratch-einfuehrung"
    }, { id: 2, title: "Springen", routeName: "springen" }, {
        id:
            3, title: "Röhre", routeName: "roehre"
    }, {
        id: 4, title: "Kollision", routeName: "kollision"
    }, { id: 5, title: "Punktestand", routeName: "score" }, {
        id: 6, title: "Rückblick",
        routeName: "rueckblick"
    },] </script>

<style scoped>
.sidebar {
    width: 15vw;
    padding: 1.5rem;
    height: 100vh;
    box-sizing: border-box;
    text-align: left;
    align-self: center;
    position: absolute;
    top: 50%;
    left: 0;
}

.sidebar h2 {
    font-size: 1.3rem;
    margin: 0.75rem 0;
}

.sidebar ul {
    list-style: none;
    /* 🔥 Entfernt die Punkte */
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin: 0.75rem 0;
}

.sidebar a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    display: inline-block;
    padding: 0.3rem 0.5rem;
    transition: background-color 0.2s ease;
    border-radius: 24px;
    padding: 0.5rem 0.5rem;
}

.sidebar a:hover {
    background-color: #ffcd97;
    font-weight: 600;

}

.chapter-link.active {
    background-color: #ffb866;
    color: #111;
    font-weight: 600;
}

.sidebar-content {
    position: fixed;
    top: 10%;
    left: 20;
}
</style>
