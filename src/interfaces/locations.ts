export interface LocationResponse {
	type: string;
	query: string[];
	features: Feature[];
	attribution: string;
}

export interface Feature {
	id: string;
	type: string;
	place_type: string[];
	relevance: number;
	properties: Properties;
	text_en: string;
	language_en: Language;
	place_name_en: string;
	text: string;
	language: Language;
	place_name: string;
	bbox: number[];
	center: number[];
	geometry: Geometry;
	context: Context[];
}

export interface Context {
	id: string;
	wikidata: string;
	text_en: string;
	language_en: Language;
	text: string;
	language: Language;
	short_code?: string;
}

export enum Language {
	En = "en",
}

export interface Geometry {
	type: string;
	coordinates: number[];
}

export interface Properties {
	wikidata: string;
}
