import { createStore } from "vuex";

import skeletonModule from "./template";
import { IStateInterface } from "./template/state";

export interface IState {
	something: any;
}

export default createStore<IState>({
	modules: {
		skeletonM: {},
	},
});
