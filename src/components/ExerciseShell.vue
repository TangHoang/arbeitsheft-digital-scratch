<template>
    <div class="exercise-grid">
        <div class="exercise-content">
            <slot />
        </div>
        <aside class="sidebar">
            <slot name="sidebar" />
        </aside>
    </div>
</template>

<style scoped>
.exercise-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
}

.exercise-content {
    min-width: 0;
    width: 100%;
}

.sidebar {
    min-width: 0;
}
</style>
