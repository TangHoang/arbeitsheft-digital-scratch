<template>
    <div class="answer-wrapper">
        <div class="input-box">
            <textarea id="answer" placeholder="Trage hier deine Lösung ein." v-model="input" :style="{ height, width }">
            </textarea>
        </div>
        <!-- 
        <div class="hints-container">
            <Hint :title="'TODO'" :hint="'TODO'" />
        </div>
        -->
    </div>

</template>

<script setup>
import Hint from './Hint.vue';
const props = defineProps({
    height: { type: String, default: '150px' },
    width: { type: String, default: '100%' }
})
</script>

<style scoped>
.answer-wrapper {
    display: flex;
    flex-direction: column;
    padding-right: 3rem;
    min-width: 60%;
}

.input-box {
    display: flex;
    flex-direction: column;
    justify-content: left;
}

textarea {
    min-height: 120px;
    resize: vertical;
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    margin-bottom: 1rem;
    border-radius: 18px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

label {
    text-align: left;
}
</style>