<template>
    <div class="rueckblick">
        <InfoCardOrange :title="'Geschafft!'">
            <p>Nach 4 Kapiteln hast du nun ein funktionierendes Flappy-Bird Spiel programmiert. Für deine erste
                Erfahrung
                war das hoffentlich lehrreich und interessant!</p>
            <p>Falls du besonders schnell bist, ist hier noch eine Zusatzaufgabe.</p>
        </InfoCardOrange>

        <Make>
            <h3>Aufgabe 1</h3>
            <ol>
                <li>Implementiere einen Home-Screen.</li>
                <li>Implementiere einen Lose-Screen.</li>
            </ol>
            <OpenIFrameButton :projectUrl="SprungProjectUrl" :type="'editor'" :buttonTitle="'Editor Öffnen'" />

        </Make>
    </div>


</template>

<script setup>
import InfoCardOrange from '../components/InfoCardOrange.vue';
import Make from '../components/Primm_components/Make.vue';
import OpenIFrameButton from '../components/OpenIFrameButton.vue';
</script>

<style scoped>
.rueckblick {
    height: 100vh;
}

h3 {
    color: #b85d00;
    font-weight: 500;

}
</style>