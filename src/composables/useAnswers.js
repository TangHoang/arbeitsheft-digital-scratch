import { ref, watch, onMounted, computed } from 'vue'
import { getStudentId } from '../lib/identity'
const studentId = getStudentId()
const KEY = `app:answers:${studentId}`
const answers = ref({})
let t

export function useAnswers() {
    const read = () => {
        try {
            const raw = localStorage.getItem(KEY)
            if (!raw) return
            const obj = JSON.parse(raw)
            if (obj && typeof obj === 'object') answers.value = obj
        } catch { }
    }

    const write = () => {
        try {
            localStorage.setItem(KEY, JSON.stringify(answers.value))
        } catch { }
    }

    onMounted(read)
    watch(answers, () => {
        if (t) clearTimeout(t)
        t = window.setTimeout(write, 300)
    }, { deep: true })

    function useAnswer(id) {
        return computed({
            get: () => answers.value[id] ?? '',
            set: (val) => { answers.value[id] = val }
        })
    }

    const setAnswer = (id, val) => { answers.value[id] = val }
    const getAnswer = (id) => answers.value[id] ?? ''
    const clearAnswer = (id) => { delete answers.value[id] }

    return { answers, useAnswer, setAnswer, getAnswer, clearAnswer, read }
}
