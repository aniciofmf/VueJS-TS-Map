import { createApp } from "vue";
import Home from "./views/Home.vue";
import store from "./store";

if (!navigator.geolocation) {
	throw new Error("Geolocation API is needed");
}

createApp(Home).use(store).mount("#app");
