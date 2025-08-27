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
                props: { projectUrl: FlappyBirdSkelett, iframeUrl: "https://scratch.fim.uni-passau.de/scratch/", floating: true }
            },
            {
                type: "subTitle",
                props: { subTitle: "Aufgabe 1" }
            },
            {
                type: "subTasks",
                props: { items: ["a) Nenne deinen gewählten Sprite 'Bird'.", "b) Programmiere 'Bird' so, dass er springt, wenn du die Leertaste drückst und danach wieder fällt."] },
            },
            {
                type: "subTitle",
                props: { subTitle: "Aufgabe 2", items: [{ title: 'Start', text: 'Nutze die grüne Flagge.', defaultOpen: true, duration: 180 }, { title: 'Position', text: 'Setze eine klare Startposition.', duration: 300 }, { title: 'Bild', text: 'Vergleiche mit dem Beispielbild.', image: '', duration: 400 }] }
            },
            {
                type: "subTasks",
                props: { items: ["a) Öffne den folgenden Button, um das Tool zu öffnen, um deine bisherige Programmierung zu testen.", "b) Lade dein Projekt und die Testdatei hoch.", "c) Wechsele nun in den Tab 'Mein Projekt' und starte den Test, indem du auf das Dreieck clickst."] }
            },
            {
                type: "editor",
                props: { buttonTitle: "Test", iframeUrl: "https://tanghoang.github.io/whisker-edit/?lng=de" }
            },
            {
                type: "subTasks",
                props: { items: ["Du merkst wahrscheinlich, dass das Spiel nicht abgebrochen wird, obwohl"] }
            }

        ],
    }
]
</script>