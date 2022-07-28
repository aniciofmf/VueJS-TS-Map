<script lang="ts" src="./SearchResult.ts" />

<template>
	<div class="alert alert-primary text-center" v-if="loadingPlaces">
		<h5>Loading ...</h5>
		<span>Wait please..</span>
	</div>
	<ul class="list-group mt-3" v-else-if="getPlaces.length > 0">
		<li
			@click="onPlaceClick(place)"
			v-for="place in getPlaces"
			:key="place.id"
			:class="{ active: place.id === activePlace }"
			class="list-group-item list-group-item-action"
			align="left"
		>
			<h5>{{ place.text }}</h5>
			<p>{{ place.place_name }}</p>
			<div align="right">
				<button
					@click.self="getRoutes(place)"
					:class="place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary'"
					class="btn btn-outline-primary btn-sm"
				>
					Visit Place
				</button>
			</div>
		</li>
	</ul>
</template>

<style scoped>
li {
	cursor: pointer;
}

h5 {
	font-size: 15px;
}

p {
	font-size: 10px;
}
</style>
