import { createApp } from "vue";
import Home from "./views/Home.vue";
import store from "./store";
import mapboxgl from "mapbox-gl";

if (!navigator.geolocation) {
	throw new Error("Geolocation API is needed");
}

mapboxgl.accessToken = "pk.eyJ1IjoiYW5pY2lvbSIsImEiOiJjbDYwbTFjZmMxb3k4M2JtcDNicDdqdnNkIn0.fkEQkoSkZ6AbPRf6jg2pTg";

createApp(Home).use(store).mount("#app");
