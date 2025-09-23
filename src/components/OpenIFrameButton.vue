<template>
    <button class="open-btn" @click="open">{{ buttonTitle }}</button>
</template>

<script setup>
import { useOverlayIframe } from '@/composables/useOverlayIframe'

const props = defineProps({
    buttonTitle: { type: String, default: 'Editor öffnen' },
    projectUrl: { type: String, default: '' },
    type: { type: String, default: 'editor' },
    images: { type: Array, default: () => [] },
    exercises: { type: Array, default: () => [] },
    hints: { type: Array, default: () => [] },
})

const { openOverlay } = useOverlayIframe()

function open() {
    openOverlay({
        projectUrl: props.projectUrl,
        type: props.type,
        images: props.images,
        exercises: props.exercises,
        hints: props.hints,
    })
}
</script>

<style scoped>
.open-btn {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1rem;
    margin-bottom: 1rem;
    width: 140px;
}
</style>
