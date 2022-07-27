import { MutationTree } from "vuex";
import { IMapState } from "./state";
import mapboxgl from "mapbox-gl";
import { IFeature } from "@/interfaces/locations";

const mutation: MutationTree<IMapState> = {
	setMap(state, map: mapboxgl.Map) {
		state.map = map;
	},

	setMarkersForPlace(state, places: IFeature[]) {
		state.markers.forEach((marker) => marker.remove());
		state.markers = [];

		if (!state.map) return;

		for (const place of places) {
			const [lng, lat] = place.center;

			const popup = new mapboxgl.Popup().setLngLat([lng, lat]).setHTML(`<h5>${place.text}</h5><p>${place.place_name}</p>`);

			const marker = new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(state.map);

			state.markers.push(marker);
		}
	},
};

export default mutation;
