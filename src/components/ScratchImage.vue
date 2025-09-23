<template>
    <div v-if="orientation === 'horizontal'" class="horizontal-container">
        <Image v-if="imageUrls" v-for="url in imageUrls" :src="url" :height="height" alt="Bild" class="scratch-image"
            preview />
    </div>
    <div v-if="orientation === 'vertical'" class="vertical-container">
        <Image v-if="imageUrls" v-for="url in imageUrls" :src="url" :height="height" alt="Bild" class="scratch-image"
            preview />
    </div>
</template>

<script setup>
import Image from 'primevue/image';
const props = defineProps({
    imageUrls: { type: Array, default: [] },
    height: String,
    orientation: { type: String, default: "horizontal" }
})
</script>

<style scoped>
.horizontal-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
}

.vertical-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
}

.scratch-image {
    border-radius: 3px;
    width: auto;
    margin-right: 8px;
    filter: drop-shadow(0 0 0.75rem rgb(226, 216, 196));
    margin-bottom: 1rem;
}
</style>
