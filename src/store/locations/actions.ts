import { ActionTree } from "vuex";
import { ILocState } from "./state";
import { IState } from "../index";

const actions: ActionTree<ILocState, IState> = {
	async getGeoLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => commit("setLocation", { lng: coords.longitude, lat: coords.latitude }),
			(err) => {
				console.log(err);
			}
		);
	},
};

export default actions;
