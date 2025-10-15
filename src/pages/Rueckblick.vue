<template>
    <div class="rueckblick">
        <InfoCard variant="orange" :title="'Geschafft!'" aufgabenID="rueckblick/geschafft">
            <p>Nach 4 Kapiteln hast du nun ein funktionierendes Flappy-Bird Spiel programmiert. Für deine erste
                Erfahrung
                war das hoffentlich lehrreich und interessant!</p>
            <p>Falls du besonders schnell bist, ist hier noch eine Zusatzaufgabe.</p>
        </InfoCard>

        <Make aufgabenID="rueckblick/zusatz">
            <h3>Aufgabe 1</h3>
            <ol>
                <li>Implementiere einen Home-Screen.</li>
                <li>Implementiere einen Lose-Screen.</li>
            </ol>
            <OpenIFrameButton :projectUrl="SprungProjectUrl" :type="'editor'" :buttonTitle="'Editor Öffnen'" />

        </Make>

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
</style>