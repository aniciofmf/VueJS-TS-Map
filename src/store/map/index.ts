import { Module } from "vuex";
import { IState } from "../index";

import state, { IMapState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const mapModule: Module<IMapState, IState> = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
};

export default mapModule;
