import { IFeature } from "@/interfaces/locations";

export interface ILocState {
	loading: boolean;
	usrLocation?: [number, number] | undefined;
	loadingPlaces: boolean;
	places: IFeature[];
}

function state(): ILocState {
	return {
		loading: true,
		usrLocation: undefined,
		loadingPlaces: false,
		places: [],
	};
}

export default state;
