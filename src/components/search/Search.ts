import { computed, defineComponent, ref } from "vue";
import SearchResult from "@/components/searchresult/SearchResult.vue";
import { useLocation } from "@/composables";

const DEBOUNCE_TIME = 500;

export default defineComponent({
	name: "Search",
	components: { SearchResult },
	setup() {
		const debounceVal = ref("");
		const debounceTimer = ref();
		const { searchPlaces } = useLocation();
		return {
			searchTerm: computed({
				get() {
					return debounceVal.value;
				},
				set(value: string) {
					//
					if (debounceTimer.value) {
						clearTimeout(debounceTimer.value);
					}

					debounceTimer.value = setTimeout(() => {
						debounceVal.value = value;
						searchPlaces(value);
					}, DEBOUNCE_TIME);
				},
			}),
		};
	},
});
