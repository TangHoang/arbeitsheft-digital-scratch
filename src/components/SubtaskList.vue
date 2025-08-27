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
    max-width: 70%;
    list-style: none;
    padding-left: 0.2rem;
    align-items: center;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, .04);

}

li {
    margin-top: 5px;
    font-weight: 500;
}
</style>