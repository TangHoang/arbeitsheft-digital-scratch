<template>
	<div class="layout">
		<div class="nav-wrapper">
			<NavBar />
		</div>
		<div class="content-grid">
			<div class="main">
				<RouterView />
			</div>
			<div></div>
			<NextChapterBtn :routeName="$route.name" />
		</div>
		<SideBarLeft />
	</div>
</template>

<script setup>
import SideBarLeft from './components/SideBarLeft.vue'
import NavBar from './components/NavBar.vue'
import NextChapterBtn from './components/NextChapterBtn.vue';

</script>

<style>
.layout {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	background-color: hsla(190, 0%, 93%, 1);
	background-image:
		radial-gradient(at 49% 50%, hsla(66, 77%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 27% 49%, hsla(38, 91%, 92%, 1) 0px, transparent 50%),
		radial-gradient(at 92% 10%, hsla(22, 100%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 6% 10%, hsla(75, 100%, 97%, 1) 0px, transparent 50%),
		radial-gradient(at 6% 90%, hsla(22, 100%, 96%, 1) 0px, transparent 50%),
		radial-gradient(at 93% 96%, hsla(69, 100%, 96%, 1) 0px, transparent 50%),
		radial-gradient(at 65% 38%, hsla(194, 79%, 93%, 1) 0px, transparent 50%),
		radial-gradient(at 86% 41%, hsla(22, 81%, 93%, 1) 0px, transparent 50%);
}

.nav-wrapper {
	height: 60px;
	width: 100%;
	flex-shrink: 0;
}

.content-grid {
	display: grid;
	height: 100%;
	overflow: hidden;
	margin-bottom: 10rem;
}

.sidebar-wrapper {
	width: 20%;
	padding: 1rem;
	overflow-y: auto;
}

.main {
	padding: 2rem;
	overflow-y: auto;
	display: flex;
	flex-flow: column;
	align-items: center;
}
</style>
