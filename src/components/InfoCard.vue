<template>
    <section class="info-card" :class="variant">
        <div class="card-header">
            <h1 v-if="variant === 'orange' && title" class="card-title">{{ title }}</h1>
            <h2 v-else-if="title" class="card-title">{{ title }}</h2>
            <StandaloneIntroBtn v-if="showIntro" class="show-intro-link" />
        </div>

        <div class="card-content">
            <slot />
        </div>
    </section>
</template>

<script setup>
import StandaloneIntroBtn from './StandaloneIntroBtn.vue';
const props = defineProps({
    title: { type: String, default: '' },
    variant: {
        type: String,
        default: 'white',
        validator: v => ['orange', 'white', 'purple'].includes(v)
    },
    showIntro: { type: Boolean, default: false }
})
</script>

<style scoped>
.card-header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
}

.info-card {
    margin: 0 0 2rem;
    padding: 1rem 2rem 3rem;
    border-radius: 24px;
    max-width: 1200px;
    width: 90%;

    text-align: left;
    color: #3b2d0a;

    background: var(--bg, #fff);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
}

.card-title {
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.2;
    color: #b85d00;
}

.show-intro-link {
    margin-left: auto;
}

h1.card-title {
    font-size: 1.8rem;
}

h2.card-title {
    font-size: 1.4rem;
}

.white {
    --bg:
        radial-gradient(circle at 15% 20%, #fdf7f0 0, transparent 45%),
        radial-gradient(circle at 85% 30%, #fffcf7 0, transparent 50%),
        radial-gradient(circle at 50% 80%, #fff7ee 0, transparent 40%),
        #fffcf9;
}

.purple {
    --bg:
        radial-gradient(circle at 15% 20%, #fdfbf0 0, transparent 45%),
        radial-gradient(circle at 85% 30%, #fffdf7 0, transparent 50%),
        radial-gradient(circle at 50% 80%, #f7fcee 0, transparent 40%),
        #fefffb;
}

.orange {
    --bg:
        radial-gradient(circle at 15% 20%, #fdf2e0 0, transparent 45%),
        radial-gradient(circle at 85% 30%, #fff7f0 0, transparent 50%),
        radial-gradient(circle at 50% 80%, #fff2e5 0, transparent 40%),
        #fffaf5;
}
</style>
