import axios from "axios";

const LIMIT = 5;
const LANGUAGE = "en";

const searchApi = axios.create({
	baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
	params: {
		access_token: "pk.eyJ1IjoiYW5pY2lvbSIsImEiOiJjbDYwbTFjZmMxb3k4M2JtcDNicDdqdnNkIn0.fkEQkoSkZ6AbPRf6jg2pTg",
		language: LANGUAGE,
		limit: LIMIT,
	},
});

export default searchApi;
