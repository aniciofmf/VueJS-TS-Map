export interface IStateInterface {
	prop: boolean;
}

function state(): IStateInterface {
	return {
		prop: true,
	};
}

export default state;
