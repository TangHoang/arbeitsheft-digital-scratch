<template>
    <section class="rating-card">
        <h3 class="rating-title">Bewerte dieses Kapitel</h3>

        <div class="rating-row">
            <div class="rating-label">{{ questionFun }}</div>
            <div class="star-rating" @mouseleave="hover.fun = 0">
                <button v-for="star in stars" :key="funStarIds[star - 1]" class="star"
                    :class="{ active: star <= displayValue('fun') }" type="button" :data-star-id="funStarIds[star - 1]"
                    :title="`${star} von ${max}`" @mouseenter="hover.fun = star" @click="onRate('fun', star)">
                    <svg viewBox="0 0 20 20">
                        <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8-4.2-4.1 5.8-.8L10 1.5z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="rating-row">
            <div class="rating-label">{{ questionUnderstand }}</div>
            <div class="star-rating" @mouseleave="hover.understand = 0">
                <button v-for="star in stars" :key="understandStarIds[star - 1]" class="star"
                    :class="{ active: star <= displayValue('understand') }" type="button"
                    :data-star-id="understandStarIds[star - 1]" :title="`${star} von ${max}`"
                    @mouseenter="hover.understand = star" @click="onRate('understand', star)">
                    <svg viewBox="0 0 20 20">
                        <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8-4.2-4.1 5.8-.8L10 1.5z" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
    modelValue: { type: Object, default: () => ({ fun: 0, understand: 0 }) },
    chapterId: { type: String, required: true },
    max: { type: Number, default: 5 },
    questionFun: { type: String, default: 'Haben dir die Aufgaben Spaß gemacht?' },
    questionUnderstand: { type: String, default: 'Hast du die Aufgabenstellungen verstanden?' },
    showPreview: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'rate'])

const local = ref({ ...props.modelValue })
watch(() => props.modelValue, v => (local.value = { ...v }))
watch(local, v => emit('update:modelValue', v), { deep: true })

const hover = ref({ fun: 0, understand: 0 })

const stars = computed(() => Array.from({ length: props.max }, (_, i) => i + 1))

const funStarIds = computed(() =>
    Array.from({ length: props.max }, (_, i) => `${props.chapterId}-fun-${i + 1}`)
)
const understandStarIds = computed(() =>
    Array.from({ length: props.max }, (_, i) => `${props.chapterId}-understand-${i + 1}`)
)

function displayValue(key) {
    return hover.value[key] ? hover.value[key] : local.value[key] || 0
}

function onRate(key, value) {
    local.value = { ...local.value, [key]: value }
    const starId = key === 'fun' ? funStarIds.value[value - 1] : understandStarIds.value[value - 1]
    emit('rate', {
        chapterId: props.chapterId,
        question: key,   // 'fun' | 'understand'
        value,           // 1..max
        starId,          // z.B. kapitel-04-fun-4
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
    width: 50%;
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
}

.rating-label {
    font-weight: 600;
    line-height: 1.3;
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
    /* grau */
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
}
</style>
