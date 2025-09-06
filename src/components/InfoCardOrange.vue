<template>
    <section class="info-card">
        <h1 v-if="title">{{ title }}</h1>
        <slot />
    </section>
</template>

<script setup>
const props = defineProps({
    title: { type: String, default: '' },
})
</script>

<style scoped>
.info-card {
    margin: 0 0 2rem;
    padding: 1rem 2rem 3rem;
    border-radius: 24px;
    max-width: 1200px;
    text-align: left;
    color: #3b2d0a;

    background:
        radial-gradient(circle at 15% 20%, #fff7ec 0, transparent 45%),
        radial-gradient(circle at 85% 30%, #fff1df 0, transparent 50%),
        radial-gradient(circle at 50% 80%, #ffeeda 0, transparent 40%),
        #fffaf5;

    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
}

.info-card h1 {
    margin-bottom: 1rem;
    font-size: 2.25rem;
    line-height: 1.2;
    color: #b85d00;
}

.info-card :deep(p) {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.7;
}
</style>
