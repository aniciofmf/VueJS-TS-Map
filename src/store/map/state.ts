import mapboxgl from "mapbox-gl";
export interface IMapState {
	map?: mapboxgl.Map;
	markers: mapboxgl.Marker[];
	distance?: number;
	duration?: number;
}

function state(): IMapState {
	return {
		map: undefined,
		markers: [],
		distance: undefined,
		duration: undefined,
	};
}

export default state;
