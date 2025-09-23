<template>
    <div class="answer-wrapper">
        <div class="input-box">
            <textarea :answerId="answerId" v-model="model" placeholder="Trage hier deine Lösung ein."
                :style="{ height, width }"></textarea>
        </div>
        <HintWithSolution :hints="hints" :solution="solution" />
        <div v-if="isVermuten" class="reveal-box">
            <button class="submit-btn" :disabled="!hasAnswer" @click="onRevealClick" aria-disabled="!hasAnswer"
                :title="hasAnswer ? 'Überprüfen' : 'Zum Überprüfen erstmal eine Vermutung verfassen.'">
                {{ hasAnswer ? "Überprüfen" : "Zum Überprüfen erstmal eine Vermutung verfassen." }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useAnswers } from "@/composables/useAnswers"
import HintWithSolution from "./HintWithSolution.vue"

const props = defineProps({
    answerId: { type: String, required: true },
    task: { type: String, required: true },
    scratchJson: { type: Object, required: true },
    comments: { type: String, default: "keine besonderen Kommentare" },
    height: { type: String, default: "200px" },
    width: { type: String, default: "100%" },
    hints: { type: Array },
    solution: { type: String },
    taskType: { type: String, default: "default" }
})

const { useAnswer } = useAnswers()
const model = useAnswer(props.answerId)
const isVermuten = computed(() => props.taskType === "vermuten");
const hasAnswer = computed(() => (model.value ?? "").trim().length > 0);
const emit = defineEmits(["revealScratch"]);
function onRevealClick() {
    if (!hasAnswer.value) return;
    emit("revealScratch", { answerId: props.answerId });
}



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



.reveal-box {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.5rem 0;

}

.submit-btn {
    align-self: flex-start;
    background-color: #4f46e5;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
}

.submit-btn:disabled {
    background-color: #c7c9f7;
    cursor: not-allowed;
}

.submit-btn:not(:disabled):hover {
    background-color: #4338ca;
}
</style>
