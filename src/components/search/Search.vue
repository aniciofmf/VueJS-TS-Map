<script lang="ts" src="./Search.ts" />

<template>
	<div class="searchContainer">
		<input class="form-control" type="text" placeholder="Search for a Place ..." v-model="searchTerm" />
		<SearchResult />
	</div>
</template>

<style scoped>
.searchContainer {
	position: fixed;
	top: 30px;
	left: 30px;
	background-color: white;
	z-index: 999;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	width: 250px;
	border-radius: 5px;
	overflow: hidden;
	padding: 5px;
}
</style>
