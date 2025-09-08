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
    margin: 0;
    min-width: 60%;
    list-style: none;
    padding-left: 0.2rem;
    align-items: center;
    padding: 0px 16px 14px;

}

li {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #3b2d0a;
    margin-top: 9px;
}
</style>