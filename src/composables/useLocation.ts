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
		loading: computed(() => store.state.locations.loading),
		userLocation: computed(() => store.state.locations.usrLocation),
		userLocationReady: computed(() => store.getters["locations/userLocation"]),
	};
};
