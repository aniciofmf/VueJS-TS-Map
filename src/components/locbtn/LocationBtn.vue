<template>
	<button v-if="isReady" @click="locationClick" class="btn btn-primary">Go Back to My Location</button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useLocation, useMap } from "@/composables";

export default defineComponent({
	name: "LocationBtn",
	setup() {
		const { userLocation, userLocationReady } = useLocation();
		const { map, isMapReady } = useMap();

		return {
			isReady: computed(() => userLocationReady.value && isMapReady.value),
			locationClick: () => {
				map.value?.flyTo({
					center: userLocation.value!,
					zoom: 14,
				});
			},
		};
	},
});
</script>

<style scoped>
button {
	position: fixed;
	top: 30px;
	right: 30px;
}
</style>
