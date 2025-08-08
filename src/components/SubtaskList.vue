<template>
    <ul>
        <li v-for="(t, i) in items" :key="i">{{ t }}</li>
    </ul>
</template>

<script setup>
const { items } = defineProps({ items: Array })
</script>

<style scoped>
ul {
    list-style: none;
    padding-left: 0.2rem;
}
</style>