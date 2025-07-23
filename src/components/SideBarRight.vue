<template>
    <aside class="hints-container">
        <div><h3>Hinweise</h3></div>
        <hint :title="'Code starten'" :hint="hinweisRaketeStart"/>
        <hint :title="'y-Variable'" :hint="hinweisRaketeVariable"/>
    </aside>        
        
</template>

<script setup>
    import hint from './hint.vue';

    const hinweisRaketeStart = "Vergiss nicht, auf die grüne Flagge zu klicken."
    const hinweisRaketeVariable = "Die y-Variable kennst du bereits aus Koordinatensystemen im Mathematikunterricht"

</script>

<style scoped>
    .hints-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 15vw;
        background-color: #fff;
        box-sizing: border-box;
        height: 100vh;
        overflow-y: auto;
        text-align: left;
    }

    .hints-container h3 {
        margin-top: 0;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

</style>