import { MutationTree } from "vuex";
import { ILocState } from "./state";
import { IFeature } from "@/interfaces/locations";

const mutation: MutationTree<ILocState> = {
	setLocation(state: ILocState, { lng, lat }: { lng: number; lat: number }) {
		state.loading = false;
		state.usrLocation = [lng, lat];
	},

	setLoadingPlaces(state: ILocState) {
		state.loadingPlaces = true;
	},

	setPlaces(state: ILocState, places: IFeature[]) {
		state.places = places;
		state.loadingPlaces = false;
	},
};

export default mutation;
