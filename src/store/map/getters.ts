import { GetterTree } from "vuex";
import { IMapState } from "./state";
import { IState } from "../index";

const getters: GetterTree<IMapState, IState> = {
	isMapReady(state) {
		return !!state.map;
	},
};

export default getters;
