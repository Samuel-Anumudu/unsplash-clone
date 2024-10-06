import { createApp } from "vue";
import { createPinia } from "pinia";
import MasonryWall from "@yeger/vue-masonry-wall";

import App from "./App.vue";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(MasonryWall);
app.mount("#app");
