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
            <PopUp :projectUrl="KollisionProjectUrl" :iframeUrl="'https://scratch.fim.uni-passau.de/scratch/'"
                :floating="false" :buttonTitle="'Editor Öffnen'" :type="'editor'" :hasBeenOpenedAlready="true"
                :showIframe="true" :requireDownload="false" />
        </Make>
    </div>


</template>

<script setup>
import InfoCardOrange from '../components/InfoCardOrange.vue';
import Make from '../components/Primm_components/Make.vue';
import PopUp from '../components/PopUp.vue';
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