import Vue from "vue";
import VueRouter from "vue-router";
import Castles from "../views/Castles.vue";
import Castle from "../views/Castle.vue";

import NewCastle from "../views/NewCastle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/castles",
    name: "castles",
    component: Castles,
  },
  {
    path: "/castles/:castleName",
    name: "castle",
    component: Castle,
  },
  {
    path: "/newcastle",
    name: "newCastle",
    component: NewCastle,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
