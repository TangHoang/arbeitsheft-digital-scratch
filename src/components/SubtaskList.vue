<template>
    <ol :type="type" :start="start" :class="{ 'no-start': nostart }">
        <li v-for="(t, i) in items" :key="i">{{ t }}</li>
    </ol>
</template>

<script setup>
const props = defineProps({
    items: Array,
    start: { type: Number, default: 1 },
    type: { type: String, default: 'a' },
    nostart: { type: Boolean, default: false },
})
</script>

<style scoped>
.no-start {
    list-style: none;
    padding-left: 0;
}
</style>
