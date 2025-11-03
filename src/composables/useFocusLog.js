import { ref } from 'vue'
import { toRaw } from 'vue'
import { getStudentId } from '../lib/identity'
import { markDataDirty } from '../lib/sender';

const studentId = getStudentId()
const STORAGE_KEY = `app:focusLog:${studentId}`

const focusData = ref(loadData())

function loadData() {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || createEmptyData()
        if (!data.startStamp || typeof data.startStamp !== 'number') {
            data.startStamp = Date.now()
        }
        if ('lastFocus' in data) delete data.lastFocus
        return data
    } catch {
        return createEmptyData()
    }
}

function createEmptyData() {
    return {
        startTime: getCurrentClockTime(),
        startStamp: Date.now(),
        logs: {}               // { [id]: ["m:ss", "m:ss", ...] }
    }
}

function getCurrentClockTime() {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function saveData() {
    const raw = toRaw(focusData.value)
    const data = {
        startTime: raw.startTime,
        startStamp: raw.startStamp,
        logs: raw.logs
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    markDataDirty()
}

export function useFocusLog() {
    function timeSinceStart() {
        const diff = Date.now() - focusData.value.startStamp
        const m = Math.floor(diff / 60000)
        const s = Math.floor((diff % 60000) / 1000)
        return `${m}:${s.toString().padStart(2, '0')}`
    }

    function initStartTime() {
        focusData.value = createEmptyData()
        saveData()
        console.log('⏱️ Startzeit gesetzt:', focusData.value.startTime)
    }

    function logFocus(id) {
        const list = focusData.value.logs[id] || []
        const last = list.length ? list[list.length - 1] : null

        const currentTime = timeSinceStart()

        if (last) {
            const lastMs = parseTimeToMs(last)
            const currentMs = parseTimeToMs(currentTime)
            const diffMs = currentMs - lastMs
            if (diffMs < 5 * 60 * 1000) {
                return
            }
        }

        if (!focusData.value.logs[id]) focusData.value.logs[id] = []
        focusData.value.logs[id].push(currentTime)

        saveData()
    }

    function parseTimeToMs(str) {
        const [m, s] = str.split(':').map(Number)
        return (m * 60 + s) * 1000
    }

    return { logFocus, initStartTime, focusData }
}
