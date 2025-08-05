<template>
	<div class="exercise-grid">
		<div class="exercise-content">
			<h2>{{ title }}</h2>
			<p v-if="description">{{ description }}</p>
			<ul>
				<li v-for="(item, index) in subTasks_1" :key="index">
					{{ item }}
				</li>
			</ul>
			<div class="scratch-block">
				<div v-if="scratchUrl" class="scratch-embed">
					<iframe :src="scratchUrl" allowtransparency="true" width="485" height="402" frameborder="0"
						scrolling="no" allowfullscreen></iframe>
				</div>
				<img v-if="image" :src="imageUrl" height="402" class="scratch-image">
			</div>
			<ul v-if="subTasks_2">
				<li v-for="(item, index) in subTasks_2" :key="index">
					{{ item }}
				</li>
			</ul>
		</div>
		<div class="sidebar">
			<hint v-if="hints" v-for="content in hints" :title="content.title" :hint="content.hint" />
		</div>
		<div v-if="scratchEditor">
			<ScratchEditor />
		</div>
		<div v-if="answerFieldBool">
			<StudentAnswer />
		</div>
	</div>
</template>

<script setup>
import hint from './hint.vue';
import StudentAnswer from './StudentAnswer.vue';
import { computed } from 'vue'
import ProjectLinkButton from "./ProjectLinkButton.vue"
import ScratchEditor from './ScratchEditor.vue';

const props = defineProps({
	title: String,
	description: {
		type: String,
		required: false,
		default: "",
	},
	subTasks_1: Array,
	scratchUrl: {
		type: String,
		required: false
	},
	subTasks_2: Array,
	image: {
		type: String,
		required: false
	},
	hints: {
		type: Array,
		required: false
	},
	answerFieldBool: Boolean,
	projectButtonLink: String,
	scratchEditor: Boolean,
})
const imageUrl = computed(() => {
	return props.image ? new URL(`../assets/${props.image}`, import.meta.url).href : ''
})
</script>

<style scoped>
.exercise-grid {
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-template-rows: auto auto;
	width: 100%;
	box-sizing: border-box;
	padding: 0 1.5rem;
	margin-bottom: 20px;
}

.exercise-content {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
}

.exercise-content h2 {
	margin: 0;
	font-size: 1.5rem;
	padding: 0rem 0;
}

.exercise-content ul {
	margin: 0;
	padding-left: 0rem;
	list-style-type: none;
}

.exercise-content li {
	margin: 0;
	padding: 0.2rem 0;

}

.scratch-embed {
	border-radius: 6px;
	overflow: hidden;
	margin-right: 2rem;
}

.scratch-image {
	border-radius: 6px;
}

.scratch-block {
	display: flex;
	flex-direction: row;
	justify-content: left;
	padding: 1rem 0;
}

.sidebar {
	height: 50%;
	margin-top: 100%;
	padding: 0 1.5rem;
}
</style>
