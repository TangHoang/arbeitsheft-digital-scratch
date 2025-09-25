<template>
    <div class="primm-label">Coden</div>
    <InfoCard variant="white" :showIntro="true">
        <div class="exercise-grid">
            <div class="exercise-content">
                <slot />
            </div>
        </div>
    </InfoCard>

</template>

<script setup>
import InfoCard from '../InfoCard.vue';
</script>


<style scoped>
.primm-label {
    font-weight: 800;
    padding-left: 1rem;
    font-style: italic;
}

.exercise-grid {
    display: grid;
    grid-template-columns: 5fr;
    gap: 1.5rem;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.exercise-content {
    min-width: 0;
    width: 100%;
}

.sidebar {
    min-width: 0;
    height: 50%;
    align-self: center;
}
</style>