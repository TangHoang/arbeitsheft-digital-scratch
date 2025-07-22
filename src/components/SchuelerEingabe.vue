<template>
    <div class="eingabe-box">
        <label for="loesung">Deine Lösung für b): </label>
        <textarea 
            id="loesung"
            placeholder="Trage hier deine Lösung ein."
            v-model="eingabe"
            >
        </textarea>
    </div>
</template>

<style scoped>
    .eingabe-box {
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