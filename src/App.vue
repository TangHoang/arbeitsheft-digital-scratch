<template>
	<div class="layout">
		<div class="nav-wrapper">
			<NavBar />
		</div>
		<div class="content-wrapper">
			<div class="sidebar-wrapper">
				<SideBarLeft />
			</div>
			<div class="main-content">
				<ChapterBlock title="Kontrollstrukturen"
					description="Am Ende dieses Arbeitsheftes wirst du dein eigenes Flappy Bird Spiel programmieren. Damit du das schaffst, lernst du jetzt ein Kontrollstrukturen kennen, die dir helfen werden effektiv zu programmieren."
					:content=chapter_1 />
				<iframe src="https://tanghoang.github.io/whisker-edit/?lng=de" allowtransparency="true" width="1000"
					height="600" frameborder="0" scrolling="no" allowfullscreen></iframe>
				<ChapterBlock title="Projekt: Flappy Bird" description="Test Test Test" :content="chapter_2" />
			</div>
		</div>

	</div>
</template>

<script setup>
import SideBarLeft from './components/SideBarLeft.vue'
import NavBar from './components/NavBar.vue'
import ChapterBlock from "./components/ChapterBlock.vue"
import ScratchEditor from './components/ScratchEditor.vue'

const chapter_1 = [
	{
		title: "Aufgabe 1",
		description: "",
		subTasks_1: [
			'a) Starte das folgende Programm und probiere es aus.',
		],
		subTasks_2: [
			"b) Beschreibe nun, wo in diesem Programm Fallunterscheidungen auftreten."
		],
		scratchUrl: "https://scratch.mit.edu/projects/1200064022/embed",
		image: "raumschiff_code.png",
		hints: [
			{
				title: "Hinweis-Titel",
				hint: "Hinweis-Content"
			}
		],
		answerFieldBool: true,
		projectButtonLink: "",

	},
	{
		title: "Aufgabe 2",
		description: "Die Rakete kann bisher nur nach oben und nach unten fliegen...",
		subTasks_1: [
			'a) Öffne das Scratch Projekt, indem du unten auf den Button clickst.',
			'b) Füge weitere Fallunterscheidungen hinzu, sodass die Rakete auch nach links und rechts fliegen kann.',
			"c) Zusatz: Verhindere, dass die Rakete den Rand verlassen kann."
		],
		projectButtonLink: "",
		scratchEditor: true,
	},
]
const chapter_2 = [
	{
		title: "Aufgabe 5",
		description: "hallo hallo",
		subTasks_1: [
			'Starte das folgende Programm und führe es aus.',
			'Beschreibe, wo Fallunterscheidungen auftreten',
		],
		scratchUrl: "https://scratch.mit.edu/projects/1200064022/embed",
		answerFieldBool: false,

	}
]  
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

.content-wrapper {
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

.main-content {
	padding: 2rem;
	overflow-y: auto;
}
</style>
