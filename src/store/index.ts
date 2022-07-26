import { createStore } from "vuex";

import locationModule from "./locations";
import mapModule from "./map";
import { ILocState } from "./locations/state";
import { IMapState } from "./map/state";

export interface IState {
	locations: ILocState;
	map: IMapState;
}

export default createStore<IState>({
	modules: {
		locations: locationModule,
		map: mapModule,
	},
});
