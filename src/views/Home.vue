<template>
	<Map />
	<Search />
	<LocationBtnVue />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLocation } from "@/composables";
import Map from "@/components/map/Map.vue";
import LocationBtnVue from "@/components/locbtn/LocationBtn.vue";
import Search from "@/components/search/Search.vue";

export default defineComponent({
	name: "Home",
	components: { Map, LocationBtnVue, Search },
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
