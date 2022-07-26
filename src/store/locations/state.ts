export interface ILocState {
	loading: boolean;
	usrLocation?: [number, number] | undefined;
}

function state(): ILocState {
	return {
		loading: true,
		usrLocation: undefined,
	};
}

export default state;
