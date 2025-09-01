<template>
    <ChapterShell title="Variablen"
        description="Variablen kennst du schon aus dem Mathematikunterricht. Dort stehen sie oft für eine unbekannte Zahl, wie z. B. in x + 3 = 5. 
            In Scratch funktionieren Variablen ganz ähnlich, aber sie können noch viel mehr.  
            Mit Variablen, wird es dir leichter fallen, komplexere Programmierungen zu erstellen und interessante Spielideen umzusetzen. "
        :content="content" />
</template>

<script setup>
import ChapterShell from "@/components/ChapterShell.vue";
import RaumfschiffVar from "@/assets/raumschiff_code_variable.png"

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
            {
                type: "scratchContent", props: { scratchUrl: "https://scratch.mit.edu/projects/1200064022/embed", imageUrl: RaumfschiffVar }
            },
            {
                type: "subTasks",
                props: { items: ["b) Beschreibe das Verhalten der Variablen vor und während der Schleife."] },
            },
            {
                type: "answer",
                props: {}
            },
            {
                type: "subTasks",
                props: { items: ["In der folgenden Aufgabe wollen wir dem Variablen benutzen, um spielerisch die Anzahl der besuchten Planeten der Rakete zu zählen. Betrachte dafür folgendes Beispiel:"] }
            },
            {
                type: "scratchContent", props: { scratchUrl: "", imageUrl: "" }
            },
        ],
    }
]
</script>