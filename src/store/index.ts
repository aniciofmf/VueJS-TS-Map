import { createStore } from "vuex";

import skeletonModule from "./skeletonTemplate";
import { IStateInterface } from "./skeletonTemplate/state";

export interface IState {
	something: any;
}

export default createStore<IState>({
	modules: {
		skeletonM: {},
	},
});
