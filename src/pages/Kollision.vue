<template>
    <div class="springen">

        <InfoCard variant="orange" :title="'Kapitel 3: Kollision'" :showTime="'🕑 30-35 Minuten'"
            aufgabenID="kollision/einleitung">
            <p>Jetzt wollen wir die vorherigen zwei Kapitel sinnvoll kombinieren. Wenn dein Vogel ein Rohr berüht, soll
                das Spiel beendet werden!</p>
        </InfoCard>

        <PredictAndRun aufgabenID="kollision/aufgabe1">
            <h3> Aufgabe 1</h3>
            <SubtaskList :items="content.pr.aufgabe_a" :nostart="true" />
            <div class="horizontal-container">
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213184253/embed'" />
                <div class="vertical-container">
                    <p>Wie du erkennst, ist dieses Beispiel schon eine spielbare Version von Flappy-Bird. Wir sind kurz
                        vor
                        dem Ende! </p>
                    <p>Was uns noch fehlt, ist die Kollision zu implementieren und genau dies werden wir nun in der
                        nächsten Aufgabe machen.</p>
                </div>
            </div>

        </PredictAndRun>

        <Make aufgabenID="kollision/aufgabe2">
            <h3>Aufgabe 2</h3>
            <SubtaskList :items="content.pr.aufgabe_2" :nostart="true" />
            <SubtaskList :items="content.pr.aufgabe_b" />

            <OpenIFrameButton :projectUrl="SprungProjectUrl" :type="'editor'" :buttonTitle="'Editor Öffnen'"
                :exercises="content.pr.aufgabe_b" :exerciseId="'kollision/aufgabe2'" :hints="content.modify.hints" />
            <PopUp :projectUrl="KollisionProjectTestUrl" :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'"
                :buttonTitle="'Test'" :type="'test'" />
        </Make>

        <StarRating :max="5" />

        <InfoCard variant="orange" :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Skript beenden: </strong> Du hast gesehen, wie man ein Skript mit Hilfe von 'Stoppe
                        alles'
                        beendet.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
                <li class="info-row">

                    <span class="info-text">
                        <strong>Logik: </strong> Wir haben den 'oder' - Operator verwendet, um zwei Fälle
                        gleichzeitig
                        abzudecken.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text">
                        <strong>Kollision: </strong> Du hast selbst die Kollision mit der Decke und dem Boden
                        implementiert.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
            </ul>
        </InfoCard>

    </div>
</template>

<script setup>
import InfoCard from "../components/InfoCard.vue"
import StarRating from "../components/StarRating.vue"

import kollision_img from "@/assets/kollision_assets/kollision.png"
import kollision_assets from "@/assets/kollision_assets/kollision_sprite.png"
import kollision_gif from "@/assets/kollision_assets/kollision_gif.gif"
import kollision_bühne from "@/assets/kollision_assets/kollision_bühne.png"
import kollision_rand_gif from "@/assets/kollision_assets/kollision_rand.gif"

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
import OpenIFrameButton from "../components/OpenIFrameButton.vue"

const KollisionProjectUrl = new URL("@/assets/kollision_assets/Aufgabe_Kollision_PRIMM.sb3", import.meta.url).href;
const KollisionProjectTestUrl = new URL("@/assets/whisker_tests/kollision.js", import.meta.url).href;


const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["Starte das Projekt und probiere es aus.",
        ],
        aufgabe_2: ['Implementiere folgende Aspekte: '],
        aufgabe_b: ['Wenn die Figur Röhre1 oder Röhre2 berührt, soll alles gestoppt werden.',
            'Wenn die Figur den Boden oder die Decke berührt, soll alles gestoppt werden.',
            'Zusatz: Implementiere Soundeffekte für Kollisionen.'],
        hints: ["a)+b) Wähle deinen Vogel aus und suche im Abschnitt fühlen nach den geeigneten Blöcken.", "a)+b) Suche im Abschnitt Steuerung nach einem geeigneten Block, um das Skript zu stoppen."],
        aufgabe_c: ["c) Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["a) Erkläre die Funktionalität des Codes.", "Was bedeutet der lange grüne Block im 'falls'-Block? "]
    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["a) Übertrage zuerst den Programmcode im Bild in dein Projekt.", "b) Verändere den gegebenen Programmcode! Wenn das Rohr berührt wird, soll dein Bird auf den Boden fallen!"],
        hints: [
            {
                content: 'Du findest einen geeigneten Block im Abschnitt <b>Fühlen</>.'
            },
            {
                content: 'Suche im Abschnitt <b>Steuerung</b> nach einem geeigneten Block, um das Skript zu stoppen.'
            }
        ]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["a) Implementiere die Kollisionslogik mit dem Boden und der Decke.", "b) Implementiere Soundeffekte für Kollision mit Rohr und Boden."]
    }
}
</script>

<style scoped>
.springen {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 90%;
}

.task-popup-wrapper {
    min-width: 60%;
}

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: left;
    padding-bottom: 1rem;
    align-items: center;
}

.horizontal-container p {
    padding-left: 1rem;
    width: 70%;
}

h3 {
    color: #b85d00;
    font-weight: 500;

}

.hinweis {
    padding-left: 1rem;
}
</style>