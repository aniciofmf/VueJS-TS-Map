import { useLocation } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";
import mapboxgl from "mapbox-gl";

export default defineComponent({
	name: "Map",
	setup() {
		const mapElement = ref<HTMLDivElement>();
		const { loading, userLocation, userLocationReady } = useLocation();

		const loadMap = async () => {
			await Promise.resolve();

			const map = new mapboxgl.Map({
				container: mapElement.value!,
				style: "mapbox://styles/mapbox/light-v10",
				center: userLocation.value,
				zoom: 15,
				projection: { name: "globe" },
				pitchWithRotate: true,
			});

			const locationPopup = new mapboxgl.Popup().setLngLat(userLocation.value!).setHTML(`<h5>My Location</h5>`);

			const locationMarker = new mapboxgl.Marker().setLngLat(userLocation.value!).setPopup(locationPopup).addTo(map);
		};

		onMounted(() => {
			if (userLocationReady) {
				return loadMap();
			}
		});

		watch(userLocationReady, (_) => {
			if (userLocationReady) {
				loadMap();
			}
		});
		return {
			userLocationReady,
			mapElement,
		};
	},
});
