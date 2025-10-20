<template>
    <section class="rating-card">
        <h3 class="rating-title">{{ title }}</h3>

        <div v-for="(question, i) in questions" :key="i" class="rating-row">
            <div class="rating-label">{{ question }}</div>

            <div class="star-rating" @mouseleave="hover[i] = 0">
                <button v-for="(star) in stars" :key="starId(i, star)" class="star"
                    :class="{ active: star <= displayValue(i) }" type="button" :title="likertSkala[star - 1]"
                    @mouseenter="hover[i] = star" @click="onRate(i, star)">
                    <svg viewBox="0 0 20 20">
                        <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8-4.2-4.1 5.8-.8L10 1.5z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="input-box">
            <textarea :answerId="answerId" v-model="studentAnswer" placeholder="Möchtest du noch etwas bemerken?"
                :style="{ height, width }"></textarea>
        </div>

    </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { getStudentId } from '../lib/identity'

const props = defineProps({
    title: { type: String, default: 'Bewerte dieses Kapitel' },
    modelValue: { type: Array, default: () => [] },
    chapterId: { type: String, required: true },
    max: { type: Number, default: 5 },
    questions: {
        type: Array,
        default: () => [
            'Ich fand die Aufgaben interessant und ansprechend.',
            'Die Aufgaben waren genau richtig, weder zu leicht noch zu schwer.',
            'Ich habe die Aufgabenstellungen leicht verstanden.'
        ]
    },
})

const studentId = getStudentId();
const STORAGE_KEY = `app:ratings:${studentId}`

const emit = defineEmits(['update:modelValue', 'rate'])

const likertSkala = ["stimme gar nicht zu", "stimme nicht zu", "teils, teils", "stimme zu", "stimme voll und ganz zu"]

const stars = computed(() => Array.from({ length: props.max }, (_, i) => i + 1))
const restored = loadRating(props.chapterId)
const local = ref(
    initLocal(restored.answers ?? props.modelValue, props.questions)
)
const hover = ref(props.questions.map(() => 0))
const studentAnswer = ref(restored.text || '')



function loadAllRatings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} }
    catch { return {} }
}

function saveAllRatings(ratings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings, null, 2))
}

function loadRating(chapterId) {
    const all = loadAllRatings()
    console.log(all)
    return all[chapterId] || { answers: null, text: '' }
}

function saveRating(chapterId, answers, text) {
    const all = loadAllRatings()
    all[chapterId] = { answers, text }
    saveAllRatings(all)
}

watch(local, v => emit('update:modelValue', v), { deep: true })
watch(studentAnswer, v => {
    saveRating(props.chapterId, local.value, v)
})

function initLocal(base, questions) {
    const out = [...(base || [])]
    for (let i = 0; i < questions.length; i++) if (out[i] == null) out[i] = 0
    return out
}

function displayValue(i) {
    return hover.value[i] || local.value[i] || 0
}

function starId(i, star) {
    return `${props.chapterId}-q${i + 1}-${star}`
}

function onRate(i, value) {
    const updated = [...local.value]
    updated[i] = value
    local.value = updated

    saveRating(props.chapterId, local.value, studentAnswer.value)

    emit('rate', {
        chapterId: props.chapterId,
        index: i,
        value,
        starId: starId(i, value)
    })
}
</script>

<style scoped>
.rating-card {
    border: 1px solid #eaeaea;
    border-radius: 16px;
    padding: 16px 18px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .03);
    display: grid;
    gap: 14px;
    width: 70%;
    margin-bottom: 2rem;
}

.rating-title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
}

.rating-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    margin-bottom: 1rem;
}

.rating-label {
    font-weight: 600;
    line-height: 1.8;
}

.star-rating {
    display: inline-flex;
    gap: 6px;
    align-items: center;
}

.star {
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: #c7c7c7;
    transition: transform 120ms ease, color 120ms ease;
}

.star:hover {
    transform: translateY(-1px) scale(1.05);
}

.star.active {
    color: #f5c518;
}

.star svg {
    width: 100%;
    height: 100%;
    display: block;
    fill: currentColor;
}

.rating-preview {
    display: flex;
    gap: 16px;
    font-size: .9rem;
    color: #555;
    flex-wrap: wrap;
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
</style>
