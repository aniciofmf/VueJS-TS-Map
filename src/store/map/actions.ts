import { ActionTree } from "vuex";
import { IMapState } from "./state";
import { IState } from "../index";
import { directionApi } from "@/api";
import { IDirectionsResponse } from "@/interfaces/direction";

export type LngLat = [number, number];

const actions: ActionTree<IMapState, IState> = {
	async getRoutesPoints({ commit }, { start, end }: { start: LngLat; end: LngLat }) {
		const resp = await directionApi.get<IDirectionsResponse>(`${start.join(",")};${end.join(",")}`);

		commit("setRouteLine", resp.data.routes[0].geometry.coordinates);
	},
};

export default actions;
