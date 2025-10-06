<template>
    <div class="example">
        <div class="example-title" @click="open = !open">
            Beispiel {{ open ? '▲' : '▼' }}
        </div>

        <transition name="fade">
            <div v-show="open" class="example-body">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.example {
    padding: 10px 0;
    background: transparent;
    margin-bottom: 1rem;
    width: 100%;
}

.example-title {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    margin-bottom: 5px;
    font-size: 1.2rem;
}

.example-body {
    display: flex;
    flex-flow: column;
    align-items: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
