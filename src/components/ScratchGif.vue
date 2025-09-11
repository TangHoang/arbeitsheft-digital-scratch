<template>
    <div class="vertical-container">
        <div class="scratch-image" @mouseenter="hover = true" @mouseleave="hover = false">
            <img :height="height" :src="hover ? imageUrls[0] : imageUrls[1]" alt="Scratch Bild" class="scratch-img" />
        </div>
        <p>Ziehe deinen Mauszeiger auf das Bild, um das GIF zu starten.</p>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    imageUrls: {
        type: Array,
        required: true,
        validator: (arr) => arr.length === 2
    },
    height: String,
})

const hover = ref(false)
</script>

<style scoped>
.scratch-image {
    width: auto;
    cursor: pointer;
}

.vertical-container {
    display: flex;
    flex-flow: column;
    max-width: 40%;
    align-items: center;
}

p {
    font-size: 0.9rem;
    padding: 0px 10px;
    text-align: center;
    max-width: 60%;
    min-width: 40%;
    color: rgba(0, 0, 0, 0.5);
}
</style>
