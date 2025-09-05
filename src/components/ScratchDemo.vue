<template>
    <div class="scratch-content">
        <iframe :src="scratchUrl" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no"
            allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
    scratchUrl: { type: String, default: '' }
})
</script>

<style scoped>
.scratch-content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: left;
    flex-wrap: wrap;
}

.scratch-image {
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 430px;
}
</style>
