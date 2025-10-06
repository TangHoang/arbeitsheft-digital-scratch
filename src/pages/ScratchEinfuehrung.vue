<template>
    <div class="einleitung">
        <InfoCard variant="orange" :title="'Kapitel 0: Einführung in Scratch'" :showTime="'🕑 40-45 Minuten'">
            <p>
                <strong>Scratch</strong> ist eine kostenlose visuelle Programmiersprache für Anfänger. Du setzt
                Bausteine
                wie Puzzleteile zusammen und erstellst so Animationen, Spiele und Geschichten
                ohne komplizierten Code. In diesem Kapitel bekommst du einen Überblick über Scratch.
            </p>
            <ScratchImage :imageUrls="[scratch_gesamt]" :height="'300px'" class="img" :orientation="'horizontal'" />
        </InfoCard>

        <InfoCard variant="white" :title="'1. Bühnenbilder'">
            <div class="vertical-container">
                <p>Bühnenbilder sind wie Hintergrundbilder. So machst du dein Projekt schöner!</p>
                <ScratchImage :imageUrls="[buehne_img]" :height="'300px'" class="img" />
                <p><strong>Aufgabe: </strong> Suche dir dein eigenes Bühnenbild aus.</p>
                <OpenIFrameButton :images="[buehne_img]"
                    :hints="[{ content: 'Lasse die Figur beim Drücken der Leertaste an eine zufällige Position bewegen.' }]" />

            </div>

        </InfoCard>

        <InfoCard variant="white" :title="'2. Figuren'">
            <div class="vertical-container">
                <p>Figuren führen die Befehlsblöcke aus, die im Programmierbereich stehen.</p>
                <ScratchImage :imageUrls="[figur_img]" :height="'300px'" class="img" />
                <p> <strong> Aufgabe: </strong> Suche dir eine Figur aus.</p>
                <OpenIFrameButton :images="[figur_img]" />
            </div>

        </InfoCard>

        <InfoCard variant="purple" :title="'3. Ereignisse'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Ereignisse</b>.</p>
                <ScratchImage :imageUrls="[skript_img]" :height="'300px'" class="img" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'4. Bewegung'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Bewegung</b>.</p>

                <ScratchImage :imageUrls="[bewegung_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Implementiere ein erstes Projekt, indem du das Kombinieren von Ereignis-
                    und Bewegungsblöcken ausprobierst.
                    Ziehe dazu die Blöcke in den Programmierbereich.
                </p>
                <OpenIFrameButton :images="[skript_img, bewegung_img]" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'5. Aussehen'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Aussehen</b>.</p>
                <ScratchImage :imageUrls="[aussehen_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Ergänze dein bisheriges Projekt mit Blöcken aus der Rubrik
                    <b>Aussehen</b>.
                </p>
                <OpenIFrameButton :images="[skript_img, aussehen_img]" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'6. Steuerung'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Steuerung</b>.</p>
                <ScratchImage :imageUrls="[steuerung_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Ergänze dein bisheriges Projekt mit Blöcken aus der Rubrik
                    <b>Steuerung</b>.
                </p>
                <OpenIFrameButton :images="[steuerung_img]" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'7. Koordinatensystem in Scratch'">
            <div class="vertical-container">
                <p>Scratch verwendet ein Koordinatensystem wie aus dem Mathematikunterricht.</p>

                <ScratchImage :imageUrls="[koordinatensystem_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Gebe die Koordinaten der farbigen Punkte an und schätze die Koordinaten
                    der Fledermaus.
                </p>
            </div>
            <StudentAnswer answerId="einfuehrung/aufgabe_koordinatensystem" />
        </InfoCard>

        <InfoCard variant="white" :title="'8. Variablen'">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Steuerung</b>.</p>

                <ScratchImage :imageUrls="[variablen_img]" :height="'400px'" class="img" />
                <p><strong>Aufgabe: </strong> Experimentiere mit Variablen, indem du diese mit den vorher verwendeten
                    Blöcken kombinierst!</p>
                <OpenIFrameButton :images="[variablen_img]" />
            </div>
        </InfoCard>

        <InfoCard variant="orange" :title="'Geschafft!'">
            <p>Du hast gerade deine ersten Erfahrungen mit Scratch gemacht. Jetzt beginnst du, wie versprochen, dein
                Flappy-Bird-Spiel zu programmieren. </p>
            <p> Verwende den Button unten rechts oder die Kapitelübersicht oben links, um zum nächsten Kapitel zu
                wechseln.</p>
        </InfoCard>
    </div>
</template>

<script setup>
import InfoCard from '../components/InfoCard.vue';

import ScratchImage from '../components/ScratchImage.vue';
import OpenIFrameButton from '../components/OpenIFrameButton.vue';
import StudentAnswer from '../components/StudentAnswer.vue';

import steuerung_img from '@/assets/einfuehrung_assets/steuerung_img.png'

import skript_img from '@/assets/einfuehrung_assets/skript_img.png';

import figur_img from '@/assets/einfuehrung_assets/figur_img.png'

import aussehen_img from '@/assets/einfuehrung_assets/aussehen_img.png'

import koordinatensystem_img from '@/assets/einfuehrung_assets/koordinatensystem_img.png'

import bewegung_img from '@/assets/einfuehrung_assets/bewegung_img.png'

import buehne_img from '@/assets/einfuehrung_assets/buehne_img.png'

import variablen_img from '@/assets/einfuehrung_assets/variablen_img.png'

import scratch_gesamt from '@/assets/einfuehrung_assets/scratch_gesamt.png'

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