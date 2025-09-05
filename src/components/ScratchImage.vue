<template>
    <div class="horizontal-container">
        <img v-if="imageUrls" v-for="url in imageUrls" :src="url" height="300" alt="Bild" class="scratch-image" />
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrls: { type: Array, default: [] }
})
</script>

<style scoped>
.horizontal-container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    height: 300px;
}

.scratch-image {
    border: 1px solid #ccc;
    border-radius: 18px;
    max-width: 430px;
}
</style>
