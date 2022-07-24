import { Module } from "vuex";
import { IState } from "../index";

import state, { IStateInterface } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const skeletonModule: Module<IStateInterface, IState> = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
};

export default skeletonModule;
