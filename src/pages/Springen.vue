<template>
    <div class="springen">

        <InfoCardOrange :title="'Kapitel 1: Springen'">
            <p>Nach diesem Kapitel wird dein Vogel springen können!</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <ScratchImage :imageUrls="[sprung_bühne, sprung_predict]" :height="'200px'" />
                <StudentAnswer answerId="springen/aufgabe1" :height="'200px'" :hints="content.pr.hints"
                    :taskType="'vermuten'" @revealScratch="showDemo = true" />
                <ScratchDemo v-if="showDemo" :scratchUrl="'https://scratch.mit.edu/projects/1216552925/embed'" />
                <!-- <HintWithSolution :solution="content.pr.solution" class="solution" />-->
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container">
                        <SubtaskList :items="content.investigate.aufgabe_a" />
                        <SubtaskList :items="content.investigate.aufgabe_b" :start="2" />
                    </div>
                </div>
                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" answerId="springen/aufgabe2" :task="content.pr.aufgabe_a"
                        :scratchJson="aufgabe_sprung_json" :hints="content.investigate.hints"
                        :solution="content.investigate.solution" />
                    <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213169461/embed'" />
                </div>
            </template>
        </Investigate>

        <Modify>
            <template #default>
                <h3> {{ content.modify.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container">
                        <SubtaskList :items="content.modify.aufgabe_a" />
                        <PopUp :projectUrl="SprungProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                            :floating="false" :buttonTitle="'Editor Öffnen'" :type="'editor'"
                            :exercises="content.modify.aufgabe_a" :hints="content.modify.hints" />
                        <PopUp :projectUrl="SprungProjectTestUrl"
                            :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'" :buttonTitle="'Testen'"
                            :type="'test'" @test-status="onTestStatus" />
                        <p v-if="testResult?.allPassed">
                            ✅ Alle Tests bestanden ({{ testResult.passedCount }} / {{ testResult.passedCount +
                                testResult.failedCount }})
                        </p>
                        <p v-else-if="testResult?.allPassed == false">
                            ❌ ({{ testResult.failedCount }}/ {{ testResult.passedCount +
                                testResult.failedCount }}) Tests fehlgeschlagen
                        </p>
                        <p class="hinweis">⚠️ <Strong>Wichtig:</Strong> Speichere dein Projekt auf deinem PC mit dem
                            Namen 'FlappyBird_v1.sb3'.
                        </p>
                    </div>
                    <ScratchImage :imageUrls="[sprung_predict]" :height="'200px'" />

                </div>

            </template>
        </Modify>

        <InfoCardPurple :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Code: </strong> Du hast Vermutung über Code gemacht und überprüft.
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
                        <strong>Sprunglogik: </strong> Du hast selbst die Gravitation implementiert!
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
            </ul>
        </InfoCardPurple>
    </div>
</template>

<script setup>
import { ref } from "vue"

import InfoCardOrange from "../components/InfoCardOrange.vue"
import InfoCardWhite from "../components/InfoCardWhite.vue"
import InfoCardPurple from "../components/InfoCardPurple.vue"

import sprung_img from "@/assets/sprung_assets/sprung.png"
import sprung_bühne from "@/assets/sprung_assets/sprung_bühne.png"
import sprung_gif from "@/assets/sprung_assets/sprung_costume_change.gif"
import sprung_predict from '@/assets/sprung_assets/sprung_predict.png'

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
import HintWithSolution from "../components/HintWithSolution.vue"

import aufgabe_sprung_json from '@/assets/sprung_assets/aufgabe_sprung.json'

const SprungProjectUrl = new URL("@/assets/sprung_assets/Aufgabe_Sprung_PRIMM.sb3", import.meta.url).href;
const SprungProjectTestUrl = new URL("@/assets/whisker_tests/sprung.js", import.meta.url).href;

const testResult = ref(null);
const showDemo = ref(false);

const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["Stelle eine Vermutung über die Funktionalität des Codes auf.", "Bei welcher Taste wird das Programm reagieren?", "Wie verhält sich die Katze, wenn du nichts machst?"],
        aufgabe_b: ["Führe nun das untenstehende Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen.",],
        demo_link: "https://scratch.mit.edu/projects/1213169461/embed",
        hints: [{ content: 'Untersuche den FALLS ... DANN ... Block genauer!' }, { content: 'Achte auf alle blauen Blöcke!' }],
        solution: 'Der Vogel springt beim Drücken der Leertaste nach oben. Wenn nichts gedrückt wird, fällt er langsam herunter.',
    },
    investigate: {
        title: "Aufgabe 2",
        kommentar_aufgabe_a: "Die Figur springt nicht, wie in der Flappy-Bird Demo am Anfang des Arbeitsheftes. Es fehlt die 'Gravitation'!",
        aufgabe_a: ["Vergleiche die Demo in Aufgabe 1 und Aufgabe 2, was fällt dir auf?"],
        aufgabe_b: ["Woran könnte das liegen?",],
        hints: [
            {
                title: "Hinweis 1",
                content: "Schau dir dein Vogel-Skript genau an: Wird dort <code>y</code> in jedem Schritt geändert?"
            },
            {
                title: "Hinweis 2",
                content: "Gravitation sorgt für eine <strong>Fallbeschleunigung</strong>. Wie müsste man also <code>y</code> in jedem Schritt ändern?"
            }
        ],
        solution: `
    <p><b>Erklärung:</b> Unser Vogel fällt gleichmäßig, weil sein <code>y</code>-Wert in jedem Schritt um denselben Wert geändert wird (z. B. -5).</p>
    <p>Damit bleibt die Geschwindigkeit konstant: Es gibt keine Beschleunigung.</p>
    <p><b>Gravitation</b> würde bedeuten: Die Geschwindigkeit nimmt Schritt für Schritt zu, also der Vogel fällt immer schneller.</p>`

    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ['Erstelle eine Variable „Vertikale Änderung“.',
            'Bei Leertaste soll die Variable auf 15 gesetzt werden, andernfalls um -2 verändert werden.',
            'Ändere nach dem falls-dann-Block die Höhe der Katze um die Variable "Vertikale Änderung".',
            "Immer wenn die Figur springt, soll das Kostüm geändert werden.",
            "Zusatz: Füge Soundeffekte hinzu."
        ],
        hints: [
            {
                content: "b) Verwende die Blöcke setze Variable und ändere Variable im Abschnitt Variablen."
            },
            {
                content: "c) Verwende den Block ändere y um im Abschnitt Bewegung."
            },
            {
                content: "d) Verwende den Block wechsle Kostüm im Abschnitt Aussehen."
            }
        ]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["Immer, wenn der Vogel springt, soll ... ", "a) ... der Vogel sein Kostüm ändern.", "b) ...ein Soundeffekt erklingen "]
    }
}

function onTestStatus(result) {
    testResult.value = result
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
    min-width: 30%;
    max-width: 100%;
    padding-right: 1rem;
}

.comment {
    padding: 1rem 1rem;
    background-color: bisque;
    border-radius: 16px;
    font-weight: 600;
}

.disclaimer {
    padding-top: 1rem;
}

h3 {
    color: #b85d00;
    font-weight: 500;
}

.solution {
    padding: 1rem 1rem;
}
</style>