<template>
	<Map />
	<img alt="Vue logo" class="logo" src="../assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLocation } from "@/composables";
import Map from "@/components/map/Map.vue";

export default defineComponent({
	name: "Home",
	components: { Map },
	setup() {
		useLocation();
	},
});
</script>

<style scoped>
.logo {
	position: fixed;
	bottom: 30px;
	right: 30px;
	width: 50px;
}
</style>
