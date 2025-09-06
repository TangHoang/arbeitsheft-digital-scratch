<template>
    <div class="horizontal-container">
        <Image v-if="imageUrls" v-for="url in imageUrls" :src="url" :height="height" alt="Bild" class="scratch-image"
            preview />
    </div>
</template>

<script setup>
import Image from 'primevue/image';
const props = defineProps({
    imageUrls: { type: Array, default: [] },
    height: String,
})
</script>

<style scoped>
.horizontal-container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    height: auto;
}

.scratch-image {
    border-radius: 2px;
    width: auto;
    margin-right: 8px;
}
</style>
