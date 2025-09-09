<template>
    <div class="einleitung">
        <InfoCardOrange :title="'Kapitel 0: Einführung in Scratch'">
            <p>
                <strong>Scratch</strong> ist eine kostenlose visuelle Programmiersprache für Anfänger. Du setzt
                Bausteine
                wie Puzzleteile zusammen und erstellst so Animationen, Spiele und Geschichten
                ohne komplizierten Code. In diesem Kapitel bekommst du einen Überblick über Scratch.
            </p>

            <ScratchImage :imageUrls="[scratch_gesamt]" :height="'300px'" class="img" />
        </InfoCardOrange>

        <InfoCardPurple :title="'Skript'">
            <div class="vertical-container">
                <p>In Scratch nennt man eine Abfolge von Blöcken ein Skript.
                    Ein Skript gibt also Anweisungen, die der Computer nacheinander ausführt.
                    Man kann damit festlegen, was eine Figur (Sprite) tun oder sagen soll.
                    Skripte erstellt man im Skriptbereich. Dazu zieht man Blöcke aus der Blockpalette und steckt sie wie
                    Puzzleteile zusammen.
                </p>
                <ScratchImage :imageUrls="[skript_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardPurple>

        <InfoCardWhite :title="'Figur (Sprite)'">
            <div class="vertical-container">
                <p>
                    In Scratch heißen alle Objekte und Figuren Sprites.
                    Ein Sprite kann z. B. eine Katze, ein Ball oder eine eigene Zeichnung sein.
                </p>
                <p>Man kann:</p>
                <ul>
                    <li> ein fertiges Sprite aus der Bibliothek auswählen,</li>
                    <li> ein neues Sprite zeichnen,</li>
                    <li>oder ein eigenes Bild hochladen.</li>
                </ul>
                <p>Sprites führen die Befehle aus, die im Skript stehen.</p>
                <ScratchImage :imageUrls="[figur_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardWhite>

        <InfoCardPurple :title="'Ereignisse'">
            <div class="vertical-container">
                <p>
                    Ein Ereignis ist ein gewisses Etwas, das ein Skript startet.
                </p>
                <p>Beispiele:</p>
                <ul>
                    <li> Wenn die grüne Flagge angeklickt wird,</li>
                    <li> wenn eine Taste gedrückt wird,</li>
                    <li>wenn auf ein Sprite geklickt wird.</li>
                </ul>
                <p>Mit Ereignissen bestimmt man, wann etwas passieren soll.</p>
                <ScratchImage :imageUrls="[skript_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardPurple>

        <InfoCardWhite :title="'Bühne und Bühnenbilder'">
            <div class="vertical-container">
                <p>Die Bühne ist der Bereich, in dem alles passiert. </p>
                <ul>
                    <li> Die Bühne enthält Bühnenbilder (Hintergrundbilder) und Sprites.</li>
                    <li> Die Bühne kann eigene Skripte und Klänge haben (z. B. Szene wechseln, Spielzustand steuern).
                    </li>
                </ul>
                <p>Koordinatensystem: Die Mitte der Bühne ist (0, 0), x von −240 bis 240, y von −180 bis 180. Sprites
                    bewegen sich in diesem Bereich.
                </p>
                <ScratchImage :imageUrls="[buehne_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardWhite>

        <InfoCardPurple :title="'Programmierblöcke'">
            <p>
                In Scratch gibt es verschiedene Arten von Blöcken.
                Man zieht sie in den Skriptbereich und baut daraus Programme.
            </p>
            <p>Wichtige Kategorien:</p>
            <div class="horizontal-container">
                <ul>
                    <li><b>Bewegung:</b> bewegt oder dreht ein Sprite.</li>
                    <li><b>Aussehen:</b> ändert Kostüme oder Bühnenbilder, lässt Sprites sprechen oder denken.</li>
                    <li><b>Klang:</b> spielt Töne oder Geräusche ab.</li>
                    <li><b>Ereignisse:</b> starten Skripte.</li>
                    <li><b>Steuerung:</b> Schleifen und Bedingungen.</li>
                    <li><b>Fühlen:</b> prüft Berührungen, Mausklicks oder Tasten.</li>
                    <li><b>Operatoren:</b> Rechnen, Vergleiche, Logik.</li>
                    <li><b>Variablen:</b> speichern Zahlen oder Texte (für alle oder nur für ein Sprite).</li>
                    <li><b>Listen:</b> speichern mehrere Werte in einer Reihenfolge.</li>
                    <li><b>Meine Blöcke:</b> hier können eigene Befehle erstellt werden.</li>
                </ul>
                <ScratchImage :imageUrls="[programmierbloecke_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardPurple>

        <InfoCardWhite :title="'Schleifen'">
            <div class="vertical-container">
                <p>
                    Eine Schleife wiederholt bestimmte Anweisungen mehrmals.
                    So spart man sich viele gleiche Blöcke hintereinander.
                </p>
                <p>Arten von Schleifen in Scratch:</p>
                <ul>
                    <li><b>wiederhole (n):</b> führt Befehle genau n-mal aus.</li>
                    <li><b>wiederhole fortlaufend:</b> läuft unendlich lange.</li>
                    <li><b>wiederhole bis &lt;Bedingung&gt;:</b> wiederholt Befehle, bis etwas Bestimmtes passiert.</li>
                </ul>
                <ScratchGif :imageUrls="[schleifen_beispiel_gif, schleifen_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardWhite>

        <InfoCardPurple :title="'Bedingungen'">
            <div class="vertical-container">
                <p>
                    Bedingungen prüfen, ob etwas stimmt.
                    Je nach Ergebnis („wahr“ oder „falsch“) läuft das Programm anders weiter.
                </p>
                <p>Wichtige Bedingungs-Blöcke:</p>
                <ul>
                    <li><b>falls &lt;Bedingung&gt; dann:</b> führt Befehle nur aus, wenn die Bedingung wahr ist.</li>
                    <li><b>falls &lt;Bedingung&gt; dann sonst:</b> führt entweder den „dann“-Teil oder den „sonst“-Teil
                        aus.
                    </li>
                </ul>
                <p>Beispiel: „Falls Leertaste gedrückt wird, dann gehe 10 Schritte (vorwärts), ansonsten gehe -1 Schritt
                    (rückwärts).“</p>
                <ScratchGif :imageUrls="[bedingungen_beispiel_gif, bedingungen_img]" :height="'300px'" class="img" />
            </div>
        </InfoCardPurple>

    </div>
</template>

<script setup>
import InfoCardOrange from '../components/InfoCardOrange.vue';
import InfoCardPurple from '../components/InfoCardPurple.vue';
import InfoCardWhite from '../components/InfoCardWhite.vue';
import ScratchImage from '../components/ScratchImage.vue';
import ScratchGif from '../components/ScratchGif.vue';

import skript_img from '@/assets/einfuehrung_assets/skript_img.png';
import figur_img from '@/assets/einfuehrung_assets/figur_img.png'
import buehne_img from '@/assets/einfuehrung_assets/buehne_img.png'
import programmierbloecke_img from '@/assets/einfuehrung_assets/programmierbloecke_img.png'

import schleifen_img from '@/assets/einfuehrung_assets/schleifen_img.png'
import schleifen_beispiel_gif from '@/assets/einfuehrung_assets/schleifen_beispiel.gif'

import bedingungen_img from '@/assets/einfuehrung_assets/bedingungen_img.png'
import bedingungen_beispiel_gif from '@/assets/einfuehrung_assets/bedingungen_beispiel.gif'

import scratch_gesamt from '@/assets/einfuehrung_assets/scratch_gesamt.png'
</script>

<style scoped>
.einleitung {
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