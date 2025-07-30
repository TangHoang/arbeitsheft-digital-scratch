<template>
    <div class="answer-wrapper">
        <div class="input-box">
            <textarea 
                id="answer"
                placeholder="Trage hier deine Lösung für b) ein."
                v-model="input"
                >
            </textarea>
        </div>
        <div class="hints-container">
            <hint :title="'Hinweis'" :hint="'In welche Richtungen kann das Raumschiff fliegen?'"/>
        </div>
    </div>
    
</template>

<script setup>
    import hint from './hint.vue';
</script>

<style scoped>
    .answer-wrapper {
        display: flex;
        flex-direction: column;
        padding-right: 1.5rem;
        padding-bottom: 2rem;
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
        margin-top: 0.5rem;
        margin-bottom: 1rem;

    }

    label {
        text-align: left;
    }
</style>