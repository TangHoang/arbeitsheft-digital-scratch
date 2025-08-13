<script setup>
import ChapterShell from "@/components/ChapterShell.vue"
import RaumschiffIf from "@/assets/raumschiff_code_if.png"
import RaumschiffWhile from "@/assets/raumschiff_code_while.png"

const content = [
    {
        sectionTitle: "Fallunterscheidungen",
        title: "Aufgabe 1",
        description:
            "Beim Programmieren ist es unglaublich wichtig Fallunterscheidungen durchzuführen. Doch was ist damit gemeint?",
        hints: [
            {
                title: "Hinweis-Titel",
                hint: "Hinweis-Content",
            },
        ],
        blocks: [
            {
                type: "subTasks",
                props: { items: ["a) Starte das folgende Programm und probiere es aus."] },
            },

            {
                type: "scratchContent",
                props: { scratchUrl: "https://scratch.mit.edu/projects/1200064022/embed", imageUrl: RaumschiffIf }
            },
            {
                type: "subTasks",
                props: { items: ["b) Beschreibe nun, wo in diesem Programm Fallunterscheidungen auftreten."] },
            },
            {
                type: "answer",
                props: {},
            },
        ],
    },

    {
        title: "Aufgabe 2",
        description:
            "Die Rakete kann bisher nur nach oben und nach unten fliegen...",
        blocks: [
            {
                type: "subTasks",
                props: {
                    items: [
                        "a) Öffne das Scratch Projekt, indem du unten auf den Button clickst.",
                        "b) Füge weitere Fallunterscheidungen hinzu, sodass die Rakete auch nach links und rechts fliegen kann.",
                        "c) Zusatz: Verhindere, dass die Rakete den Rand verlassen kann.",
                    ],
                },
            },
            {
                type: "projectButton",
                props: { url: "" },
            },
            {
                type: "editor",
                props: {},
            },
        ],
    },

    {
        sectionTitle: "Schleifen",
        title: "Aufgabe 3",
        description:
            "Schleifen sind genau wie Fallunterscheidungen essenziell für die Programmierung. Was ist mit einer Schleife gemeint?",
        hints: [
            {
                title: "Hinweis-Titel",
                hint: "Hinweis-Content",
            },
        ],
        blocks: [
            {
                type: "subTasks",
                props: { items: ["a) Starte das folgende Programm und probiere es aus."] },
            },
            {
                type: "scratchContent",
                props: { scratchUrl: "https://scratch.mit.edu/projects/1204906705/embed", imageUrl: RaumschiffWhile }
            },
            {
                type: "subTasks",
                props: {
                    items: [
                        "b) Beschreibe mit eigenen Worten, was im Projekt passiert. Beziehe dich dafür auf Fallunterschiedungen und Schleifen.",
                    ],
                },
            },
            {
                type: "answer",
                props: {},
            },
            {
                type: "subTasks",
                props: {
                    items: [
                        "Dir ist wahrscheinlich aufgefallen, dass man nicht aufhören kann zu fliegen. Dies sollst du nun ändern.",
                        "c) Füge eine weitere Fallunterscheidung ein. Wenn 'x' gedrückt wird, soll 'alles gestoppt' werden.",
                    ],
                },
            },
            {
                type: "editor",
                props: {},
            },

        ],
    },
];

</script>

<template>
    <ChapterShell title="Kontrollstrukturen"
        description="Am Ende dieses Arbeitsheftes wirst du dein eigenes Flappy Bird Spiel programmieren. Damit du das schaffst, lernst du jetzt Kontrollstrukturen kennen, die dir helfen werden effektiv zu programmieren."
        :content="content" />
</template>
