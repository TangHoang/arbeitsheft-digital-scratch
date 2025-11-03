<template>
    <Teleport to="body">
        <div :class="['overlay', { active: s.open }]" @click.self="closeOverlay">
            <button class="floating-close-btn" @click="closeOverlay">Minimieren</button>

            <div class="panel" v-show="s.open">
                <div v-if="!s.showIframe && s.type === 'editor'" class="pre-screen">
                    <div class="pre-screen-card">
                        <h2>Projekt herunterladen</h2>
                        <p class="pre-hint">1. Lade zuerst das Scratch-Projekt herunter. Danach wird der Editor hier
                            eingeblendet.</p>
                        <p class="pre-hint">2. Lade das heruntergeladene Projekt im Editor hoch (siehe Bild).</p>
                        <ProjectLinkButton :url="s.projectUrl" class="pre-download-btn" @downloaded="markDownloaded"
                            @click="markDownloaded" />
                        <img :src="instructionImg" class="instruction-img" />
                    </div>
                </div>

                <div v-else-if="!s.showIframe && s.type === 'test'" class="pre-screen">
                    <div class="pre-screen-card">
                        <h2>Test-Datei herunterladen</h2>
                        <p class="pre-hint">1. Lade zuerst die Test-Datei herunter. Danach wird der Test-Bildschirm hier
                            eingeblendet.</p>
                        <p class="pre-hint">2. Lade die Datei im Editor hoch (siehe Bild).</p>
                        <img :src="whisker_instruction_1" class="instruction-img" />
                        <p class="pre-hint">3. Wechsle dann in den Tab „Mein Projekt“ und starte den Test.</p>
                        <img :src="whisker_instruction_2" class="instruction-img" />
                        <ProjectLinkButton :url="s.projectUrl" class="pre-download-btn" @downloaded="markDownloaded"
                            @click="markDownloaded" />
                    </div>
                </div>

                <template v-else>
                    <div class="subtasks-bar" v-if="s.exercises?.length">
                        <SubtaskList :items="s.exercises" />
                    </div>

                    <div class="content-row">
                        <iframe ref="frameRef" :src="s.iframeSrc" class="iframe" allowfullscreen :key="s.reloadKey" />
                        <div class="hint-container">
                            <HintWithSolution :hints="s.hints || []" :exerciseId="s.exerciseId" />
                            <div class="image-container" v-if="s.images?.length">
                                <ScratchImage :imageUrls="s.images" :height="'120px'" class="scratch-image" />
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { useOverlayIframe } from '@/composables/useOverlayIframe'
import ProjectLinkButton from './ProjectLinkButton.vue'
import ScratchImage from './ScratchImage.vue'
import SubtaskList from './SubtaskList.vue'
import HintWithSolution from './HintWithSolution.vue'

import instructionImg from '@/assets/download_instruction.png'
import whisker_instruction_1 from '@/assets/whisker_instruction_1.png'
import whisker_instruction_2 from '@/assets/whisker_instruction_2.png'

const { state: s, closeOverlay, markDownloaded } = useOverlayIframe()

</script>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
    transform: translateY(100%);
    transition: all .4s ease;
}

.overlay.active {
    background: rgba(0, 0, 0, .5);
    pointer-events: auto;
    transform: translateY(0);
}

.panel {
    background: transparent;
    width: 98vw;
    height: 99vh;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
}

.subtasks-bar {
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 8px 12px;
    height: auto;
}

.subtasks-bar :deep(li) {
    font-size: 0.8rem;
    line-height: 1;
    margin-top: 2px;
}

.floating-close-btn {
    position: fixed;
    top: 20px;
    right: 50px;
    padding: .6rem;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 5px;
    z-index: 1100;
    cursor: pointer;
}

.pre-download-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

.content-row {
    display: flex;
    flex: 1;
    min-height: 0;
}

.iframe {
    flex: 1;
    width: 100%;
    border: none;
}

.hint-container {
    width: 300px;
    background: #f5f5f1;
    border-left: 3px solid #000;
    overflow-y: auto;
    padding: 10px;
    color: #000;
    padding-top: 5rem;

}

.pre-screen {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
}

.pre-screen-card {
    width: min(680px, 92vw);
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 14px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .06);
    display: flex;
    flex-flow: column;
    align-items: center;
}

.instruction-img {
    width: 660px;
}

.pre-hint {
    margin: 0 0 1.25rem 0;
    color: #333;
    line-height: 1.5;
}

.image-container {
    display: flex;
    flex-flow: column;
    margin-top: 1rem;
}

.scratch-image {
    margin-bottom: 1rem;
}
</style>
