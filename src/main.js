import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBagShopping,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import {
  faBowlFood,
  faStar,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBagShopping, faClockRotateLeft, faPlusSquare);
library.add(faUtensils);
library.add(faArrowDown);
library.add(faList);
library.add(faEye, faStar);
library.add(faCloud);
library.add(faCartShopping);
library.add(faBowlFood);
library.add(faBreadSlice);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(ToastPlugin)
  .use(router)
  .mount("#app");
