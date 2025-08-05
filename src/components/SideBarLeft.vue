<template>
    <aside>
        <div class="sidebar">
            <div class="sidebar-content">
                <h2>Kapitelübersicht</h2>
                <ul>
                    <li v-for="chapter in chapter_list" :key="chapter.id">
                        <a href="#" @click.prevent="changeChapter(chapter.title)">{{ chapter.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup>
const chapter_list = [
    { id: 0, title: "Einführung" },
    { id: 1, title: "Scratch" },
    { id: 2, title: "Kontrollstrukturen" },
    { id: 3, title: "Projekt: Flappy Bird" },
]
function changeChapter(titel) {
    alert(`Kapitel ${titel} wurde angeklickt!`)
}
</script>

<style scoped>
.sidebar {
    width: 15vw;
    background-color: #fff;
    padding: 1.5rem;
    height: 100vh;
    box-sizing: border-box;
    text-align: left;
    align-self: center;
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
    border-radius: 4px;
}

.sidebar a:hover {
    background-color: #ddd;
}

.sidebar-content {
    position: fixed;
    top: 20%;
    left: 20;
}
</style>