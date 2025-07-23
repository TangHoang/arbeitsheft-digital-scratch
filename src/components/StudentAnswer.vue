<template>
    <div class="input-box">
        <label for="answer">Deine Lösung für b): </label>
        <textarea 
            id="answer"
            placeholder="Trage hier deine Lösung ein."
            v-model="input"
            >
        </textarea>
    </div>
    <div class="hints-container">
        <hint :title="'Hinweis'" :hint="'In welche Richtungen kann das Raumschiff fliegen?'"/>
    </div>
</template>

<script setup>
    import hint from './hint.vue';
</script>

<style scoped>
    .input-box {
        display: flex;
        flex-direction: column;
        justify-content: left;
        padding: 0 100px;
    }

    .hints-container {
        padding: 0 100px;
    }

    textarea {
        min-height: 120px;
        resize: vertical;
        padding: 0.5rem;
        font-family: inherit;
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;

    }

    label {
        text-align: left;
    }
</style>