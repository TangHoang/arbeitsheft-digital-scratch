<template>
    <div class="springen">

        <InfoCardOrange :title="'Kapitel 1: Springen'">
            <p>Nach diesem Kapitel wird dein Vogel springen können!</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[sprung_bühne, sprung_img]" :height="'200px'" />
                <StudentAnswer answerId="springen/aufgabe1" :height="'200px'" />
                <SubtaskList :items="content.pr.aufgabe_b" />
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213169461/embed'" />
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" answerId="springen/aufgabe2" />
                    <ScratchImage :imageUrls="[sprung_img]" :height="'200px'" />
                </div>
            </template>
        </Investigate>

        <Modify>
            <template #default>
                <h3> {{ content.modify.title }}</h3>
                <SubtaskList :items="content.modify.aufgabe_a" />
                <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                    :floating="false" :buttonTitle="'Editor Öffnen'" />
            </template>
        </Modify>

        <Make>
            <template #default>
                <h3> {{ content.make.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container">
                        <SubtaskList :items="content.make.aufgabe_a" />
                        <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                            :floating="false" :buttonTitle="'Editor öffnen'" :type="'editor'" />
                        <PopUp :projectUrl="SprungProjectTestUrl"
                            :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'" :buttonTitle="'Testen'"
                            :type="'test'" />
                    </div>
                    <ScratchGif :imageUrls="[sprung_gif, sprung_bühne]" :height="'200px'" />
                </div>

                <p class="disclaimer">
                    <strong>Wichtig!</strong> Speichere deinen aktuellen Stand auf deinem PC. Im
                    nächsten Kapitel werden
                    wir damit weiter arbeiten!
                </p>
            </template>
        </Make>

        <InfoCardPurple :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Schleifen: </strong> Du hast Schleifen korrekt im Code identifiziert.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        <strong>Bedingungen: </strong> Du hast gesehen, dass wir eine Bedingung für den Sprung haben,
                        und zwar
                        der Tastendruck der Leertaste.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        <strong>Kostüme: </strong> Du hast selbst das Ändern des Kostüms beim Drücken der Leertaste
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
import InfoCardWhite from "../components/InfoCardWhite.vue"
import InfoCardPurple from "../components/InfoCardPurple.vue"
import sprung_img from "@/assets/sprung_assets/sprung.png"
import sprung_bühne from "@/assets/sprung_assets/sprung_bühne.png"
import sprung_gif from "@/assets/sprung_assets/sprung_costume_change.gif"

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

const SprungProjectUrl = new URL("@/assets/sprung_assets/Aufgabe_Sprung_PRIMM.sb3", import.meta.url).href;
const SprungProjectTestUrl = new URL("@/assets/whisker_tests/sprung.js", import.meta.url).href;


const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["a) Stelle eine Vermutung über die Funktionalität des Codes auf.", "Bei welcher Taste wird das Programm reagieren?", "Wie verhält sich die Katze, wenn du nichts machst?"],
        aufgabe_b: ["b) Führe nun das nebenstehende Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen.", "c) Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1213169461/embed",
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["a) Erkläre die Funktion des Codes. Beziehe dich dabei auf die einzelnen Blöcke."]
    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["a) Passe den Code so an, dass er höher springt und schneller fällt.", "Hinweis: Lade dafür das Projekt zuerst auf deinem PC herunter und lade es dann im Editor hoch."]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["Immer, wenn der Vogel springt, soll ... ", "a) ... der Vogel sein Kostüm ändern.", "b) ...ein Soundeffekt erklingen "]
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

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: left;
    padding-bottom: 1rem;
}

.vertical-container {
    height: 100%;
    min-width: 50%;
    max-width: 100%;
}

.disclaimer {
    padding-top: 1rem;
}

h3 {
    color: #b85d00;

}
</style>