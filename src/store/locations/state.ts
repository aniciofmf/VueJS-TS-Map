export interface ILocState {
	loading: boolean;
	usrLocation?: [number, number] | null;
}

function state(): ILocState {
	return {
		loading: true,
		usrLocation: null,
	};
}

export default state;
