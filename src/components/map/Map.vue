<script lang="ts" src="./Map.ts" />

<template>
	<div v-if="!userLocationReady" class="loadingMap d-flex justify-content-center align-items-center">
		<div class="text-center">
			<h3>Wait please ..</h3>
			<p>Map is loading</p>
		</div>
	</div>
	<div v-show="userLocationReady" class="containerMap" ref="mapElement"></div>
</template>

<style scoped>
.loadingMap {
	position: fixed;
	color: white;
	top: 0px;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 9999;
}

.containerMap {
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(68, 67, 67, 0.39);
}
</style>
