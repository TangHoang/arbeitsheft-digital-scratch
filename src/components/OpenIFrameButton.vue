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
    display: inline-block;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-width: 160px;
    margin-bottom: 0.5rem;
}

.open-btn:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.open-btn:active {
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
</style>
