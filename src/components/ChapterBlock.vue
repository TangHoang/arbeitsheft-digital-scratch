<template>
  <div class="kapitel">
    <h1>{{ title }}</h1>
    <p v-if="description">{{ description }}</p>
    <ExerciseBlock
      v-for="(ex, index) in content"
      :key="index"
      :title="ex.title"
      :description="ex.description"
      :subTasks="ex.subTasks"
      :scratchUrl="ex.scratchUrl"
      :image="ex.image"
      :hints="ex.hints"
    />
  </div>
</template>

<script setup>
import ExerciseBlock from './ExerciseBlock.vue'

const props = defineProps({
  title: String,
  description: {
    String,
    required: false,
    default: "",
  },
  content: Object
})
</script>

<style scoped>
.kapitel {
  width: 100%;
  margin-bottom: 3rem;
  border-bottom: 1px solid #ccc;
}

h1 {
  padding: 0 1rem 0 1.5rem;
  width: 80%;
  margin: 0;
}

p {
  padding: 0 1rem 0 1.5rem;
  width: 80%;
}
</style>

