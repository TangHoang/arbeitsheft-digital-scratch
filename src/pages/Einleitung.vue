<template>
    <div class="einleitung">
        <InfoCard variant="orange" :title="'Willkommen!'" :aufgabenID="'einleitung/willkommen'">
            <p>
                In diesem Arbeitsheft programmierst du Schritt für Schritt ein eigenes
                <strong>Flappy-Bird-Spiel</strong> in Scratch. Dabei lernst du Grundideen
                der Informatik kennen und wendest sie kreativ an.
                Am Ende bewegst du Figuren über die Bühne, reagierst auf Tasten,
                arbeitest mit Variablen, Ereignissen, Schleifen, Bedingungen und testest dein Spiel automatisch.
            </p>
        </InfoCard>
        <InfoCard variant="white" :title="'Demo: Flappy Bird'" :aufgabenID="'einleitung/flappy-bird'">
            <div class="horizontal-container">
                <div>
                    <iframe src="https://scratch.mit.edu/projects/17828009/embed" allowtransparency="true" width="485"
                        height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
                <div class="demo-tips">
                    <p>
                        <strong>Tipp:</strong> Drücke die <strong>grüne Flagge</strong>, dann spiele mit
                        <strong>Leertaste</strong>.
                    </p>
                    <p>
                        <strong>Hinweis:</strong> Das ist eine sehr ausgepfeilte Version von Flappy Bird.
                        Dein Projekt muss nicht unglaublich perfekt sein. Hauptsache es funktioniert!
                    </p>
                </div>
            </div>
        </InfoCard>
        <InfoCard variant="orange" :title="'Scratch'" aufgabenID="einleitung/scratch">
            <p>
                <strong>Scratch</strong> ist eine kostenlose visuelle Programmiersprache für Anfänger. Du setzt
                Bausteine
                wie Puzzleteile zusammen und erstellst so Animationen, Spiele und Geschichten
                ohne komplizierten Code. Die Ausführung deines Codes, ist ganz einfach, wie du oben bei der Demo bereits
                gesehen hast.
            </p>
        </InfoCard>
        <InfoCard variant="purple" :title="'Worum geht es?'" aufgabenID="einleitung/inhalt">
            <p> Am Ende dieses Arbeitsheftes hast du ein spielbares <strong>Flappy-Bird</strong> Spiel mit der
                Programmiersprache
                <strong>Scratch </strong>programmiert!
            </p>
            <br></br>
            <p>Dafür programmieren wir <strong>Schritt für Schritt pro Kapitel</strong> alle notwendigen
                Funktionalitäten: </p>
            <br></br>
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text"><strong>1. Springen: </strong>Mit Hilfe der Leertaste wird dein Vogel
                        hochspringen und danach
                        herunterfallen.</span>
                    <img class="info-icon" src="@/assets/einleitung_assets/cat_walking.gif" alt="Steuerung"
                        loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text"><strong>2. Röhre: </strong>Du wirst Röhren generieren, die sich gleichmäßig
                        bewegen und in ihrer Höhe
                        verändern.</span>
                    <img class="info-icon" src="@/assets/einleitung_assets/moving_rohr.gif" alt="Testen & Debuggen"
                        loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text"><strong>3. Kollision: </strong>Wenn dein Vogel die Röhre berührt, wird das
                        Spiel
                        abbrechen.</span>
                    <img class="info-icon" width="80px" src="@/assets/einleitung_assets/collision.gif" alt="Kollision"
                        loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text"><strong>4. Punktestand: </strong>Jedes Mal, wenn dein Vogel eine Röhre
                        passiert,
                        wird deine Punktzahl
                        erhöht.</span>
                    <img class="info-icon" src="@/assets/einleitung_assets/score.gif" alt="Score" loading="lazy" />
                </li>
            </ul>
        </InfoCard>
        <InfoCard variant="white" :title="'Aufgabenstruktur'" aufgabenID="einleitung/aufgabenstruktur">
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        <strong>1. Vermuten und Überprüfen: </strong> Am Anfang jedes Kapitels siehst du ein Bild von
                        Code.
                        Über dessen Funktion stellst du zuerst eine Vermutung auf.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        <strong>2. Analysieren: </strong>Daraufhin wirst du den Code beschreiben und erklären.
                    </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        <strong>3. Verändern: </strong>Nachdem du den Code nachvollzogen hast, bist du an der Reihe
                        einige Änderungen daran vorzunehmen. </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
                <li class="info-row">
                    <span class="info-text">
                        <strong>4. Coden: </strong>Schließlich bist du selbst mit deiner Kreativität an der Reihe, um
                        eigene Funktionalitäten zu implementieren. </span>
                    <img class="info-icon" src="@/assets/einleitung_assets/green_checkmark.webp" alt="Bild"
                        loading="lazy" />
                </li>
            </ul>
        </InfoCard>

        <StarRating :title="'Selbsteinschätzung'" :max="5" :questions='[
            " Ich bin neugierig, wie man mit dem Computer eigene Dinge gestalten oder steuern kann.",
            "Ich glaube, dass ich lernen kann, wie Programmieren funktioniert, wenn ich es Schritt für Schritt erklärt bekomme.",
            "Ich mache mir ein bisschen Sorgen, dass Programmieren zu schwierig für mich sein könnte.",
            "Wenn mir etwas am Anfang nicht gelingt, probiere ich verschiedene Wege, bis es klappt.",
        ]' />

        <InfoCard variant="orange" :title="'Es geht los!'">
            <p> Drücke auf den Button rechts unten, um zum nächsten Kapitel zu gelangen.</p>
        </InfoCard>



    </div>

</template>
<script setup>
import InfoCard from '../components/InfoCard.vue';
import StarRating from '../components/StarRating.vue';

</script>
<style>
.einleitung {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
}

p {
    font-size: 1.1rem;
}

.demo-tips {
    padding-left: 1rem;
}

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

.info-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 12px;
}

.info-row {
    display: grid;
    grid-template-columns: 1fr 128px;
    align-items: center;
    gap: 8px;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, .04);
}

.info-text {
    line-height: 1.5;
    font-size: 1.1rem;
    font-weight: 500;
}

.info-icon {
    width: 64px;
    height: 64px;
    object-fit: contain;
    justify-self: end;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, .1));
}

@media (max-width: 640px) {
    .info-row {
        grid-template-columns: 1fr 56px;
    }

    .info-icon {
        width: 48px;
        height: 48px;
    }
}
</style>