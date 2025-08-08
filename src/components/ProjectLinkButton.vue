<template>
    <a :href="url" download class="project-button">
        Datei ↓
    </a>
</template>

<script setup>
const props = defineProps({
    url: {
        type: String,
    }
})
</script>

<style scoped>
.project-button {
    display: inline-block;
    width: auto;
    color: #111;
    padding: 0.6rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.1s ease-in-out;
    text-align: left;
}

.project-button:hover {
    color: rgb(17, 78, 170);
}
</style>