import { ref } from 'vue'
import { toRaw } from 'vue'

const STORAGE_KEY = 'focusLog'

const focusData = ref(loadData())

function loadData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createEmptyData()
    } catch {
        return createEmptyData()
    }
}

function createEmptyData() {
    return {
        startTime: getCurrentClockTime(),
        startStamp: Date.now(),
        logs: {},
        lastFocus: {}
    }
}

function getCurrentClockTime() {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function saveData() {
    const raw = toRaw(focusData.value)
    console.log(raw)
    const data = {
        startTime: raw.startTime,
        logs: raw.logs,
        lastFocus: raw.lastFocus
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data, null, 2))
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
        console.log("inside logFocus")
        const last = focusData.value.lastFocus[id]
        const lastMs = last ? parseTimeToMs(last) : 0
        const currentMs = Date.now() - focusData.value.startStamp
        const diffMs = currentMs - lastMs

        // Cooldown aka Debounce
        if (last && diffMs < 5 * 60 * 1000) {
            console.log('Log abgebrochen. Cooldown!')
            return
        }

        const currentTime = timeSinceStart()
        console.log("Dieser Log wird nie in der Konsole angezeigt. Hallo!")
        if (!focusData.value.logs[id]) focusData.value.logs[id] = []
        focusData.value.logs[id].push(currentTime)
        focusData.value.lastFocus[id] = currentTime

        saveData()
        console.log(`🕑 Fokus auf ${id} bei ${currentTime}`)
    }

    function parseTimeToMs(str) {
        const [m, s] = str.split(':').map(Number)
        return (m * 60 + s) * 1000
    }

    return { logFocus, initStartTime, focusData }
}
