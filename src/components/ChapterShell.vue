<script setup>
import ExerciseRenderer from './ExerciseRenderer.vue'

const props = defineProps({
    title: String,
    description: String,
    content: Array
})
</script>

<template>
    <div class="kapitel">
        <h1>{{ title }}</h1>
        <p v-if="description">{{ description }}</p>

        <ExerciseRenderer v-for="(exercise, index) in content" :key="index" :sectionTitle="exercise.sectionTitle"
            :title="exercise.title" :description="exercise.description" :hints="exercise.hints"
            :blocks="exercise.blocks" />
    </div>
</template>

<style scoped>
.kapitel {
    width: 100%;
    margin-bottom: 3rem;
    padding: 0 1.5rem 0 1.5rem;
}

h1 {
    width: 80%;
    margin: 0;
}

p {
    width: 80%;
}
</style>
