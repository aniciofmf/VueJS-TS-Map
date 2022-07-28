import { MutationTree } from "vuex";
import { IMapState } from "./state";
import mapboxgl from "mapbox-gl";
import { IFeature } from "@/interfaces/locations";

const mutation: MutationTree<IMapState> = {
	setMap(state, map: mapboxgl.Map) {
		state.map = map;
	},

	setDistanceDuration(state, { distance, duration }: { distance: number; duration: number }) {
		let kms = distance / 1000;
		kms = Math.round(kms * 100);
		kms /= 100;

		state.distance = kms;
		state.duration = Math.floor(duration / 60);
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

		if (state.map?.getLayer("RouteLineString")) {
			state.map.removeLayer("RouteLineString");
			state.map.removeSource("RouteLineString");
			state.distance = undefined;
			state.duration = undefined;
		}
	},

	setRouteLine(state, coords: number[][]) {
		const start = coords[0];
		const end = coords[coords.length - 1];
		const bounds = new mapboxgl.LngLatBounds([start[0], start[1]], [start[0], start[1]]);

		for (const coord of coords) {
			const newCoord: [number, number] = [coord[0], coord[1]];
			bounds.extend(newCoord);
		}

		state.map?.fitBounds(bounds, {
			padding: 200,
		});

		const sData: mapboxgl.AnySourceData = {
			type: "geojson",
			data: {
				type: "FeatureCollection",
				features: [
					{
						type: "Feature",
						properties: {},
						geometry: {
							type: "LineString",
							coordinates: coords,
						},
					},
				],
			},
		};

		if (state.map?.getLayer("RouteLineString")) {
			state.map.removeLayer("RouteLineString");
			state.map.removeSource("RouteLineString");
		}

		state.map?.addSource("RouteLineString", sData);

		state.map?.addLayer({
			id: "RouteLineString",
			type: "line",
			source: "RouteLineString",
			layout: {
				"line-cap": "round",
				"line-join": "round",
			},
			paint: {
				"line-color": "green",
				"line-width": 3,
			},
		});
	},
};

export default mutation;
