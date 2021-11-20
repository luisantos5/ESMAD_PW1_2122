import Vue from "vue";
import VueRouter from "vue-router";
import Castles from "../views/Castles.vue";
import Castle from "../views/Castle.vue";
import NewCastle from "../views/NewCastle.vue";
import Error from "../views/Error.vue";

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
  {
    path: "*",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
