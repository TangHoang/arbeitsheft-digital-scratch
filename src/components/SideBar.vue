<template>
    <aside>
        <div class="sidebar">
            <div class="sidebar-content">
                <h2>Kapitelübersicht</h2>
                <ul>
                    <li 
                        v-for="kapitel in kapitel_liste" :key="kapitel.id">
                            <a href="#" @click.prevent="kapitelWechseln(kapitel.titel)">{{ kapitel.titel }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup>
    const kapitel_liste = [
        {id: 0, titel: "Einführung"},
        {id: 1, titel: "Scratch"},
        {id: 2, titel: "Kontrollstrukturen"},
        {id: 3, titel: "Projekt: Flappy Bird"},
    ]
    function kapitelWechseln(titel) {
        alert(`Kapitel ${titel} wurde angeklickt!`)
    }
</script>

<style scoped>
    .sidebar {
        width: 20vw;
        background-color: #fff;
        padding: 1.5rem;
        height: 100vh;
        box-sizing: border-box;
        text-align: left;
        align-self: center;
    }

    .sidebar h2 {
        font-size: 1.3rem;
        margin: 0.75rem 0;    }

    .sidebar ul {
        list-style: none;     /* 🔥 Entfernt die Punkte */
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
        left: 50;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>