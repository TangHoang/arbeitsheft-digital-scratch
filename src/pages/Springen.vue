<template>
    <div class="springen">

        <InfoCardOrange :title="'Kapitel 1: Springen'">
            <p>Nach diesem Kapitel wird dein Vogel springen können!</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[sprung_bühne, sprung_img]" />
                <StudentAnswer />
                <div class="horizontal-container">
                    <SubtaskList :items="content.pr.aufgabe_b" />
                    <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213169461/embed'" />
                </div>
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'300px'" />
                    <ScratchImage :imageUrls="[sprung_img]" />
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
                <SubtaskList :items="content.make.aufgabe_a" />
                <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                    :floating="false" :buttonTitle="'Editor Öffnen'" />
            </template>
        </Make>

    </div>
</template>

<script setup>
import InfoCardOrange from "../components/InfoCardOrange.vue"
import sprung_img from "@/assets/sprung_assets/sprung.png"
import sprung_bühne from "@/assets/sprung_assets/sprung_bühne.png"

import PredictAndRun from "../components/PredictAndRun.vue"
import Investigate from "../components/Investigate.vue"
import Modify from "../components/Modify.vue"
import Make from "../components/Make.vue"

import SubtaskList from "../components/SubtaskList.vue"
import ScratchImage from "../components/ScratchImage.vue"
import StudentAnswer from "../components/StudentAnswer.vue"
import ScratchDemo from "../components/ScratchDemo.vue"
import PopUp from "../components/PopUp.vue"

const SprungProjectUrl = new URL("@/assets/sprung_assets/Aufgabe_Sprung_PRIMM.sb3", import.meta.url).href;


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
        aufgabe_a: ["Immer, wenn der Vogel springt, soll ... ", "a) ein Soundeffekt erklingen", "b) Der Vogel sein Kostüm ändern."]
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
    padding-bottom: 1rem;
}
</style>