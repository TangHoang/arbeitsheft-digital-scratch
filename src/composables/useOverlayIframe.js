import { reactive, readonly } from 'vue'

const state = reactive({
    open: false,
    showIframe: null,
    hasOpened: true,
    type: 'editor',
    iframeSrc: 'https://scratch.fim.uni-passau.de/scratch/',
    projectUrl: '',
    images: null,
    exercises: null,
    hints: null,
    exerciseId: 'editor',
})

function openOverlay(opts = {}) {
    if (opts.iframeSrc) state.iframeSrc = opts.iframeSrc
    if (opts.projectUrl) state.projectUrl = opts.projectUrl
    if (opts.type) state.type = opts.type
    state.exerciseId = opts.exerciseId ?? state.exerciseId

    if (!state._openIframeButtonUsedOnce) {
        state.showIframe = false
        state._openIframeButtonUsedOnce = true
    } else {
        state.showIframe = true
    }
    state.images = opts.images ?? state.images
    state.exercises = opts.exercises ?? state.exercises
    state.hints = opts.hints ?? state.hints
    state.open = true
    state.exerciseId = opts.exerciseId
    state.hasOpened = true

}


function closeOverlay() { state.open = false }
function markDownloaded() { state.showIframe = true }

export function useOverlayIframe() {
    return { state: readonly(state), openOverlay, closeOverlay, markDownloaded }
}
