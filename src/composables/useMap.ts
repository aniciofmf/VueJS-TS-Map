import { useStore } from "vuex";
import { IState } from "@/store/";
import { computed } from "vue";
import mapboxgl from "mapbox-gl";

export const useMap = () => {
	const store = useStore<IState>();

	return {
		map: computed(() => store.state.map.map),
		setMap: (map: mapboxgl.Map) => store.commit("map/setMap", map),
		isMapReady: computed(() => store.getters["map/isMapReady"]),
	};
};
