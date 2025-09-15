<template>
    <div class="score">

        <InfoCardOrange :title="'Kapitel 4: Punktestand'">
            <p>Nachdem dein Vogel eine Röhre passiert, soll die Punktzahl erhöht werden. Dies werden wir nun
                implementieren.</p>
        </InfoCardOrange>

        <PredictAndRun>
            <template #default>
                <h3> {{ content.pr.title }}</h3>
                <SubtaskList :items="content.pr.aufgabe_a" />
                <div class="horizontal-container">
                    <StudentAnswer :height="'180px'" answerId="score/aufgabe1" :hints="content.pr.hints" />
                    <ScratchImage :imageUrls="[score_img, score_bühne]" :height="'200px'" />
                </div>
                <SubtaskList :items="content.pr.aufgabe_b" />
                <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1213183568/embed'" />
                <HintWithSolution :solution="content.pr.solution" class="solution" />
            </template>
        </PredictAndRun>

        <Investigate>
            <template #default>
                <h3> {{ content.investigate.title }}</h3>
                <SubtaskList :items="content.investigate.aufgabe_a" />

                <div class="horizontal-container">
                    <StudentAnswer :height="'200px'" answerId="score/aufgabe2" :hints="content.investigate.hints"
                        :solution="content.investigate.solution" />
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
                            :floating="false" :buttonTitle="'Editor Öffnen'" :exercises="content.modify.aufgabe_a" />
                    </div>
                    <ScratchImage :imageUrls="[score_img]" :height="'200px'" />

                </div>
            </template>
        </Modify>

        <Make>
            <template #default>
                <h3> {{ content.make.title }}</h3>
                <div class="horizontal-container">
                    <div class="vertical-container">
                        <SubtaskList :items="content.make.aufgabe_a" />
                        <PopUp :projectUrl="ScoreProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                            :floating="false" :buttonTitle="'Editor Öffnen'" :exercises="content.make.aufgabe_a" />
                        <PopUp :projectUrl="ScoreProjectTestUrl"
                            :iframeUrl="'https://tanghoang.github.io/whisker-edit/?lng=de'" :buttonTitle="'Testen'"
                            :type="'test'" />
                    </div>
                    <ScratchGif :imageUrls="[score_gif, score_lösung_img]" :height="'200px'" />
                </div>
            </template>
        </Make>

        <InfoCardPurple :title="'Recap'">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>Variablen: </strong> Du hast gesehen, wie man mit einen Punktestand mit Variablen
                        umsetzt.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
                <li class="info-row">

                    <span class="info-text">
                        <strong>Logik: </strong> Wir haben den 'warte'-Block verwendet, um den Counter bei der Berührung
                        genau
                        um 1 zu erhöhen.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text">
                        <strong>Highscore: </strong> Du hast selbst einen Highscore implementiert.
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
import score_img from "@/assets/score_assets/score.png"
import score_bühne from "@/assets/score_assets/score_bühne.png"
import score_gif from "@/assets/score_assets/score.gif"
import score_lösung_img from "@/assets/score_assets/score_lösung_bühne.png"

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
import HintWithSolution from "../components/HintWithSolution.vue"

const ScoreProjectUrl = new URL("@/assets/score_assets/Aufgabe_Counter_PRIMM.sb3", import.meta.url).href;
const ScoreProjectTestUrl = new URL("@/assets/whisker_tests/highscore.js", import.meta.url).href;


const content = {
    pr: {
        sectionTitle: "",
        title: "Aufgabe 1",
        aufgabe_a: ["Stelle eine Vermutung über die Funktionalität des Codes auf. Welchen Sinn hat der neue Sprite 'Crystal' ?."],
        aufgabe_b: ["Führe nun Programm unten aus, indem du die grüne Flagge anklickst. Überprüfe deine Vermutungen."],
        demo_link: "https://scratch.mit.edu/projects/1206376368/embed",
        hints: [
            {
                content: 'Im Abschnitt Kollision, haben wir die Bedingung <code>  wird ... berührt</code> verwendet, um Fallunterscheidungen durchzuführen. Hier wollen wir jedoch die Punkte zählen, wenn die Katze das Rohr nicht berührt. Wozu also die Extra-Figur unterhalb der Katze auf dem Boden?'
            }
        ],
        solution: `
        <p><b>Lösung:</b> Wir setzen eine Extra-Figur genau unter die Katze, um dann bei jeder Berührung der Extra-Figur mit der Röhre die Punktzahl zu erhöhen.</p>
        `
    },
    investigate: {
        title: "Aufgabe 2",
        aufgabe_a: ["Erkläre die Funktionalität des Codes.", "Was ist wohl der Sinn des 'Warte'-Blocks ...? "],
        hints: [
            {
                content: 'Die Figur "Crystal" berührt das Rohr nicht nur in einer Instanz. Sie berührt das Rohr über einen gewissen <b> Zeitraum </b>.'
            }
        ],
        solution: `
        <p><b>Erklärung:</b> Würden wir nicht warten bis die Figur das Rohr <b>nicht</b> berührt, würde die Punktzahl bei jeder passierten Röhre, um mehr als 1 steigen.</p>
        `

    },
    modify: {
        title: "Aufgabe 3",
        aufgabe_a: ["Übertrage zuerst den Programmcode im Bild in dein Projekt.",
            "Entferne den 'warte'-Block, probiere es aus und passe ggf. deine Antwort in Aufgabe 2 an.",
            "Es fehlt noch Röhre2! Kopiere nun den gegebenen Code, um die zweite Röhre miteinzubeziehen.",
            "Verändere! Der Sprite, der bei Berührung mit der Röhre den Counter erhöht, sollst du so unsichtbar wie möglich machen."
        ]
    },
    make: {
        title: "Aufgabe 4",
        aufgabe_a: ["Implementiere einen Highscore.", "Zusatz: Implementiere Soundeffekte für einen erfolgreichen Durchflug."]
    }
}
</script>

<style scoped>
.score {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 90%;
}

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: left;
    align-items: center;
    padding-bottom: 1rem;
}

h3 {
    color: #b85d00;
    font-weight: 500;

}

.solution {
    padding: 1rem 1rem;
}
</style>