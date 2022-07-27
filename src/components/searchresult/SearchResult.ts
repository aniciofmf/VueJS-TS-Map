import { defineComponent, ref, watch } from "vue";
import { useLocation } from "@/composables";
import { IFeature } from "@/interfaces/locations";
import { useMap } from "@/composables/useMap";

export default defineComponent({
	name: "SearchResult",
	setup() {
		const { loadingPlaces, getPlaces } = useLocation();
		const { map, setMarkersForPlace } = useMap();
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
		};
	},
});
