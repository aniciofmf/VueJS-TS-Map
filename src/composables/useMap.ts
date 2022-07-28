import { computed } from "vue";
import { useStore } from "vuex";
import mapboxgl from "mapbox-gl";
import { IState } from "@/store/";
import { IFeature } from "@/interfaces/locations";
import { LngLat } from "@/store/map/actions";

export const useMap = () => {
	const store = useStore<IState>();

	return {
		map: computed(() => store.state.map.map),
		distance: computed(() => store.state.map.distance),
		duration: computed(() => store.state.map.duration),
		setMap: (map: mapboxgl.Map) => store.commit("map/setMap", map),
		isMapReady: computed(() => store.getters["map/isMapReady"]),
		setMarkersForPlace: (places: IFeature[]) => store.commit("map/setMarkersForPlace", places),
		getRoutesPoints: (start: LngLat, end: LngLat) => store.dispatch("map/getRoutesPoints", { start, end }),
	};
};
