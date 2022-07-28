import axios from "axios";

const directionApi = axios.create({
	baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
	params: {
		alternatives: false,
		geometries: "geojson",
		overview: "simplified",
		steps: false,
		access_token: "pk.eyJ1IjoiYW5pY2lvbSIsImEiOiJjbDYwbTFjZmMxb3k4M2JtcDNicDdqdnNkIn0.fkEQkoSkZ6AbPRf6jg2pTg",
	},
});

export default directionApi;
