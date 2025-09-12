<template>
    <div class="springen">

        <InfoCardOrange :title="'Kapitel 3: Kollision'">
            <p>Jetzt wollen wir die vorherigen zwei Kapitel sinnvoll kombinieren. Wenn dein Vogel ein Rohr berüht, soll
                das Spiel beendet werden!</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[kollision_img, kollision_assets]" :height="'150px'" />
                <StudentAnswer :height="'180px'" answerId="kollision/aufgabe1" />
                <SubtaskList :items="content.pr.aufgabe_b" />
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213183568/embed'" />
                <SubtaskList :items="content.pr.aufgabe_c" />

            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />

                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" answerId="kollision/aufgabe2" />
                    <ScratchImage :imageUrls="[kollision_img]" :height="'200px'" />
                </div>

            </template>
        </Investigate>

        <Modify>
            <template #default>
                <h3> {{ content.modify.title }}</h3>
                <div class="horizontal-container">
                    <div class="task-popup-wrapper">
                        <SubtaskList :items="content.modify.aufgabe_a" />
                        <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                            :floating="false" :buttonTitle="'Editor Öffnen'" />
                    </div>
                    <ScratchGif :imageUrls="[kollision_gif, kollision_bühne]" :height="'150px'" />

                </div>
            </template>
        </Modify>

        <Make>
            <template #default>
                <h3> {{ content.make.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container">
                        <SubtaskList :items="content.make.aufgabe_a" />
                        <PopUp :projectUrl="KollisionProjectUrl"
                            :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'" :floating="false"
                            :buttonTitle="'Editor Öffnen'" />
                        <PopUp :projectUrl="KollisionProjectTestUrl"
                            :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'" :buttonTitle="'Test'"
                            :type="'test'" />
                    </div>
                    <ScratchGif :imageUrls="[kollision_rand_gif, kollision_bühne]" :height="'200px'" />
                </div>

            </template>
        </Make>

        <InfoCardPurple :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Skript beenden: </strong> Du hast gesehen, wie man ein Skript mit Hilfe von 'Stoppe
                        alles'
                        beendet.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
                <li class="info-row">

                    <span class="info-text">
                        <strong>Logik: </strong> Wir haben den 'oder' - Operator verwendet, um zwei Fälle gleichzeitig
                        abzudecken.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text">
                        <strong>Kollision: </strong> Du hast selbst die Kollision mit der Decke und dem Boden
                        implementiert.
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

const KollisionProjectUrl = new URL("@/assets/kollision_assets/Aufgabe_Kollision_PRIMM.sb3", import.meta.url).href;
const KollisionProjectTestUrl = new URL("@/assets/whisker_tests/kollision.js", import.meta.url).href;


const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["a) Stelle eine Vermutung über die Funktionalität des Codes auf. Was passiert, wenn unsere Katze ein Rohr berührt?"],
        aufgabe_b: ["b) Führe nun das Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen."],
        aufgabe_c: ["c) Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["a) Erkläre die Funktionalität des Codes.", "Was bedeutet der lange grüne Block im 'falls'-Block? "]
    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["a) Übertrage zuerst den Programmcode im Bild in dein Projekt.", "b) Verändere den gegebenen Programmcode! Wenn das Rohr berührt wird, soll dein Bird auf den Boden fallen!"]
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
}

h3 {
    color: #b85d00;
    font-weight: 500;

}
</style>