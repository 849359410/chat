import Vue from "vue";
import Router from "vue-router";
import routes from "./router.config";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log("to", to);
  next();
});
export default router;
