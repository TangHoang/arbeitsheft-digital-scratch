<template>
    <ChapterShell title="Variablen"
        description="Variablen kennst du schon aus dem Mathematikunterricht. Dort stehen sie oft für eine unbekannte Zahl, wie z. B. in x + 3 = 5. 
            In Scratch funktionieren Variablen ganz ähnlich, aber sie können noch viel mehr.  
            Mit Variablen, wird es dir leichter fallen, komplexere Programmierungen zu erstellen und interessante Spielideen umzusetzen. "
        :content="content" />
</template>

<script setup>
import ChapterShell from '../components/ChapterShell.vue';
const content = [
    {
        sectionTitle: "Ein Beispiel",
        title: "Aufgabe 1",
        description:
            "Was kann man mit Variablen machen?",
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
        ]
    }
]
</script>