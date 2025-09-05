<template>
    <div class="title-hint-container">
        <div class="title-container">
            <h3> {{ subTitle }}</h3>
        </div>
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
    margin-top: 40px;
}

.title-container {
    color: #b65e00
}

.hint-container {
    position: absolute;
    top: 20px;
    right: -40px;
    width: 300px;
}

h3 {
    margin: 0px 0px;
}
</style>