import Vue from "vue";
import VueRouter from "vue-router";
import Dict from "../views/Dict.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dict",
    component: Dict,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
