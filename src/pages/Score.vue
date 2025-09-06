<template>
    <div class="springen">

        <InfoCardOrange :title="'Kapitel 3: Punktestand'">
            <p>Nachdem dein Vogel eine Röhre passiert, soll die Punktzahl erhöht werden. Dies werden wir nun
                implementieren.</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'180px'" />
                    <ScratchImage :imageUrls="[score_img, score_bühne]" :height="'200px'" />
                </div>
                <SubtaskList :items="content.pr.aufgabe_b" />
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213183568/embed'" />
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />

                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" />
                    <ScratchImage :imageUrls="[score_img]" :height="'200px'" />
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
                            :floating="false" :buttonTitle="'Editor Öffnen'" />
                    </div>
                    <ScratchImage :imageUrls="[score_img]" :height="'200px'" />

                </div>
            </template>
        </Modify>

        <Make>
            <template #default>
                <h3> {{ content.make.title }}</h3>
                <SubtaskList :items="content.make.aufgabe_a" />
                <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                    :floating="false" :buttonTitle="'Editor Öffnen'" />
            </template>
        </Make>

    </div>
</template>

<script setup>
import InfoCardOrange from "../components/InfoCardOrange.vue"
import score_img from "@/assets/score_assets/score.png"
import score_bühne from "@/assets/score_assets/score_bühne.png"

import PredictAndRun from "../components/Primm_components/PredictAndRun.vue"
import Investigate from "../components/Primm_components/Investigate.vue"
import Modify from "../components/Primm_components/Modify.vue"
import Make from "../components/Primm_components/Make.vue"

import SubtaskList from "../components/SubtaskList.vue"
import ScratchImage from "../components/ScratchImage.vue"
import StudentAnswer from "../components/StudentAnswer.vue"
import ScratchDemo from "../components/ScratchDemo.vue"
import PopUp from "../components/PopUp.vue"
import ScratchGif from "../components/ScratchGif.vue"

const SprungProjectUrl = new URL("@/assets/roehre_assets/Aufgabe_Röhre_PRIMM.sb3", import.meta.url).href;


const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["a) Stelle eine Vermutung über die Funktionalität des Codes auf. Welchen Sinn hat der neue Sprite 'Crystal' ?."],
        aufgabe_b: ["b) Führe nun Programm unten aus, indem du die grüne Flagge anklickst. Überprüfe deine Vermutungen.", "c) Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["a) Erkläre die Funktionalität des Codes.", "Was ist wohl der Sinn des 'Warte'-Blocks ...? "]
    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["a) Übertrage zuerst den Programmcode im Bild in dein Projekt.",
            "b) Es fehlt noch Röhre2! Kopiere nun den gegebenen Code, um die zweite Röhre miteinzubeziehen.",
            "c) Verändere! Der Sprite, der bei Berührung mit der Röhre den Counter erhöht, sollst du so unsichtbar wie möglich machen."
        ]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["a) Implementiere eine Kombo-Logik. Ab 10 Punkten soll sich der Score, immer um 2 erhöhen!", "b) Implementiere Soundeffekte für einen erfolgreichen Durchflug."]
    }
}
</script>

<style>
.springen {
    width: 90%;
}

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: left;
    align-items: center;
    padding-bottom: 1rem;
}
</style>