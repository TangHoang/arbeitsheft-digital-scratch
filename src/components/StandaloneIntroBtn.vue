<template>
    <button v-if="!$route.meta.standalone" @click="openScratchIntroStandalone" class="standalone-link">▶
        Scratch-Einführung öffnen
    </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function openScratchIntroStandalone() {
    const { href } = router.resolve({ name: 'scratch-einfuehrung-standalone' })
    window.open(href, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.standalone-link {
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: #0071e3;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.standalone-link:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    color: #004ba8;
}

.standalone-link:active {
    color: #002f6c;
}
</style>
