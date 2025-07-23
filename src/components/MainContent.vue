<template>
    <div class="main medium-style">
        <h1>Kontrollstrukturen</h1>
        <p>
            In der Programmierung wirst du andauernd auf Situationen stoßen, in denen der weitere Ablauf des Programms von einer Bedingung abhängt. 
            Man benötigt dafür Code der eine Fallunterscheidung erlaubt.
        </p>
            <p class="exercise-title"><strong>Aufgabe 1</strong></p>
        <p>a) Starte das folgende Programm probiere es aus. <br>
            b) Beschreibe, wo Fallunterscheidungen auftreten.
        </p>
        <ProjectLinkButton url="https://scratch.mit.edu/projects/1200064022/" />

        <div class="scratch-code-container">
            <iframe 
                src="https://scratch.mit.edu/projects/1200064022/embed" 
                allowtransparency="true" 
                width="485" height="402" 
                frameborder="0" 
                scrolling="no" 
                allowfullscreen>
            </iframe>
            <img src="../assets/raumschiff_code.png" height="402">
        </div>
        <StudentAnswer />
   
    </div>

</template>

<script setup>
    import StudentAnswer from './StudentAnswer.vue'
    import ProjectLinkButton from './ProjectLinkButton.vue';
</script>

<style scoped>
    .main {
        flex: 1;
        padding: 2rem;
        overflow-y: auto;
        background-color: #ffffff;
    }

    .scratch-code-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    p {
        text-align: left;
        padding: 0 100px;
    }
    .medium-style {
        font-family: Helvetica, 'Times New Roman', serif;
        font-size: 1.125rem;
        line-height: 1.8;
        color: #333;
        max-width: 2000px;
        margin: 0 auto;
    }

    .medium-style h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #111;
        padding: 0 80px;
    }

    .medium-style h2 {
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #222;
    }

    .medium-style p {
        margin-bottom: 0.2rem;
    }

    .medium-style iframe {
        margin: 0.5rem 0;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .medium-style ul {
        list-style: disc;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .aufgaben-titel {
        border-bottom: 1px solid #ddd;
        font-size: 1.8rem;
    }

    ProjektButton {
        align-self: left;
    }

</style>