<template>
    <ExerciseShell>
        <template #default>
            <h2 v-if="sectionTitle">{{ sectionTitle }}</h2>
            <h3>{{ title }}</h3>
            <p v-if="description && description.trim()">{{ description }}</p>

            <component v-for="(block, i) in blocks" :key="i" :is="registry[block.type]" v-bind="block.props" />
        </template>
    </ExerciseShell>
</template>

<script setup>
import ExerciseShell from './ExerciseShell.vue'
import SubTaskList from './SubtaskList.vue'
import ScratchContent from './ScratchContent.vue'
import StudentAnswer from './StudentAnswer.vue'
import PopUp from './PopUp.vue'
import SubTitle from './SubTitle.vue'
import Hint from './Hint.vue'

const props = defineProps({
    sectionTitle: String,
    title: { type: String, required: true },
    description: String,
    hints: Array,                 // [{title, hint}, ...]
    blocks: { type: Array, required: true }, // Schema-Array (s.u.)
    subTitle: { type: String }
})

const registry = {
    subTasks: SubTaskList,
    scratchContent: ScratchContent,
    answer: StudentAnswer,
    editor: PopUp,
    hint: Hint,
    subTitle: SubTitle,
}
</script>

<style scoped>
p {
    font-size: 1.1rem;
    padding-right: 200px;
    font-weight: 500;
}
</style>