<template>
	<Map />
	<Search />
	<LocationBtnVue />
	<Details />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLocation } from "@/composables";
import Map from "@/components/map/Map.vue";
import LocationBtnVue from "@/components/locbtn/LocationBtn.vue";
import Search from "@/components/search/Search.vue";
import Details from "@/components/details/Details.vue";

export default defineComponent({
	name: "Home",
	components: { Map, LocationBtnVue, Search, Details },
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
