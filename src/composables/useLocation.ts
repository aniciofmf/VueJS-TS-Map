import { useStore } from "vuex";
import { IState } from "@/store/";
import { onMounted } from "vue";

export const useLocation = () => {
	const store = useStore<IState>();

	onMounted(() => {
		if (!store.getters["locations/userLocation"]) {
			store.dispatch("locations/getGeoLocation");
		}
	});

	return {};
};
