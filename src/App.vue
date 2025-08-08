<template>
	<div class="layout">
		<div class="nav-wrapper">
			<NavBar />
		</div>
		<div class="content-grid">
			<div class="sidebar-wrapper">
				<SideBarLeft />
			</div>
			<div class="main">
				<RouterView />
			</div>
		</div>

	</div>
</template>

<script setup>
import SideBarLeft from './components/SideBarLeft.vue'
import NavBar from './components/NavBar.vue'

</script>

<style>
.layout {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

.nav-wrapper {
	height: 60px;
	width: 100%;
	flex-shrink: 0;
}

.content-grid {
	display: grid;
	grid-template-columns: 20% 80%;
	height: 100%;
	overflow: hidden;
}

.sidebar-wrapper {
	width: 20%;
	padding: 1rem;
	overflow-y: auto;
}

.main {
	padding: 2rem;
	overflow-y: auto;
}
</style>
