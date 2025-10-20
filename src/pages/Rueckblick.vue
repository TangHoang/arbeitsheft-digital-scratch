<template>
    <div class="rueckblick">
        <InfoCard variant="orange" :title="'Geschafft!'" aufgabenID="rueckblick/geschafft">
            <p>Nach 4 Kapiteln hast du nun ein funktionierendes Flappy-Bird Spiel programmiert. Für deine erste
                Erfahrung
                war das hoffentlich lehrreich und interessant!</p>

        </InfoCard>

        <Make aufgabenID="rueckblick/zusatz">
            <p>Falls du besonders schnell bist, ist hier noch eine Zusatzaufgabe.</p>
            <h3>Aufgabe 1</h3>
            <ol>
                <li>Implementiere einen Home-Screen.</li>
                <li>Implementiere einen Lose-Screen.</li>
            </ol>
            <OpenIFrameButton :projectUrl="SprungProjectUrl" :type="'editor'" :buttonTitle="'Editor Öffnen'" />

        </Make>

        <InfoCard>
            <h3>Blick in die Vergangenheit</h3>
            <p>
                So wie du Flappy-Bird implementiert hast, ist in Wirklichkeit recht ähnlich wie Programmierer in der
                Realität arbeiten.
                Nämlich betrachtet man das Spiel als <b>großes Problem</b> und unterteilt es in <b>viele kleine
                    Probleme</b>, die hier in den verschiedenen Kapiteln zu sehen sind.
            </p>

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
            <p>
                Zusätzlich hast du vielleicht beobachtet, dass du in jedem Kapitel auf die Implementierungen der
                vorherigen Kapitel aufbaust. Auch das findet man häufig in Programmier-Teams wieder.
                Sie nennen dieses Verfahren <b>Iteratives Programmieren</b>
            </p>

            <p>Du hast also zum Teil, wie ein echter Programmierer in einem Unternehmen gearbeitet! Wir hoffen, dass
                diese Erfahrung dir einen interessanten Einblick gegeben hat und vielleicht ein Stück Leidenschaft für
                das Programmieren entstanden ist.</p>

        </InfoCard>

        <StarRating :title="'Abschlussfragen'" :max="5" :questions='[
            "Ich fand es spannend, eigene Dinge mit Scratch zu gestalten oder zu steuern.",
            "Ich traue mir jetzt zu, kleine Programmieraufgaben selbstständig zu lösen.",
            "Beim Programmieren habe ich mich sicherer gefühlt, als ich vor dem Arbeitsheft erwartet habe.",
            "Wenn etwas nicht sofort funktioniert hat, habe ich verschiedene Wege ausprobiert, bis es geklappt hat."
        ]' />
    </div>


</template>

<script setup>
import InfoCard from '../components/InfoCard.vue';
import Make from '../components/Primm_components/Make.vue';
import OpenIFrameButton from '../components/OpenIFrameButton.vue';
import StarRating from '../components/StarRating.vue';
</script>

<style scoped>
.rueckblick {
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 90%;
}

h3 {
    color: #b85d00;
    font-weight: 500;

}

.info-list {
    list-style: none;
    margin: 2rem 0;
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
</style>