<template>
    <div class="hinweis-box">
        <button @click="sichtbar = !sichtbar" class="toggle-button">
            {{ sichtbar ? "▼" : "▶" }} {{ titel }}
        </button>
    </div>

    <div v-if="sichtbar" class="hinweis-inhalt">
        {{ hinweis }}
    </div>
</template>

<script setup>
import {ref} from "vue"

const props = defineProps({
    titel: String,
    hinweis: String,
})

const sichtbar = ref(false)
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

    .hinweis-inhalt {
        padding-bottom: 8px;
    }

    li {
        margin-bottom: 0.3rem;
    }
</style>