<template>
    <div>
        <button @click="isOpen = true"
            :class="['open-btn', { 'floating': floating, 'editor': type === 'editor', 'test': type === 'test' }]">
            {{ buttonTitle }}
        </button>

        <div :class="['overlay', { 'active': isOpen }]" @click.self="closeOverlay">

            <button @click="closeOverlay" class="floating-close-btn">Minimieren</button>

            <div class="panel">
                <div v-if="!showIframe && type === 'editor'" class="pre-screen">
                    <div class="pre-screen-card">
                        <h2>Projekt herunterladen</h2>
                        <p class="pre-hint">
                            1. Lade zuerst das Scratch-Projekt herunter. Danach wird der Editor hier eingeblendet.
                        </p>

                        <p class="pre-hint">
                            2. Lade das heruntergeladene Projekt im Editor hoch (siehe Bild).
                        </p>
                        <ProjectLinkButton :url="projectUrl" class="pre-download-btn" @downloaded="onDownloaded"
                            @click="showIframe = true" />
                        <img :src="instructionImg" class="instruction-img"></img>
                    </div>
                </div>

                <div v-if="!showIframe && type === 'test'" class="pre-screen">
                    <div class="pre-screen-card">
                        <h2>Test-Datei herunterladen</h2>
                        <p class="pre-hint">
                            1. Lade zuerst die Test-Datei herunter. Danach wird der Test-Bildschirm hier eingeblendet.
                        </p>

                        <p class="pre-hint">
                            2. Lade die Datei im Editor hoch (siehe Bild).
                        </p>
                        <img :src="whisker_instruction_1" class="instruction-img"></img>
                        <p class="pre-hint">
                            3. Wechsle dann in den Tab Mein Projekt und starte den Test..
                        </p>
                        <img :src="whisker_instruction_2" class="instruction-img"></img>

                        <ProjectLinkButton :url="projectUrl" class="pre-download-btn" @downloaded="onDownloaded"
                            @click="showIframe = true" />


                    </div>
                </div>

                <template v-if="showIframe">
                    <iframe ref="frameRef" :src="iframeUrl" class="iframe" allowfullscreen @load="onIframeLoad" />
                    <div class="hint-container">
                        <p class="hinweis">⚠️ <Strong>Wichtig:</Strong> Stelle die Sprache auf <strong>Deutsch</strong>,
                            indem du auf den
                            Globus 🌐 clickst!
                        </p>
                        <div class="image-container" v-if="images">
                            <ScratchImage :imageUrls="images" :height="'120px'" />
                        </div>

                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import hint from './Hint.vue'
import ProjectLinkButton from './ProjectLinkButton.vue'
import ScratchImage from './ScratchImage.vue'
import instructionImg from '@/assets/download_instruction.png'

import whisker_instruction_1 from '@/assets/whisker_instruction_1.png'
import whisker_instruction_2 from '@/assets/whisker_instruction_2.png'


const isOpen = ref(false)

const props = defineProps({
    projectUrl: { type: String, required: true },
    iframeUrl: { type: String, required: true },
    showIframe: { type: Boolean, default: undefined },
    hasBeenOpenedAlready: { type: Boolean, default: undefined },
    requireDownload: { type: Boolean, default: true },
    floating: Boolean,
    buttonTitle: { default: 'Editor öffnen', type: String },
    images: { type: Array },
    type: String,
})

// Emits für 2-Way, falls der Parent v-model nutzt
const emit = defineEmits(['update:showIframe', 'update:hasBeenOpenedAlready'])

// Interner Fallback, wenn Parent nichts liefert
const _showIframe = ref(false)
const _hasOpened = ref(false)

const frameRef = ref(null)
let tapMo = null
let readyPoll = null

function onIframeLoad() {
    const iframe = frameRef.value
    console.log('[overlay] iframe load fired', { src: iframe?.src })

    // Same-Origin-Zugriff
    let win, doc
    try {
        win = iframe?.contentWindow
        doc = iframe?.contentDocument
    } catch (e) {
        console.warn('[overlay] Same-Origin blockiert?', e)
        return
    }
    if (!win || !doc) {
        console.warn('[overlay] Kein Zugriff auf contentWindow/contentDocument')
        return
    }

    // Warten bis Whisker initialisiert ist (nach Redirect/Skripten)
    if (readyPoll) clearInterval(readyPoll)
    readyPoll = setInterval(() => {
        const ok = !!win.Whisker && doc.getElementById('run-all-tests')
        if (!ok) return

        clearInterval(readyPoll)
        console.log('[overlay] Whisker ready, Hook setzen')

        // 1) Callback für _generateResults
        win.messageServantCallback = ({ summary }) => {
            const passedCount = Number(summary?.passed ?? 0)
            const failedCount = Number(summary?.failed ?? 0)
            const allPassed = failedCount === 0 && passedCount > 0
            console.log('[Whisker summary]', { passedCount, failedCount, allPassed, raw: summary })
        }

        // 2) TAP-Fallback beobachten
        const tapPre = doc.querySelector('#output-run pre.output-content')
        if (tapPre) {
            if (tapMo) tapMo.disconnect()
            tapMo = new MutationObserver(() => {
                const txt = tapPre.textContent || ''
                const p = (txt.match(/(^|\n)\s*ok\b/gi) || []).length
                const f = (txt.match(/(^|\n)\s*not\s+ok\b/gi) || []).length
                if (p + f > 0) {
                    console.log('[Whisker TAP]', { passedCount: p, failedCount: f, allPassed: f === 0 && p > 0 })
                    emit('test-status', { allPassed: f === 0 && p > 0, passedCount: p, failedCount: f })
                }
            })
            tapMo.observe(tapPre, { childList: true, subtree: true, characterData: true })
        } else {
            console.log('[overlay] Kein TAP <pre> gefunden (noch nicht sichtbar?)')
        }
    }, 100)
}

onBeforeUnmount(() => {
    if (tapMo) tapMo.disconnect()
    if (readyPoll) clearInterval(readyPoll)
})

// Nutzt Prop wenn gesetzt, sonst internen State
const showIframe = computed({
    get: () => props.showIframe ?? _showIframe.value,
    set: v => {
        if (props.showIframe !== undefined) emit('update:showIframe', v)
        else _showIframe.value = v
    }
})
const hasOpened = computed({
    get: () => props.hasBeenOpenedAlready ?? _hasOpened.value,
    set: v => {
        if (props.hasBeenOpenedAlready !== undefined) emit('update:hasBeenOpenedAlready', v)
        else _hasOpened.value = v
    }
})

function closeOverlay() { isOpen.value = false }

function onDownloaded() {
    showIframe.value = true
    hasOpened.value = true
}

watch(isOpen, (open) => {
    if (open && hasOpened.value && !props.requireDownload) {
        showIframe.value = true
    } else if (open && hasOpened.value && props.requireDownload) {
        showIframe.value = true
    }
})
</script>



<style scoped>
.horizontal-container {
    display: flex;
    flex-flow: row;

}

.open-btn {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

.test {
    background-color: #3ce756;
}

.open-btn.floating {
    position: fixed;
    bottom: 400px;
    left: 200px;
    animation: pulseAnim 3s infinite ease-in-out;
}

@keyframes pulseAnim {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transform: translateY(100%);
    transition: all .4s ease;
}

.overlay.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.panel {
    background: transparent;
    width: 98%;
    height: 85%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: row;
}

.floating-close-btn {
    position: fixed;
    top: 20px;
    right: 50px;
    padding: .6rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    z-index: 1100;
    cursor: pointer;
}

.iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.hint-container {
    color: #000000;
    width: 300px;
    background: #f5f5f1;
    border-left: 3px solid #000000;
    overflow-y: auto;
    padding: 10px;
}

.pre-screen {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background: transparent;
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

.pre-screen-card h2 {
    margin: 0 0 .75rem 0;
}

.pre-hint {
    margin: 0 0 1.25rem 0;
    color: #333;
    line-height: 1.5;
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

.pre-note {
    display: block;
    margin-top: .75rem;
    color: #666;
    font-size: .875rem;
}
</style>
