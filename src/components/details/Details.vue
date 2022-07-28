<template>
	<div v-if="distance" class="detailContainer">
		<div class="col">
			Distance: <strong>{{ distance }} kms</strong>
		</div>
		<div class="col">
			Duration: <strong>{{ duration }} minutes</strong>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMap } from "@/composables/useMap";

export default defineComponent({
	name: "Details",
	setup() {
		const { distance, duration } = useMap();
		return {
			distance,
			duration,
		};
	},
});
</script>

<style scoped>
.detailContainer {
	padding: 10px;
	position: fixed;
	bottom: 40px;
	right: 20px;
	border-radius: 10px;
	background-color: white;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	font-size: 15px;
	width: 250px;
}

strong {
	color: #42b983;
}
</style>
