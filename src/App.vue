<template>
	<div id="app">
		<MainComponent />
		<FormTextArea />
	</div>
</template>

<script>
import MainComponent from '@/views/MainComponent.vue';
import FormTextArea from '@/components/FormTextArea.vue';
export default {
	// eslint-disable-next-line vue/name-property-casing
	name: 'app',
	components: {
		MainComponent,
		FormTextArea
	}
};
</script>

<style lang="scss">
html,
body {
	box-sizing: border-box;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 6rem;
	display: flex;
	flex-direction: column;
}
</style>
