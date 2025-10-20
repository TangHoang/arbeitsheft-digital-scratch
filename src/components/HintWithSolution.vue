<template>
    <div class="hints-with-solution" :class="layout">
        <div class="hint-row" role="tablist">
            <template v-if="props.hints && props.hints.length">
                <button v-for="(h, i) in hints" :key="getHintId(i)" class="hint-chip boxy"
                    :class="{ active: activeKey === i, read: read.has(i) }" role="tab" @click="toggle(i)">
                    <span class="label">{{ h.title || `Hinweis ${i + 1}` }}</span>
                    <span class="arrow" :class="{ open: activeKey === i }">▼</span>
                </button>
            </template>

            <button v-if="hasSolution" class="hint-chip boxy solution-chip"
                :class="{ active: activeKey === 'solution', disabled: requireHints && !allRead, ready: !requireHints || allRead, open: activeKey === 'solution' }"
                :disabled="requireHints && !allRead" role="tab" :aria-selected="activeKey === 'solution'"
                :aria-disabled="requireHints && !allRead" @click="onSolutionChip()">
                <span class="label">Lösung</span>
                <span class="arrow" :class="{ open: activeKey === 'solution' }">▼</span>
            </button>
        </div>

        <Transition name="fade">
            <div v-if="activeKey !== null" class="hint-panel boxy" role="tabpanel">
                <div class="space-y-3">
                    <template v-if="typeof activeKey === 'number'">
                        <div class="hint-content">
                            <slot :name="`hint-${activeKey}`">
                                <p v-html="currentHint?.content"></p>
                            </slot>
                        </div>
                        <div v-if="currentHint?.img">
                            <Image :src="currentHint.img.src" :height="'250px'"
                                :alt="currentHint.img.alt || `Bild ${Number(activeKey) + 1}`"
                                :preview="currentHint.img.preview !== false" />
                            <small v-if="currentHint.img.caption" class="text-sm opacity-70">{{
                                currentHint.img.caption }}</small>
                        </div>


                    </template>

                    <template v-else-if="hasSolution">
                        <div v-if="solutionImg">
                            <Image :src="solutionImg.src" :alt="solutionImg.alt || 'Lösungsbild'"
                                :preview="solutionImg.preview !== false" />
                            <small v-if="solutionImg.caption" class="block text-sm opacity-70">{{ solutionImg.caption
                                }}</small>
                        </div>
                        <div v-if="$slots.solution">
                            <slot name="solution" />
                        </div>
                        <div v-else v-html="solution"></div>
                    </template>
                </div>
            </div>
        </Transition>

        <div class="mt-2" v-if="requireHints && hasSolution && !allRead">
            <small class="opacity-70">Lies zuerst alle Hinweise ({{ readCount }} / {{ hints.length }}), um die Lösung zu
                öffnen.</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, useSlots } from 'vue'
import { getStudentId } from '../lib/identity'
import { useRoute } from 'vue-router'
import Image from 'primevue/image'

export interface HintImage {
    src: string
    alt?: string
    caption?: string
    preview?: boolean
}
export interface HintItem {
    id?: string
    title?: string
    content?: string
    img?: HintImage
}

const props = defineProps<{
    hints?: HintItem[]
    chapter?: string
    exerciseId?: string
    solution?: string
    solutionImg?: HintImage | null
    autoOpenFirst?: boolean
    confirmMessage?: string
    layout?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits<{
    (e: 'all-read'): void
    (e: 'revealed'): void
}>()

const studentId = getStudentId();
const LS_KEY = `app:hintUsage:${studentId}`
const slots = useSlots()

function loadHintUsage(): Record<string, true> {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}') } catch { return {} }
}
function saveHintUsage(data: Record<string, true>) {
    localStorage.setItem(LS_KEY, JSON.stringify(data))
}

function getHintId(i: number) {
    const customId = props.hints?.[i]?.id || `hint-${i + 1}`
    return `${props.exerciseId}/${customId}`
}

const hasSolution = computed(() => Boolean(props.solution || props.solutionImg || !!slots.solution))
const requireHints = computed(() => !!props.hints?.length)
const layout = computed(() => props.layout ?? 'horizontal')

const activeKey = ref<number | 'solution' | null>(
    props.autoOpenFirst && props.hints?.length ? 0 : null
)
const read = ref<Set<number>>(new Set(
    props.autoOpenFirst && props.hints?.length ? [0] : []
))
const solutionRevealedOnce = ref(false)

watch(
    () => props.hints,
    () => {
        const usage = loadHintUsage()
        const newRead = new Set<number>()
        for (let i = 0; i < (props.hints?.length ?? 0); i++) {
            if (usage[getHintId(i)]) newRead.add(i)
        }
        if (!newRead.size && props.autoOpenFirst && props.hints?.length) {
            newRead.add(0)
            activeKey.value = 0
        } else if (!props.hints?.length) {
            activeKey.value = null
        }
        read.value = newRead
        solutionRevealedOnce.value = false
    },
    { immediate: true, deep: true }
)

const currentHint = computed(() =>
    typeof activeKey.value === 'number' && props.hints
        ? props.hints[activeKey.value]
        : null
)
const readCount = computed(() => read.value.size)
const allRead = computed(() => !!props.hints && read.value.size >= props.hints.length && props.hints.length > 0)
watch(allRead, (v) => v && emit('all-read'))

function toggle(i: number) {
    activeKey.value = activeKey.value === i ? null : i
    if (activeKey.value === i) {
        read.value.add(i)
        const usage = loadHintUsage()
        usage[getHintId(i)] = true
        saveHintUsage(usage)
    }
}

function onSolutionChip() {
    if (!hasSolution.value) return
    if (requireHints.value && !allRead.value) return
    if (solutionRevealedOnce.value) {
        activeKey.value = 'solution'
        return
    }
    const confirmed = window.confirm(props.confirmMessage ?? 'Willst du die Lösung wirklich sehen?')
    if (confirmed) {
        activeKey.value = 'solution'
        solutionRevealedOnce.value = true
        emit('revealed')
    }
}
</script>


<style scoped>
.boxy {
    border-radius: 0.4rem;
}

.hint-row.horizontal {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: stretch;
}

.hint-row.vertical {
    display: grid;
    gap: 0.5rem;
}

.hint-chip {
    appearance: none;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    padding: 0.55rem 0.8rem;
    cursor: pointer;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.hint-chip:hover {
    background: #f3f4f6;
}

.hint-chip.active {
    border-color: #4f46e5;
    background: #eef2ff;
}

.hint-chip.read {
    opacity: 0.95;
}

.hint-chip.disabled {
    opacity: 0.55;
    cursor: not-allowed;
}

.solution-chip.ready {
    border-color: #10b981;
}

.label {
    line-height: 1;
}

.arrow {
    transition: transform 150ms ease;
    display: inline-block;
}

.arrow.open {
    transform: rotate(180deg);
}

.hint-panel {
    border: 1px solid #e5e7eb;
    padding: 0.9rem 1rem;
    margin-top: 0.5rem;
    background: #fff;
}

.hint-image {
    width: 100px;
}

.space-y-3>*+* {
    margin-top: 0.75rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

.opacity-70 {
    opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 180ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>