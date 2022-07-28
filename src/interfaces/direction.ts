export interface ITopLevel {
	routes: IRoute[];
	waypoints: IWaypoint[];
	code: string;
	uuid: string;
}

export interface IRoute {
	country_crossed: boolean;
	weight_name: string;
	weight: number;
	duration: number;
	distance: number;
	legs: ILeg[];
	geometry: IGeometry;
}

export interface IGeometry {
	coordinates: Array<number[]>;
	type: string;
}

export interface ILeg {
	via_waypoints: any[];
	admins: IAdmin[];
	weight: number;
	duration: number;
	steps: IStep[];
	distance: number;
	summary: string;
}

export interface IAdmin {
	iso_3166_1_alpha3: string;
	iso_3166_1: string;
}

export interface IStep {
	intersections: IIntersection[];
	maneuver: IManeuver;
	name: string;
	duration: number;
	distance: number;
	driving_side: string;
	weight: number;
	mode: string;
	geometry: IGeometry;
}

export interface IIntersection {
	entry: boolean[];
	bearings: number[];
	duration?: number;
	mapbox_streets_v8?: IMapboxStreetsV8;
	is_urban?: boolean;
	admin_index: number;
	out?: number;
	weight?: number;
	geometry_index: number;
	location: number[];
	in?: number;
	turn_weight?: number;
	turn_duration?: number;
	traffic_signal?: boolean;
	lanes?: ILane[];
}

export interface ILane {
	indications: IIndication[];
	valid_indication: IIndication;
	valid: boolean;
	active: boolean;
}

export enum IIndication {
	Straight = "straight",
}

export interface IMapboxStreetsV8 {
	class: IClass;
}

export enum IClass {
	Primary = "primary",
	Street = "street",
}

export interface IManeuver {
	type: string;
	instruction: string;
	bearing_after: number;
	bearing_before: number;
	location: number[];
	modifier?: string;
}

export interface IWaypoint {
	distance: number;
	name: string;
	location: number[];
}
