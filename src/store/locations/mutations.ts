import { MutationTree } from "vuex";
import { ILocState } from "./state";

const mutation: MutationTree<ILocState> = {
	setLocation(state: ILocState, coords: [lng: number, lat: number]) {
		state.usrLocation = coords;
	},
};

export default mutation;
