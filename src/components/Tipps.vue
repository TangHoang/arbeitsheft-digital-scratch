<template>
    <aside class="tipps-box">
        <div class="sidebar-content">
            <h3>💡 Hinweis</h3>
            <ul>
                <li> Die y-Variable kennt ihr bereits aus dem Mathematikunterricht bei Koordinatensystemen.</li>
            </ul>
        </div>
    </aside>        
        
</template>

<style scoped>
    .tipps-box {
        width: 20vw;
        background-color: #fff;
        box-sizing: border-box;
        height: 100vh;
        overflow-y: auto;
        text-align: left;
        padding: 1.5rem;

    }

    .tipps-box h3 {
        margin-top: 0;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .tipps-box ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .tipps-box li {
        margin-bottom: 0.75rem;
        line-height: 1.4;
        padding: 0 25px;
        font-size: 0.8rem;
    }
    .sidebar-content {
        position: fixed;
        top: 20%;
        left: 50;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>