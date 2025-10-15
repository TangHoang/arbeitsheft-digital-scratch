<template>
    <div class="springen">

        <InfoCard variant="orange" :title="'Kapitel 1: Springen'" :showTime="'🕑 30-35 Minuten'"
            aufgabenID="springen/einleitung">
            <p>Nach diesem Kapitel wird dein Vogel springen können!</p>
        </InfoCard>

        <PredictAndRun aufgabenID="springen/aufgabe1">
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

        <Investigate aufgabenID="springen/aufgabe2">
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

        <Modify aufgabenID="springen/aufgabe3">
            <template #default>
                <h3> {{ content.modify.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container">
                        <SubtaskList :items="content.modify.aufgabe_a" />
                        <OpenIFrameButton :projectUrl="SprungProjectUrl" :type="'editor'" :buttonTitle="'Editor öffnen'"
                            :exercises="content.modify.aufgabe_a" :exerciseId="'springen/aufgabe3'"
                            :hints="content.modify.hints" :showIframe="false" />
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
                        <p class="hinweis">⚠️ <Strong>Wichtig:</Strong> Dein Projektzustand bleibt erhalten! Du kannst
                            einfach zum nächsten Kapitel gehen, ohne Angst zu haben, dass dein Fortschritt verschwindet
                            :-).
                        </p>
                    </div>
                    <ScratchImage :imageUrls="[sprung_predict]" :height="'200px'" />

                </div>

            </template>
        </Modify>

        <StarRating :max="5" />


        <InfoCard variant="purple" :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Code: </strong> Du hast Vermutung über Code gemacht und überprüft.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        <strong>Bedingungen: </strong> Du hast gesehen, dass wir eine Bedingung für den Sprung haben,
                        und zwar
                        der Tastendruck der Leertaste.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        <strong>Sprunglogik: </strong> Du hast selbst die Gravitation implementiert!
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
import OpenIFrameButton from "../components/OpenIFrameButton.vue"

import StarRating from "../components/StarRating.vue"

import sprung_bühne from "@/assets/sprung_assets/sprung_bühne.png"
import sprung_predict from '@/assets/sprung_assets/sprung_predict.png'
import sprungHint from '@/assets/sprung_assets/sprung_hint.png'

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

import aufgabe_sprung_json from '@/assets/sprung_assets/aufgabe_sprung.json'

const SprungProjectUrl = new URL("@/assets/sprung_assets/Aufgabe_Sprung_PRIMM.sb3", import.meta.url).href;
const SprungProjectTestUrl = new URL("@/assets/whisker_tests/sprung.js", import.meta.url).href;

const testResult = ref(null);
const showDemo = ref(false);

const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["Stelle eine Vermutung über die Funktionalität des Codes auf.",],
        aufgabe_b: ["Führe nun das untenstehende Programm aus, indem du die grüne Flagge anklickst und überprüfe deine Vermutungen.",],
        demo_link: "https://scratch.mit.edu/projects/1213169461/embed",
        hints: [{ content: ' Bei welcher Taste wird das Programm reagieren? Untersuche den FALLS ... DANN ... Block genauer!' }, { content: 'Achte auf alle blauen Blöcke!' }],
        solution: 'Der Vogel springt beim Drücken der Leertaste nach oben. Wenn nichts gedrückt wird, fällt er langsam herunter.',
    },
    investigate: {
        title: "Aufgabe 2",
        kommentar_aufgabe_a: "Die Figur springt nicht, wie in der Flappy-Bird Demo am Anfang des Arbeitsheftes. Es fehlt die 'Gravitation'!",
        aufgabe_a: ["Vergleiche die Demo in Aufgabe 1 und Aufgabe 2. Was fällt dir auf?"],
        aufgabe_b: ["Beschreibe, woran das liegen könnte.",],
        hints: [
            {
                id: 'hint-1',
                title: "Hinweis 1",
                content: "Schau dir dein Vogel-Skript genau an: Wird dort <code>y</code> in jedem Schritt geändert?"
            },
            {
                title: "Hinweis 2",
                content: "Gravitation sorgt für eine <strong>Fallbeschleunigung</strong>. Die Fallgeschwindigkeit muss sich also stetig erhöhen. Wie müsste man also <code>y</code> in jedem Schritt ändern?"
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
            'Implementiere: Bei Leertaste soll die Variable auf 15 gesetzt werden, ansonsten um -2 verändert werden.',
            'Ändere nach dem falls-dann-Block (am Ende der Schleife) die Höhe der Katze um die Variable "Vertikale Änderung".',
            "Implementiere: Immer wenn die Figur springt, soll das Kostüm geändert werden.",
            "Zusatz: Füge Soundeffekte hinzu."
        ],
        hints: [
            {
                content: "b) Verwende die Blöcke <code>setze Variable </code> und <code> ändere Variable </code> im Abschnitt Variablen."
            },
            {
                content: "c) Verwende den Block <code> ändere y um ... </code> im Abschnitt Bewegung."
            },
            {
                content: "d) Verwende den Block <code> wechsle Kostüm ... </code> im Abschnitt Aussehen."
            },
            {
                content: "Letzter Hinweis: Platziere den Block <code> ändere y um 'Vertikale Änderung' </code> an die richtige Stelle.</code>",
                img: { src: sprungHint }
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