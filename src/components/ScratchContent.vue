<template>
    <div class="scratch-content">
        <iframe v-if="scratchUrl" :src="scratchUrl" allowtransparency="true" width="485" height="402" frameborder="0"
            scrolling="no" allowfullscreen></iframe>

        <img v-if="imageUrl" :src="imageUrl" height="402" alt="Scratch Bild" class="scratch-image" />
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
    flex-direction: row;
    gap: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
}

.scratch-image {
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 430px;
}
</style>
