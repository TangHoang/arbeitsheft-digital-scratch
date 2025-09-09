<template>
    <div>
        <button @click="isOpen = true"
            :class="['open-btn', { 'floating': floating, 'editor': type === 'editor', 'test': type === 'test' }]">
            {{ buttonTitle }}
        </button>

        <div :class="['overlay', { 'active': isOpen }]" @click.self="isOpen = false">
            <ProjectLinkButton :url="projectUrl" class="project-link-btn" />
            <button @click="isOpen = false" class="floating-close-btn">
                Minimieren
            </button>

            <div class="panel">
                <iframe :src="iframeUrl" class="iframe" allowfullscreen></iframe>
                <div class="hint-container">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import hint from './Hint.vue';
import ProjectLinkButton from './ProjectLinkButton.vue'


const isOpen = ref(false);

const props = defineProps({
    projectUrl: {
        type: String,
        required: true
    },
    iframeUrl: {
        type: String,
        required: true,
    },
    floating: Boolean,
    buttonTitle: {
        default: "Editor öffnen",
        type: String,
    },
    type: String,
})

</script>

<style scoped>
.open-btn {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

.test {
    background-color: #3ce756;
}

.open-btn.floating {
    position: fixed;
    bottom: 400px;
    left: 200px;
    animation: pulseAnim 3s infinite ease-in-out;

}

@keyframes pulseAnim {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.project-link-btn {
    position: fixed;
    top: 20px;
    left: 50px;
    padding: 10px 15px;
    background-color: #3ce756;
    color: white;
    border: none;
    border-radius: 5px;
    z-index: 1100;
    cursor: pointer;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);

    /* Verstecken im minimierten Zustand */
    opacity: 0;
    pointer-events: none;
    transform: translateY(100%);
    transition: all 0.4s ease;
}

.overlay.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.panel {
    background: white;
    width: 98%;
    height: 85%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
}

.floating-close-btn {
    position: fixed;
    top: 20px;
    right: 50px;
    padding: 0.6rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    z-index: 1100;
    cursor: pointer;
}

.iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.hint-container {
    color: #000000;
    width: 300px;
    background: #f5f5f1;
    border-left: 3px solid #000000;
    overflow-y: auto;
    padding: 10px;
}
</style>
