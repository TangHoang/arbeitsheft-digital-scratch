<template>
    <div class="einleitung">
        <InfoCardOrange :title="'Kapitel 0: Einführung in Scratch'">
            <p>
                <strong>Scratch</strong> ist eine kostenlose visuelle Programmiersprache für Anfänger. Du setzt
                Bausteine
                wie Puzzleteile zusammen und erstellst so Animationen, Spiele und Geschichten
                ohne komplizierten Code. In diesem Kapitel bekommst du einen Überblick über Scratch.
            </p>
            <ScratchImage :imageUrls="[scratch_gesamt]" :height="'300px'" class="img" :orientation="'horizontal'" />
        </InfoCardOrange>

        <InfoCardWhite :title="'Bühnenbilder'">
            <div class="vertical-container">
                <p>Bühnenbilder sind wie Hintergrundbilder. So machst du dein Projekt schöner!</p>
                <ScratchImage :imageUrls="[buehne_img]" :height="'300px'" class="img" />
                <p><strong>Aufgabe: </strong> Suche dir dein eigenes Bühnenbild aus.</p>
                <OpenIFrameButton :images="[buehne_img]" />

            </div>

        </InfoCardWhite>

        <InfoCardWhite :title="'Figuren'">
            <div class="vertical-container">
                <p>Figuren führen die Befehlsblöcke aus, die im Programmierbereich stehen.</p>
                <ScratchImage :imageUrls="[figur_img]" :height="'300px'" class="img" />
                <p> <strong> Aufgabe: </strong> Suche dir eine Figur aus.</p>
                <OpenIFrameButton :images="[figur_img]" />
            </div>

        </InfoCardWhite>

        <InfoCardPurple :title="'Ereignisse'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Ereignisse</b>.</p>
                <ScratchImage :imageUrls="[skript_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardPurple>

        <InfoCardPurple :title="'Bewegung'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Bewegung</b>.</p>

                <ScratchImage :imageUrls="[bewegung_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Probiere aus aus, indem du auf Editor öffnen clickst und die Ereignis-,
                    sowie Bewegungsblöcke kombinierst. Ziehe dazu die Blöcke in den Programmierbereich.
                </p>
                <OpenIFrameButton :images="[skript_img, bewegung_img]" />
            </div>
        </InfoCardPurple>

        <InfoCardWhite :title="'Aussehen'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Aussehen</b>.</p>
                <ScratchImage :imageUrls="[aussehen_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Probiere aus aus, indem du auf Editor öffnen clickst und die Ereignis-,
                    sowie Aussehenblöcke kombinierst.
                </p>
                <OpenIFrameButton :images="[skript_img, aussehen_img]" />
            </div>
        </InfoCardWhite>

        <InfoCardWhite :title="'Steuerung'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Steuerung</b>.</p>
                <ScratchImage :imageUrls="[steuerung_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Probiere aus aus, indem du auf Editor öffnen clickst und die Ereignis-,
                    sowie Aussehenblöcke kombinierst.
                </p>
                <OpenIFrameButton :images="[steuerung_img]" />
            </div>
        </InfoCardWhite>

        <InfoCardPurple :title="'Koordinatensystem in Scratch'">
            <div class="vertical-container">
                <p>Scratch verwendet ein Koordinatensystem, wie aus dem Mathematikunterricht.</p>

                <ScratchImage :imageUrls="[koordinatensystem_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Bringe die Fledermaus auf die farbigen Punkte. Welche Werte/Zahlen musst
                    du angeben?
                </p>
            </div>
            <StudentAnswer answerId="einfuehrung/aufgabe_koordinatensystem" />
        </InfoCardPurple>

        <InfoCardWhite :title="'Variablen'">
            <div class="vertical-container">
                <p>
                    Variablen sind Speicherplätze für Zahlen oder Texte. Sie helfen dir, sich Werte
                    während des Programms zu merken und wiederzuverwenden.
                </p>
                <p>Beispiele:</p>
                <ul>
                    <li>Punkte im Spiel zählen</li>
                    <li>Spielername speichern</li>
                    <li>Zufallszahl merken</li>
                </ul>
                <ScratchGif :imageUrls="[variable_gif, variable_img]" :height="'400px'" class="img" />
                <p><strong>Aufgabe: </strong>Beschreibe, wie sich die Variable <i>Vergangene Sekunden</i> verhalten
                    wird.</p>
            </div>

            <StudentAnswer answerId="einfuehrung/aufgabe_variablen" />
        </InfoCardWhite>

        <InfoCardOrange :title="'Geschafft!'">
            <p>Du hast gerade deine ersten Erfahrungen mit Scratch gemacht. Jetzt beginnst du, wie versprochen, dein
                Flappy-Bird-Spiel zu programmieren. </p>
            <p> Verwenden den Knopf unten links oder die Kapitelübersicht oben rechts, um zum nächsten Kapitel zu
                wechseln.</p>
        </InfoCardOrange>
    </div>
</template>

<script setup>
import InfoCardOrange from '../components/InfoCardOrange.vue';
import InfoCardPurple from '../components/InfoCardPurple.vue';
import InfoCardWhite from '../components/InfoCardWhite.vue';
import ScratchImage from '../components/ScratchImage.vue';
import ScratchGif from '../components/ScratchGif.vue';
import OpenIFrameButton from '../components/OpenIFrameButton.vue';

import StudentAnswer from '../components/StudentAnswer.vue';

import steuerung_img from '@/assets/einfuehrung_assets/steuerung_img.png'

import skript_img from '@/assets/einfuehrung_assets/skript_img.png';
import figur_img from '@/assets/einfuehrung_assets/figur_img.png'
import figure_gif from '@/assets/einfuehrung_assets/sprite_gif.gif'

import aussehen_img from '@/assets/einfuehrung_assets/aussehen_img.png'

import koordinatensystem_img from '@/assets/einfuehrung_assets/koordinatensystem_img.png'

import bewegung_img from '@/assets/einfuehrung_assets/bewegung_img.png'

import buehne_img from '@/assets/einfuehrung_assets/buehne_img.png'
import buehne_gif from '@/assets/einfuehrung_assets/buehnenbild_gif.gif'

import programmierbloecke_img from '@/assets/einfuehrung_assets/programmierbloecke_img.png'

import schleifen_img from '@/assets/einfuehrung_assets/schleifen_img.png'
import schleifen_beispiel_gif from '@/assets/einfuehrung_assets/schleifen_beispiel.gif'

import bedingungen_img from '@/assets/einfuehrung_assets/bedingungen_img.png'
import bedingungen_beispiel_gif from '@/assets/einfuehrung_assets/bedingungen_beispiel.gif'

import variable_gif from '@/assets/einfuehrung_assets/variable_gif.gif'
import variable_img from '@/assets/einfuehrung_assets/variable_img.png'

import scratch_gesamt from '@/assets/einfuehrung_assets/scratch_gesamt.png'

import PopUp from '../components/PopUp.vue';
</script>

<style scoped>
.einleitung {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
}

.vertical-container {
    display: flex;
    flex-flow: column;
    align-items: center;
}

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

.img {
    padding-top: 1rem;
}
</style>