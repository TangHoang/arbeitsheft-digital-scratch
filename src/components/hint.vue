<template>
    <div class="hintbox">
        <h4 v-if="title" class="hintbox-title">{{ title }}</h4>

        <ul class="hintlist">
            <li v-for="(item, i) in items" :key="i" class="hint-item">
                <button class="hintitem-toggle" @click="toggle(i)">
                    {{ open[i] ? '▼' : '▶' }} {{ item.title }}
                </button>

                <div class="hintitem-content" :class="{ open: open[i] }"
                    :style="{ '--dur': (item.duration || defaultDuration) + 'ms' }">
                    <p class="hintitem-text">{{ item.text }}</p>
                    <img v-if="item.image" :src="item.image" alt="" class="hintitem-image" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: { type: String, default: '' },
    items: { type: Array, default: () => [] },
    defaultDuration: { type: Number, default: 250 }
})

const open = ref(props.items.map(it => !!it.defaultOpen))

function toggle(i) {
    open.value[i] = !open.value[i]
}
</script>

<style scoped>
.hintbox {
    border: 1px solid #e6eef7;
    border-radius: 10px;
    background: #ffd1a0;
    padding: .75rem .9rem;
    max-width: 400px;
}

.hintbox-title {
    margin: 0 0 .3rem;
    font-size: 1rem;
    font-weight: 700;
    color: #8b631d;
}

.hintlist {
    display: grid;
    gap: .4rem;
    list-style: none;
    padding: 0;
    margin: 0;

}

.hint-item {
    background: #fff;
    border: 1px solid #eef3ff;
    border-radius: 8px;
    overflow: hidden;
}

.hintitem-toggle {
    width: 100%;
    text-align: left;
    background: transparent;
    border: 0;
    padding: .55rem .7rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: #8b631d;
    cursor: pointer;
}

.hintitem-content {
    font-size: 0.7rem;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 .9rem;
    transition:
        max-height var(--dur, 250ms) ease,
        opacity calc(var(--dur, 250ms) * .9) ease;
}

.hintitem-content.open {
    max-height: 500px;
    opacity: 1;
    padding: .4rem .9rem .8rem;
}

.hintitem-text {
    margin: 0 0 .4rem;
    line-height: 1.5;
    font-size: 0.8rem;
}

.hintitem-image {
    max-width: 100%;
    height: auto;
    display: block;
    border: 1px solid #eee;
    border-radius: 6px;
}
</style>
