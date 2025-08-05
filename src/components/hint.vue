<template>
    <div>
        <div class="hint-box">
            <button @click="visible = !visible" class="toggle-button">
                {{ visible ? "▼" : "▶" }} {{ title }}
            </button>
        </div>

        <div v-if="visible" class="hint-content">
            <div>{{ hint }}</div>
            <div class="image-hint" v-if="imageLink"><img :src=imageLink alt=""></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    title: String,
    hint: String,
    imageLink: String,
})

const visible = ref(false)
</script>

<style scoped>
.toggle-button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    color: #33691e;
    cursor: pointer;
    padding: 0;
    margin-bottom: 0.5rem;
}

.hint-content {
    padding-bottom: 8px;
    padding-left: 18px;
    font-size: 1rem;
}

.image-hint {
    width: auto;
    height: auto;
    padding: 5px 5px;
}

.image-hint img {
    max-width: 100%;
    height: auto;
    display: block;
}
</style>