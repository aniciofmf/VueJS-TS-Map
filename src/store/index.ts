import { createStore } from "vuex";

import locationModule from "./locations";
import { ILocState } from "./locations/state";

export interface IState {
	locations: ILocState;
}

export default createStore<IState>({
	modules: {
		locations: locationModule,
	},
});
