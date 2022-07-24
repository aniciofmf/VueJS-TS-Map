export interface ILocState {
	loading: boolean;
	usrLocation?: [number | null, number | null];
}

function state(): ILocState {
	return {
		loading: true,
		usrLocation: [null, null],
	};
}

export default state;
