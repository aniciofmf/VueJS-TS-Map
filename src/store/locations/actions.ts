import { ActionTree } from "vuex";
import { ILocState } from "./state";
import { IState } from "../index";
import { searchApi } from "@/api";
import { ILocationResponse, IFeature } from "@/interfaces/locations";

const actions: ActionTree<ILocState, IState> = {
	async getGeoLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => commit("setLocation", { lng: coords.longitude, lat: coords.latitude }),
			(err) => {
				console.log(err);
			}
		);
	},

	async searchPlaces({ commit, state }, query: string): Promise<IFeature[]> {
		if (query.length === 0) {
			commit("setPlaces", []);
			return [];
		}

		if (!state.usrLocation) {
			throw new Error("No user location");
		}

		commit("setLoadingPlaces");

		const resp = await searchApi.get<ILocationResponse>(`/${query}.json`, {
			params: {
				proximity: state.usrLocation?.join(","),
			},
		});

		commit("setPlaces", resp.data.features);

		return resp.data.features;
	},
};

export default actions;
