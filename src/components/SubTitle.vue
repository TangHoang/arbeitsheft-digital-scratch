<template>
    <div class="title-hint-container">
        <h3> {{ subTitle }}</h3>
        <div class="hint-container" v-if="items.length > 0">
            <Hint :title="'Hinweis'" :items=items />
        </div>
    </div>
</template>

<script setup>
import Hint from './Hint.vue';
const props = defineProps({
    subTitle: String,
    items: {
        type: Array,
        default: () => []
    },

})
</script>

<style>
.title-hint-container {
    display: flex;
    flex-flow: row;
    position: relative;
}

.hint-container {
    position: absolute;
    top: 30px;
    right: -0px;
    width: 300px;
}
</style>