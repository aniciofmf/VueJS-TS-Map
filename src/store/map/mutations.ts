import { MutationTree } from "vuex";
import { IMapState } from "./state";
import mapboxgl from "mapbox-gl";

const mutation: MutationTree<IMapState> = {
	setMap(state, map: mapboxgl.Map) {
		state.map = map;
	},
};

export default mutation;
