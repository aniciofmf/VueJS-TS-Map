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
				style: "mapbox://styles/mapbox/streets-v11",
				center: userLocation.value,
				zoom: 10,
				projection: { name: "globe" },
				pitchWithRotate: true,
			});
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
