import { createApp } from "vue";
import Home from "./views/Home.vue";
import store from "./store";

createApp(Home).use(store).mount("#app");
