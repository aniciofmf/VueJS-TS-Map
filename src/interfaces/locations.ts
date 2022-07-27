export interface ILocationResponse {
	type: string;
	query: string[];
	features: IFeature[];
	attribution: string;
}

export interface IFeature {
	id: string;
	type: string;
	place_type: string[];
	relevance: number;
	properties: IProperties;
	text_en: string;
	language_en: ILanguage;
	place_name_en: string;
	text: string;
	language: ILanguage;
	place_name: string;
	bbox: number[];
	center: number[];
	geometry: IGeometry;
	context: IContext[];
}

export interface IContext {
	id: string;
	wikidata: string;
	text_en: string;
	language_en: ILanguage;
	text: string;
	language: ILanguage;
	short_code?: string;
}

export enum ILanguage {
	En = "en",
}

export interface IGeometry {
	type: string;
	coordinates: number[];
}

export interface IProperties {
	wikidata: string;
}
