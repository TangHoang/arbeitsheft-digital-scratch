<template>
    <div class="example">
        <div class="example-title" @click="open = !open">
            Beispiel öffnen {{ open ? '▲' : '▼' }}
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
    min-width: 80%;
    color: #111;
    margin: 2rem 0;
    display: flex;
    flex-flow: column;
    align-items: center;

}

.example-title {
    display: inline-block;
    background: linear-gradient(135deg, #b638ca, #9b46e5);
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-width: 180px;
    margin-bottom: 0.5rem;

}

.example-body {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 18px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

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
