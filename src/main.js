import Vue from "vue";
import Onsen from "vue-onsenui";
import { Helps, SingularityApi, CookiesStorage, Filters } from "@server/singularity";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Utils from "./config/utils";
import ShareHead from "./components/ShareHead";
import ListenEvents from "./mixins/listenEvents";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "./assets/css/onsen/onsen-css-components.css";
import "./assets/fonts/club_font.css";
import "./assets/css/init.css";

Vue.use(Onsen);
Vue.use(Utils);
// Vue.use(ShareHead);
Vue.use({
  install: () => {
    Vue.prototype.$api = SingularityApi;
    Vue.prototype.$cookiesStorage = CookiesStorage;
    Vue.prototype.$helps = Helps;
    Vue.component("ShareHead", ShareHead);
  }
});

Vue.config.productionTip = false;

// 注册过滤器
Object.keys(Filters).forEach(key => Vue.filter(key, Filters[key]));

new Vue({
  router,
  store,
  mixins: [ListenEvents],
  render: h => h(App),
  beforeCreate() {
    this.$ons.disableAutoStyling();
  }
}).$mount("#app");
