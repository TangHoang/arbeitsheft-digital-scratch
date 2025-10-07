<template>
    <div class="roehre">

        <InfoCard variant="orange" :title="'Kapitel 2: Röhre'" :showTime="'🕑 30-35 Minuten'">
            <p>In diesem Kapitel programmieren wir die bewegenden Röhren!</p>
        </InfoCard>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[rohr_bühne, rohr_img]" :height="'200px'" />
                <StudentAnswer answerId="roehre/aufgabe1" :hints="content.pr.hints" :taskType="'vermuten'"
                    @revealScratch="showDemo = true" />
                <ScratchDemo v-if="showDemo" :scratchUrl="'https://scratch.mit.edu/projects/1216517561/embed'" />
                <HintWithSolution class="solution" />
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" answerId="roehre/aufgabe2" :solution="content.investigate.solution"
                        :hints="content.investigate.hints" />
                    <ScratchImage :imageUrls="[rohr_img]" :height="'200px'" />
                </div>
            </template>
        </Investigate>

        <Modify>
            <template #default>
                <h3> {{ content.modify.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container exercise-container">
                        <p class="comment">{{ content.modify.kommentar_vorbereitung }}</p>
                        <SubtaskList :items="content.modify.vorbereitung" />
                        <p class="comment">{{ content.modify.kommentar_a }}</p>
                        <SubtaskList :items="content.modify.aufgabe_a" :start="2" />
                        <OpenIFrameButton :projectUrl="SprungProjectUrl" :type="'editor'" :buttonTitle="'Editor Öffnen'"
                            :exercises="content.modify.aufgabe_a" :hints="content.modify.hints" />
                        <PopUp :projectUrl="RohrProjectTestUrl"
                            :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'" :type="'test'"
                            :buttonTitle="'Testen'" />
                        <p class="hinweis">⚠️ <Strong>Wichtig:</Strong> Speichere dein Projekt auf deinem PC mit dem
                            Namen 'FlappyBird_v2.sb3'.
                        </p>
                    </div>
                    <div class="vertical-container">
                        <ScratchImage :imageUrls="[rohr_img]" :height="'200px'" />
                        <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213178249/embed'" />

                    </div>
                </div>
            </template>
        </Modify>

        <StarRating :max="5" />


        <InfoCard variant="purple" :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Bewegung von Sprites: </strong> Du hast gesehen, wie man Sprites auf der Bühne
                        automatisch
                        bewegt.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
                <li class="info-row">

                    <span class="info-text">
                        <strong>Zufallszahlen: </strong> Wir haben Zufallszahlen verwendet, um die Höhe der Röhren
                        dynamisch
                        anzupassen.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
            </ul>
        </InfoCard>
    </div>
</template>

<script setup>
import { ref } from "vue"
import InfoCard from "../components/InfoCard.vue"
import StarRating from "../components/StarRating.vue"

import rohr_img from "@/assets/roehre_assets/rohr_predict.png"
import rohr_bühne from "@/assets/roehre_assets/rohr_bühne.png"
import OpenIFrameButton from "../components/OpenIFrameButton.vue"


import PredictAndRun from "../components/Primm_components/PredictAndRun.vue"
import Investigate from "../components/Primm_components/Investigate.vue"
import Modify from "../components/Primm_components/Modify.vue"
import Make from "../components/Primm_components/Make.vue"

import SubtaskList from "../components/SubtaskList.vue"
import ScratchImage from "../components/ScratchImage.vue"
import StudentAnswer from "../components/StudentAnswer.vue"
import ScratchDemo from "../components/ScratchDemo.vue"
import PopUp from "../components/PopUp.vue"
import HintWithSolution from "../components/HintWithSolution.vue"

const RohrProjectUrl = new URL("@/assets/roehre_assets/Aufgabe_Röhre_PRIMM.sb3", import.meta.url).href;
const RohrProjectTestUrl = new URL("@/assets/whisker_tests/röhre.js", import.meta.url).href;
const showDemo = ref(false)

const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["Stelle eine Vermutung über die Funktionalität des Codes auf."],
        aufgabe_b: ["Führe nun das nebenstehende Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen."],
        aufgabe_c: ["Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
        hints: [
            {
                title: "Hinweis 1",
                content: "Schau dir den Block <code> wiederhole fortlaufend </code> genau an. Welche Variable wird fortlaufend verändert?"
            },
            {
                title: "Hinweis 2",
                content: "Wenn <code> x </code> verringert wird, bewegt sich die Figur in welche Richtung?"
            },

        ],


    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["Erkläre die Funktion des Codes.",
            "Welcher Block ist für die Bewegung nach links zuständig?",
            "Welche Bedingung muss erfüllt werden, damit die Röhre wieder auf der rechten Seite auftaucht?",
        ],
        aufgabe_b: [
            'Öffne deine Datei "FlappyBird_v1.sb3" im Editor und übertrage den Code.'
        ],
        hints: [{

            title: "Hinweis 1",
            content: "Betrachte <code> falls x-Position < -260 </code>. Zu welcher Position springt die Figur, wenn die Bedingung eintritt?"

        }],
        solution: `
  <p><b>Lösung:</b></p>
  <ol>
    <li>Im Block <code>wiederhole fortlaufend</code> wird die <code>x</code>-Position in jedem Schritt um einen <i>konstanten</i> negativen Wert verringert (hier: <code>ändere x um -5</code>).</li>
    <li>Dadurch bewegt sich das Rohr <b>gleichmäßig nach links</b>.</li>
    <li>Sobald <code>x &lt; -260</code> erreicht ist, springt das Rohr wieder auf eine <b>rechte Startposition</b> (z.&nbsp;B. <code>setze x auf 260</code>), damit es erneut von rechts ins Bild fährt.</li>
  </ol>
  <p><b>Ergebnis:</b> Ein endloser „Laufband“-Effekt: Das Rohr scrollt konstant nach links und wird nach Verlassen des linken Randes rechts neu platziert.</p>
`
    },
    modify: {
        title: "Aufgabe 3",
        kommentar_vorbereitung: "Zuerst eine Vorbereitung:",
        vorbereitung: ['Öffne deine Datei "FlappyBird_v1.sb3" im Editor und übertrage den Code rechts in Röhre1 und Röhre2.',
        ],
        kommentar_a: "In Flappy Bird verändern sich die Höhen der Röhre zufällig. Das wollen wir auch. Nun bist du an der Reihe diesen Code anzupassen. ",
        aufgabe_a: [
            'Erstelle eine Variable mit dem Namen "Zufallszahl".',
            'Setze deine Variable Zufallszahl auf eine Zufallszahl zwischen -25 und 50.',
            'Verändere den Code so, dass die neue Position nicht (250, 0), sondern (250, Zufallszahl) ist.',
            'Platziere das zweite Rohr im Abstand von genau 250 Pixeln zum ersten Rohr, wenn die grüne Flagge gedrückt wird!'
        ],
        hints: [{ content: 'a) Verwende den Block "setze <<Variable>> auf <<Wert>>"" im Abschnitt Variablen und setze ihn ganz am Anfang der Schleife.' },
        { content: 'b) Verwende den Block "Zufallszahl von <<x>> bis <<y>>" im Abschnitt Operatoren, um den Wert von der Variable "Zufallszahl" zu ändern.' },
        { content: 'c) Ziehe deine Variable "Zufallszahl" in die y-Komponente.' },
        { content: 'd) Verändere den Block, der unter dem Event "Wenn grüne Flagge angeklickt wird" ist.' }
        ]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["a)	Implementiere eine zweite Röhre, die sich mit gleicher Geschwindigkeit mit einem Abstand von 250 Pixeln zur ersten Röhre nach links bewegt."]
    }
}
</script>

<style scoped>
.roehre {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 90%;
}

.vertical-container {
    display: flex;
    flex-flow: column;
    height: 100%;
    min-width: 45%;
}

.exercise-container {
    align-items: left;
    margin-right: 2rem;
    min-width: 55%;
}


.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: left;
    padding-bottom: 1rem;
}

h3 {
    color: #b85d00;
    font-weight: 500;

}

.comment {
    padding: 1rem 1rem;
    background-color: bisque;
    border-radius: 16px;
    font-weight: 600;
}

.solution {
    padding: 1rem 1rem;
}
</style>