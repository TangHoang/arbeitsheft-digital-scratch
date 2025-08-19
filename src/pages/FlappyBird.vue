<template>
    <ChapterShell title="Projekt - Flappy Bird" description="Du kennst bereits Fallunterscheidungen, Schleifen und Variablen. Das reicht schon aus, um dein eigenes Flappy Bird Spiel zu entwickeln! 
        In diesem Kapitel bist du an der Reihe. 
        Das heißt, dieses Arbeitsheft wird dich bei der Entwicklung nur noch begleiten und nur kleine Vorgaben geben. 
        Wie du jedoch das Spiel im Endeffekt umsetzt, ist deine Entscheidung. Los geht's! :-)" :content="content" />
</template>

<script setup>
import ChapterShell from "@/components/ChapterShell.vue";
import RohrUrl from "@/assets/Rohr_code.png"
const FlappyBirdSkelett = new URL("@/assets/FlappyBird_Skelett.sb3", import.meta.url).href;


const content = [
    {
        sectionTitle: "",
        title: "Vorbereitung",
        description:
            "Öffne das folgende Projekt. Du wirst erkennen, dass die sich bewegenden Röhren schon vorbereitet sind. In den folgenden Aufgaben füllen wir das Projekt mit Sprites, Hintergrundbildern und Programmcode.",
        hints: [
            {
                title: "Hinweis-Titel",
                hint: "Hinweis-Content",
            },
        ],
        blocks: [
            {
                type: "scratchContent",
                props: { scratchUrl: "https://scratch.mit.edu/projects/1206376368/embed", imageUrl: RohrUrl }
            },
            {
                type: "subTasks",
                props: { items: ["a) Lade das Projekt herunter und öffne es in deinem Editor.", "b) Wähle dein 'Bird' aus und ein geeignetes Hintergrundbild"] },
            },
            {
                type: "editor",
                props: { projectUrl: FlappyBirdSkelett, iframeUrl: "https://scratch.fim.uni-passau.de/scratch/" }
            },
            {
                type: "subTitle",
                props: { subTitle: "Aufgabe 1" }
            },
            {
                type: "subTasks",
                props: { items: ["a) Nenne deinen gewählten Sprite 'Bird'.", "b) Programmiere 'Bird' so, dass er springt, wenn du die Leertaste drückst und danach wieder fällt."] },
            },
        ],
    }
]
</script>