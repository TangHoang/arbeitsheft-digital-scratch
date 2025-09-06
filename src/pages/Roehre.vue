<template>
    <div class="springen">

        <InfoCardOrange :title="'Kapitel 2: Röhre'">
            <p>In diesem Kapitel programmieren wir die bewegenden Röhren!</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[rohr_bühne, rohr_img]" :height="'200px'" />
                <StudentAnswer />

                <SubtaskList :items="content.pr.aufgabe_b" />
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1206376368/embed'" />
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" />
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
                            :floating="false" :buttonTitle="'Editor Öffnen'" />
                    </div>
                    <ScratchImage :imageUrls="[rohr_img]" :height="'200px'" />
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
import rohr_img from "@/assets/roehre_assets/rohr.png"
import rohr_bühne from "@/assets/roehre_assets/rohr_bühne.png"

import PredictAndRun from "../components/Primm_components/PredictAndRun.vue"
import Investigate from "../components/Primm_components/Investigate.vue"
import Modify from "../components/Primm_components/Modify.vue"
import Make from "../components/Primm_components/Make.vue"

import SubtaskList from "../components/SubtaskList.vue"
import ScratchImage from "../components/ScratchImage.vue"
import StudentAnswer from "../components/StudentAnswer.vue"
import ScratchDemo from "../components/ScratchDemo.vue"
import PopUp from "../components/PopUp.vue"

const SprungProjectUrl = new URL("@/assets/roehre_assets/Aufgabe_Röhre_PRIMM.sb3", import.meta.url).href;


const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["a) Stelle eine Vermutung über die Funktionalität des Codes auf."],
        aufgabe_b: ["b) Führe nun das nebenstehende Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen.", "c) Waren deine Vermutungen richtig? :-)"],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["a) Erkläre die Funktion des Codes. Beziehe dich dabei auf die einzelnen Blöcke.", "Welcher Block ist für die Bewegung nach links zuständig? Wozu braucht man den Block 'Zufallszahl' ?"]
    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["a) Übertrage zuerst den Programmcode im Bild in dein Projekt.", "b) Passe den Programmcode so an, dass sich die Röhren schneller bewegen und die Röhren eine größere Varianz in der Höhe haben."]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["a)	Implementiere eine zweite Röhre, die sich mit gleicher Geschwindigkeit mit einem Abstand von 250 Pixeln zur ersten Röhre nach links bewegt."]
    }
}
</script>

<style>
.springen {
    width: 90%;
}

.vertical-container {
    min-width: 60%;
}


.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    padding-bottom: 1rem;
}
</style>