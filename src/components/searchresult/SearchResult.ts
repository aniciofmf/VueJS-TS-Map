import { defineComponent, ref, watch } from "vue";
import { useLocation } from "@/composables";
import { IFeature } from "@/interfaces/locations";
import { useMap } from "@/composables/useMap";

export default defineComponent({
	name: "SearchResult",
	setup() {
		const { loadingPlaces, getPlaces, userLocation } = useLocation();
		const { map, setMarkersForPlace, getRoutesPoints } = useMap();
		const activePlace = ref("");

		watch(getPlaces, (newPlace) => {
			activePlace.value = "";
			setMarkersForPlace(newPlace);
		});

		return {
			loadingPlaces,
			getPlaces,
			activePlace,
			onPlaceClick: (place: IFeature) => {
				const [lng, lat] = place.center;
				activePlace.value = place.id;

				map.value?.flyTo({
					center: [lng, lat],
					zoom: 14,
				});
			},

			getRoutes: (place: IFeature) => {
				if (!userLocation.value) return;

				const [lng, lat] = place.center;
				const [uslng, uslat] = userLocation.value;

				const start: [number, number] = [uslng, uslat];
				const end: [number, number] = [lng, lat];

				getRoutesPoints(start, end);
			},
		};
	},
});
