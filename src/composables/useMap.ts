import { computed } from "vue";
import { useStore } from "vuex";
import mapboxgl from "mapbox-gl";
import { IState } from "@/store/";
import { IFeature } from "@/interfaces/locations";

export const useMap = () => {
	const store = useStore<IState>();

	return {
		map: computed(() => store.state.map.map),
		setMap: (map: mapboxgl.Map) => store.commit("map/setMap", map),
		isMapReady: computed(() => store.getters["map/isMapReady"]),
		setMarkersForPlace: (places: IFeature[]) => store.commit("map/setMarkersForPlace", places),
	};
};
