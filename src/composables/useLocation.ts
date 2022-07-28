import { useStore } from "vuex";
import { IState } from "@/store/";
import { computed, onMounted } from "vue";

export const useLocation = () => {
	const store = useStore<IState>();

	onMounted(() => {
		if (!store.getters["locations/userLocation"]) {
			store.dispatch("locations/getGeoLocation");
		}
	});

	return {
		getPlaces: computed(() => store.state.locations.places),
		loading: computed(() => store.state.locations.loading),
		loadingPlaces: computed(() => store.state.locations.loadingPlaces),
		searchPlaces: (query: string) => store.dispatch("locations/searchPlaces", query),
		userLocation: computed(() => store.state.locations.usrLocation),
		userLocationReady: computed(() => store.getters["locations/userLocation"]),
	};
};
