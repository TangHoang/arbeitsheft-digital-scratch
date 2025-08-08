<template>
    <div class="scratch-content">
        <iframe v-if="scratchUrl" :src="scratchUrl" allowtransparency="true" width="485" height="402" frameborder="0"
            scrolling="no" allowfullscreen></iframe>

        <img v-if="imageUrl" :src="imageUrl" alt="Scratch Bild" height="402" class="scratch-image" />
    </div>
</template>

<script setup>
const props = defineProps({
    scratchUrl: { type: String, default: '' },
    imageUrl: { type: String, default: '' }
})
</script>

<style scoped>
.scratch-content {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex-wrap: wrap;
}

.scratch-image {
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
