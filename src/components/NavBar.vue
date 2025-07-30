<template>
    <header class="navbar">
        <div class="navbar-content">
            <div class="project">Masterarbeit</div>
            <div class="info">
                <span>Tang Hoang Griep</span>
                <span>Andre Greubel</span>
                <span>HU Berlin</span>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .navbar {
        height: 60px;
        width: 100%;
        background-color: #fff;
        color: #111;
        display: flex;
        align-items: center;
        z-index: 100;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .navbar-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 2000px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .project {
        font-weight: bold;
        font-size: 1.1rem;
    }

    .info {
        display: flex;
        gap: 1.5rem;
        font-size: 0.95rem;
    }
</style>
