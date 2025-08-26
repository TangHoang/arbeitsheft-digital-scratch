<template>
    <div class="einleitung">
        <section class="welcome-box">
            <h1>Willkommen!</h1>
            <p>
                In diesem Arbeitsheft programmierst du Schritt für Schritt ein eigenes
                <strong>Flappy-Bird-Spiel</strong> in Scratch. Dabei lernst du Grundideen
                der Informatik kennen und wendest sie kreativ an.
                Am Ende bewegst du Figuren über die Bühne, reagierst auf Tasten,
                arbeitest mit Variablen, Ereignissen, Schleifen, Bedingungen und testest dein Spiel automatisch.
            </p>
        </section>


        <h2 style="margin-top:2rem">Demo: Flappy Bird</h2>
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
                    Dein Projekt muss nicht unglaublich perfekt sein. Hauptsache es funktioniert erstmal!
                </p>
            </div>

        </div>


        <h2>Worum geht’s?</h2>

        <ul class="info-list">
            <li class="info-row">
                <span class="info-text">
                    <strong>Projekt:</strong> Ein spielbarer Flappy-Bird-Clone mit Punktestand und „Game Over“
                </span>
            </li>
            <li class="info-row">
                <span class="info-text">
                    <strong>Themen:</strong> Ereignisse, Steuerung, Koordinaten, Bedingungen, Variablen, Kollision
                </span>
            </li>
        </ul>


        <h3>Deine Ziele:</h3>
        <ul class="info-list">
            <li class="info-row">
                <span class="info-text">Ich kann ein Spiel mit Tasten steuern und Bewegungen umsetzen.</span>
                <img class="info-icon" src="@/assets/cat_walking.gif" alt="Steuerung" loading="lazy" />
            </li>

            <li class="info-row">
                <span class="info-text">Ich kann Kollisionen erkennen und darauf reagieren.</span>
                <img class="info-icon" width="80px" src="@/assets/collision.gif" alt="Kollision" loading="lazy" />
            </li>

            <li class="info-row">
                <span class="info-text">Ich kann einen Zähler (Score) anlegen und korrekt aktualisieren.</span>
                <img class="info-icon" src="@/assets/score.gif" alt="Score" loading="lazy" />
            </li>

            <li class="info-row">
                <span class="info-text">Ich kann mein Programm mit kleinen Tests überprüfen und Fehler beheben.</span>
                <img class="info-icon" src="@/assets/test.webp" alt="Testen & Debuggen" loading="lazy" />
            </li>
        </ul>


        <section class="scratch-box">
            <h2>Was ist Scratch?</h2>
            <p>
                <strong>Scratch</strong> ist eine kostenlose visuelle Programmiersprache. Du setzt Bausteine
                wie Puzzleteile zusammen und erstellst so Animationen, Spiele und Geschichten
                ohne komplizierten Code.
            </p>
            <p>
                <strong>Begriffe, die du hier brauchen wirst:</strong><br>
                <em>Sprite</em> (Figur), <em>Bühne</em> (Hintergrund/Spielwelt), <em>Skript</em> (Abfolge von Blöcken),
                <em>Ereignis</em> (z. B. „grüne Flagge wird angeklickt“).
            </p>
        </section>


        <h2>So arbeitest du mit diesem Heft</h2>
        <div>
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        Jedes Kapitel startet mit einem Mini-Einstieg (1–3 Minuten), damit du sofort loslegen kannst.
                    </span>
                    <img class="info-icon" src="@/assets/Scratchlogo.png" alt="Logo" loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        Danach folgen Bausteine in kleinen Schritten, jeweils mit Beispiel, Aufgabe und kurzem
                        Selbstcheck.
                    </span>
                    <img class="info-icon" src="@/assets/raumschiff_code_while.png" alt="Code-Beispiel"
                        loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        Am Ende steht ein Meilenstein, der dein Spiel sichtbar weiterbringt.
                    </span>
                    <img class="info-icon" src="@/assets/green_checkmark.webp" alt="Bild" loading="lazy" />
                </li>
            </ul>
        </div>



        <h2>Was brauchst du?</h2>
        <div>
            <ul class="info-list">
                <li class="info-row">
                    <span class="info-text">
                        Ein Gerät mit aktuellem Browser und Internetzugang
                    </span>
                    <img class="info-icon" src="@/assets/computer.webp" alt="Computer" loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        Kopfhörer (für Sounds)
                    </span>
                    <img class="info-icon" src="@/assets/Kopfhoerer.svg" alt="Kopfhörer" loading="lazy" />
                </li>

                <li class="info-row">
                    <span class="info-text">
                        Einen Ordner, in dem du deine Dateien speicherst, die im Laufe des Arbeitshefts runtergeladen
                        werden
                    </span>
                    <img class="info-icon" src="@/assets/Scratchlogo.png" alt="Logo" loading="lazy" />
                </li>
            </ul>
        </div>

    </div>

</template>

<style>
.einleitung {
    width: 65%;
}

p {
    font-size: 1.1rem;
}

.horizontal-container {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

.vertical-container li {
    line-height: 1rem;
}

.demo-tips {
    padding-left: 30px;
    font-size: 1rem;
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
    /* Text | Icon */
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

.scratch-box {
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 20px;
    color: #3b2d0a;
    max-width: 800px;
    /* Multi-Radial-Gradient mit Scratch-Orange + helleren Tönen */
    background:
        radial-gradient(circle at 20% 20%, #fff3e1 0, transparent 50%),
        radial-gradient(circle at 80% 30%, #ffe9d1 0, transparent 50%),
        radial-gradient(circle at 40% 80%, #fff6e8 0, transparent 50%),
        #fff1dc;
    /* Basis-Hintergrund (fast Creme) */

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.scratch-box h2 {
    margin-top: 0;
    color: #8b4500;
    font-size: 1.8rem;
    font-weight: 700;
}

.scratch-box strong {
    color: #7a3b00;
}

.scratch-box em {
    font-style: normal;
    color: #a55000;
    background: rgba(255, 255, 255, 0.5);
    padding: 2px 6px;
    border-radius: 6px;
}

.welcome-box {
    margin: 2rem auto;
    padding: 3rem 2rem;
    border-radius: 24px;
    max-width: 900px;
    text-align: left;
    color: #3b2d0a;

    background:
        radial-gradient(circle at 15% 20%, #fff7ec 0, transparent 45%),
        radial-gradient(circle at 85% 30%, #fff1df 0, transparent 50%),
        radial-gradient(circle at 50% 80%, #ffeeda 0, transparent 40%),
        #fffaf5;

    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
}

.welcome-box h1 {
    margin-top: 0;
    font-size: 2.4rem;
    font-weight: 800;
    color: #b85d00;
}

.welcome-box p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 1000px;
}

.welcome-box strong {
    color: #a05200;
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