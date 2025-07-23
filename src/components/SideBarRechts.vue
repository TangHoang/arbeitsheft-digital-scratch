<template>
    <aside class="tipps-box">
        <div><h3>Hinweise</h3></div>
        <HinweisBox :titel="'Code starten'" :hinweis="hinweisRaketeStart"/>
        <HinweisBox :titel="'y-Variable'" :hinweis="hinweisRaketeVariable"/>
    </aside>        
        
</template>

<script setup>
    import HinweisBox from './HinweisBox.vue';

    const hinweisRaketeStart = "Vergiss nicht, auf die grüne Flagge zu klicken."
    const hinweisRaketeVariable = "Die y-Variable kennst du bereits aus Koordinatensystemen im Mathematikunterricht"

</script>

<style scoped>
    .tipps-box {
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

    .tipps-box h3 {
        margin-top: 0;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

</style>