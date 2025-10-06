import { reactive, readonly } from 'vue'

const state = reactive({
    open: false,
    showIframe: false,
    hasOpened: true,
    type: 'editor',
    iframeSrc: 'https://scratch.fim.uni-passau.de/scratch/',
    projectUrl: '',
    images: null,
    exercises: null,
    hints: null,
})

function openOverlay(opts = {}) {
    // iframeSrc nur setzen, wenn noch leer, um Reload zu verhindern
    if (opts.iframeSrc && !state.iframeSrc) state.iframeSrc = opts.iframeSrc
    if (opts.projectUrl) state.projectUrl = opts.projectUrl
    if (opts.type) state.type = opts.type
    state.images = opts.images ?? state.images
    state.exercises = opts.exercises ?? state.exercises
    state.hints = opts.hints ?? state.hints

    state.open = true
    state.showIframe = state.hasOpened
}

function closeOverlay() { state.open = false }
function markDownloaded() {
    state.showIframe = true
    state.hasOpened = true
}

export function useOverlayIframe() {
    return {
        state: readonly(state),
        openOverlay,
        closeOverlay,
        markDownloaded,
    }
}
