<template>
    <ExerciseShell>
        <template #default>
            <h2 v-if="sectionTitle">{{ sectionTitle }}</h2>
            <h3>{{ title }}</h3>
            <p v-if="description && description.trim()">{{ description }}</p>

            <component v-for="(block, i) in blocks" :key="i" :is="registry[block.type]" v-bind="block.props" />
        </template>

        <template #sidebar>
            <HintList v-if="hints?.length" :items="hints" />
        </template>
    </ExerciseShell>
</template>

<script setup>
import ExerciseShell from './ExerciseShell.vue'
import SubTaskList from './SubTaskList.vue'
import ScratchContent from './ScratchContent.vue'
import StudentAnswer from './StudentAnswer.vue'
import ScratchEditor from './ScratchEditor.vue'
import Hint from './hint.vue'

const props = defineProps({
    sectionTitle: String,
    title: { type: String, required: true },
    description: String,
    hints: Array,                 // [{title, hint}, ...]
    blocks: { type: Array, required: true } // Schema-Array (s.u.)
})

const registry = {
    subTasks: SubTaskList,
    scratchContent: ScratchContent,
    answer: StudentAnswer,
    editor: ScratchEditor,
    hint: Hint
}
</script>

<style scoped></style>