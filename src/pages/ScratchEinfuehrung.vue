<template>
    <div class="einleitung">
        <InfoCard variant="orange" :title="'Kapitel 0: Einführung in Scratch'" :showTime="'🕑 40-45 Minuten'"
            aufgabeID="tutorial/interface">
            <p>
                <strong>Scratch</strong> ist eine kostenlose visuelle Programmiersprache für Anfänger. Du setzt
                Bausteine
                wie Puzzleteile zusammen und erstellst so Animationen, Spiele und Geschichten
                ohne komplizierten Code. In diesem Kapitel bekommst du einen Überblick über Scratch.
            </p>
            <ScratchImage :imageUrls="[scratch_gesamt]" :height="'300px'" class="img" :orientation="'horizontal'" />
        </InfoCard>

        <InfoCard variant="white" :title="'1. Bühnenbilder'" aufgabeID="tutorial/buehnenbilder">
            <div class="vertical-container">
                <p>Bühnenbilder sind wie Hintergrundbilder. So machst du dein Projekt schöner!</p>
                <ScratchImage :imageUrls="[buehne_img]" :height="'300px'" class="img" />
                <p><strong>Aufgabe: </strong> Suche dir dein eigenes Bühnenbild aus.</p>
                <OpenIFrameButton :images="[buehne_img]"
                    :hints="[{ content: 'Lasse die Figur beim Drücken der Leertaste an eine zufällige Position bewegen.' }]" />

            </div>

        </InfoCard>

        <InfoCard variant="white" :title="'2. Figuren'" aufgabeID="tutorial/figuren">
            <div class="vertical-container">
                <p>Figuren führen die Befehlsblöcke aus, die im Programmierbereich stehen.</p>
                <ScratchImage :imageUrls="[figur_img]" :height="'300px'" class="img" />
                <p> <strong> Aufgabe: </strong> Suche dir eine Figur aus.</p>
                <OpenIFrameButton :images="[figur_img]" />
            </div>

        </InfoCard>

        <InfoCard variant="purple" :title="'3. Ereignisse'" aufgabeID="tutorial/ereignisse">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Ereignisse</b>.</p>
                <ScratchImage :imageUrls="[skript_img]" :height="'300px'" class="img" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'4. Bewegung'" aufgabeID="tutorial/bewegung">
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

        <InfoCard variant="purple" :title="'5. Aussehen'" aufgabeID="tutorial/aussehen">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Aussehen</b>.</p>
                <ScratchImage :imageUrls="[aussehen_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Ergänze dein bisheriges Projekt mit Blöcken aus der Rubrik
                    <b>Aussehen</b>.
                </p>
                <OpenIFrameButton :images="[skript_img, aussehen_img]" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'6. Steuerung'" aufgabeID="tutorial/steuerung">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Steuerung</b>.</p>
                <ScratchImage :imageUrls="[steuerung_img]" :height="'300px'" class="img" />
                <CollapsibleExample class="left-align">
                    <p>Betrachte die folgenden zwei Kombinationen aus Event-, Steuerung- und Bewegungsblöcken.</p>
                    <p>Übertrage beide Beispiele und probiere sie aus.</p>
                    <ScratchImage :imageUrls="[steuerung_nowhile, steuerung_while]" :height="'200px'" />
                    <OpenIFrameButton :images="[steuerung_nowhile, steuerung_while]" />
                    <p> <strong>Aufgabe: </strong> Beschreibe den Unterschied beider Implementierungen.
                    </p>
                    <StudentAnswer class="left-align" />
                </CollapsibleExample>
                <p> <strong>Aufgabe: </strong> Experimentiere im Editor mit verschiedenen Blöcken aus der Rubrik
                    <b>Steuerung</b>, indem du das Beispiel erweiterst.
                </p>

                <OpenIFrameButton :images="[steuerung_img]" />
            </div>
        </InfoCard>

        <InfoCard variant="purple" :title="'7. Koordinatensystem in Scratch'" aufgabeID="tutorial/koordinatensystem">
            <div class="vertical-container">
                <p>Scratch verwendet ein Koordinatensystem wie aus dem Mathematikunterricht. </p>
                <p>Möglicherweise siehst du hier zum ersten Mal die Verwendung von Koordinatensystemen außerhalb der
                    Mathematik.</p>
                <p>Tatsächlich werden sie in unzähligen Computerspielen, wie Fortnite, Clash Royale oder Brawl Stars
                    verwendet, um die Spielfiguren und Objekte zu steuern!</p>
                <ScratchImage :imageUrls="[koordinatensystem_img]" :height="'300px'" class="img" />
                <p> <strong>Aufgabe: </strong> Gebe die Koordinaten der farbigen Punkte an und schätze die Koordinaten
                    der Fledermaus.
                </p>
            </div>
            <StudentAnswer answerId="einfuehrung/aufgabe_koordinatensystem" />
        </InfoCard>

        <InfoCard variant="white" :title="'8. Variablen'" aufgabeID="tutorial/variablen">
            <div class="vertical-container">
                <p>Im Bild unten findest du einige der wichtigsten Befehlsblöcke aus der Rubrik <b>Steuerung</b>.</p>

                <ScratchImage :imageUrls="[variablen_img]" :height="'400px'" class="img" />
                <CollapsibleExample>
                    <p>In diesem Beispiel wurde eine Variable <b>'Vergangene Sekunden'</b> erstellt. Diese Variable wird
                        in einer Schleife pro Sekunde, um 1 erhöht.</p>
                    <div class="horizontal-container">
                        <ScratchImage :imageUrls="[variable_img]" :height="'300px'" />
                        <ScratchDemo :scratchUrl="'https://scratch.mit.edu/projects/1217100324/embed'" />
                    </div>

                </CollapsibleExample>
                <p><strong>Aufgabe: </strong> Erweitere das Programm, indem du direkt nach
                    <code>Wenn grüne Flagge angeklickt wird</code> die Variable <code>Vergangene Sekunden</code> auf 0
                    setzt.
                </p>
                <OpenIFrameButton :images="[variablen_img]" />
            </div>
        </InfoCard>

        <StarRating :max="5" chapterId="einfuehrung" />

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
import CollapsibleExample from '../components/CollapsibleExample.vue';
import StarRating from '../components/StarRating.vue';

import steuerung_img from '@/assets/einfuehrung_assets/steuerung_img.png'

import steuerung_while from '@/assets/einfuehrung_assets/steuerung_beispiel_while.png'
import steuerung_nowhile from '@/assets/einfuehrung_assets/steuerung_beispiel_ohneWhile.png'


import skript_img from '@/assets/einfuehrung_assets/skript_img.png';

import figur_img from '@/assets/einfuehrung_assets/figur_img.png'

import aussehen_img from '@/assets/einfuehrung_assets/aussehen_img.png'

import koordinatensystem_img from '@/assets/einfuehrung_assets/koordinatensystem_img.png'

import bewegung_img from '@/assets/einfuehrung_assets/bewegung_img.png'

import buehne_img from '@/assets/einfuehrung_assets/buehne_img.png'

import variablen_img from '@/assets/einfuehrung_assets/variablen_img.png'
import variable_img from '@/assets/einfuehrung_assets/variable_img.png'

import scratch_gesamt from '@/assets/einfuehrung_assets/scratch_gesamt.png'
import ScratchDemo from '../components/ScratchDemo.vue';

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
    align-items: center;
}

.img {
    padding-top: 1rem;
}

.example-container {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.left-align {
    align-self: start;
}
</style>