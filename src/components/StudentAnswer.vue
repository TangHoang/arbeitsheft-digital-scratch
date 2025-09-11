<template>
    <div class="answer-wrapper">
        <div class="input-box">
            <textarea :answerId="answerId" v-model="model" placeholder="Trage hier deine Lösung ein."
                :style="{ height, width }">
            </textarea>
        </div>
    </div>
</template>

<script setup>
import { useAnswers } from '@/composables/useAnswers'

const props = defineProps({
    answerId: { type: String, required: true },
    requiredheight: { type: String, default: '150px' },
    height: { type: String, default: '200px' }
})

const { useAnswer } = useAnswers()
const model = useAnswer(props.answerId)

</script>

<style scoped>
.answer-wrapper {
    display: flex;
    flex-direction: column;
    padding-right: 3rem;
    min-width: 60%;
}

.input-box {
    display: flex;
    flex-direction: column;
    justify-content: left;
}

textarea {
    min-height: 120px;
    resize: vertical;
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    margin-bottom: 1rem;
    border-radius: 18px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

label {
    text-align: left;
}
</style>