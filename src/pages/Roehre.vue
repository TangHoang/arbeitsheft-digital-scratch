<template>
    <div class="roehre">

        <InfoCardOrange :title="'Kapitel 2: Röhre'">
            <p>In diesem Kapitel programmieren wir die bewegenden Röhren!</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[rohr_bühne, rohr_img]" :height="'200px'" />
                <StudentAnswer answerId="roehre/aufgabe1" />

                <SubtaskList :items="content.pr.aufgabe_b" />
                <!--<ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1206376368/embed'" />-->
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1216517561/embed'" />
                <SubtaskList :items="content.pr.aufgabe_c" />

            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" answerId="roehre/aufgabe2" />
                    <ScratchImage :imageUrls="[rohr_img]" :height="'200px'" />
                </div>
            </template>
        </Investigate>

        <Modify>
            <template #default>
                <h3> {{ content.modify.title }}</h3>
                <div class="horizontal-container">
                    <div>
                        <SubtaskList :items="content.modify.aufgabe_a" />
                        <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                            :floating="false" :buttonTitle="'Editor Öffnen'" :exercises="content.modify.aufgabe_a"
                            :hints="content.modify.hints" />
                        <PopUp :projectUrl="RohrProjectTestUrl"
                            :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'" :type="'test'"
                            :buttonTitle="'Testen'" />
                    </div>
                    <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213178249/embed'" />
                </div>
            </template>
        </Modify>

        <InfoCardPurple :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Bewegung von Sprites: </strong> Du hast gesehen, wie man Sprites auf der Bühne
                        automatisch
                        bewegt.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
                <li class="info-row">

                    <span class="info-text">
                        <strong>Zufallszahlen: </strong> Wir haben Zufallszahlen verwendet, um die Höhe der Röhren
                        dynamisch
                        anzupassen.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
            </ul>
        </InfoCardPurple>
    </div>
</template>

<script setup>
import InfoCardOrange from "../components/InfoCardOrange.vue"
import InfoCardPurple from "../components/InfoCardPurple.vue"
import rohr_img from "@/assets/roehre_assets/rohr_predict.png"
import rohr_bühne from "@/assets/roehre_assets/rohr_bühne.png"
import rohr_gif from "@/assets/roehre_assets/röhre.gif"
import rohr_lösung_bühne from "@/assets/roehre_assets/rohr_lösung_bühne.png"

import PredictAndRun from "../components/Primm_components/PredictAndRun.vue"
import Investigate from "../components/Primm_components/Investigate.vue"
import Modify from "../components/Primm_components/Modify.vue"
import Make from "../components/Primm_components/Make.vue"

import SubtaskList from "../components/SubtaskList.vue"
import ScratchImage from "../components/ScratchImage.vue"
import ScratchGif from "../components/ScratchGif.vue"
import StudentAnswer from "../components/StudentAnswer.vue"
import ScratchDemo from "../components/ScratchDemo.vue"
import PopUp from "../components/PopUp.vue"

const RohrProjectUrl = new URL("@/assets/roehre_assets/Aufgabe_Röhre_PRIMM.sb3", import.meta.url).href;
const RohrProjectTestUrl = new URL("@/assets/whisker_tests/röhre.js", import.meta.url).href;

const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["a) Stelle eine Vermutung über die Funktionalität des Codes auf."],
        aufgabe_b: ["b) Führe nun das nebenstehende Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen."],
        aufgabe_c: ["c) Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["a) Erkläre die Funktion des Codes.", "Welcher Block ist für die Bewegung nach links zuständig?", "Welcher Bedingung muss erfüllt werden, damit die Röhre wieder auf der rechten Seite auftaucht?"]
    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["In Flappy Bird verändern sich die Höhen (y-Werte) der Röhre zufällig.",
            'a) Erstelle eine Variable mit dem Namen "Zufallszahl".',
            'b) Setze deine Variable Zufallszahl auf eine Zufallszahl zwischen -25 und 50.',
            'c) Gehe dann nicht zum Punkt (250, 0), sondern zu (250, Zufallszahl).',
            'd) Dupliziere dein Rohr und platziere es mit einem Abstand von genau 250 Pixeln zum ersten Rohr, wenn die grüne Flagge gedrückt wird!'
        ],
        hints: ['b) Verwende den Block "setze <<Variable>> auf <<Wert>>"" im Abschnitt Variablen und setze ihn ganz am Anfang der Schleife.',
            'b) Verwende den Block "Zufallszahl von <<x>> bis <<y>>" im Abschnitt Operatoren, um den Wert von der Variable "Zufallszahl" zu ändern.',
            'c) Ziehe deine Variable "Zufallszahl" in die y-Komponente.',
            'd) Verändere den Block, der unter dem Event "Wenn grüne Flagge angeklickt wird" ist.'
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
    height: 100%;
    min-width: 50%;
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
</style>