import { defineComponent, ref } from "vue";
import { useLocation } from "@/composables";
import { IFeature } from "@/interfaces/locations";
import { useMap } from "../../composables/useMap";

export default defineComponent({
	name: "SearchResult",
	setup() {
		const { loadingPlaces, getPlaces } = useLocation();
		const { map } = useMap();
		const activePlace = ref("");

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
