import { Module } from "vuex";
import { IState } from "../index";

import state, { ILocState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const locationModule: Module<ILocState, IState> = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
};

export default locationModule;
