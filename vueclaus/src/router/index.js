import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Gifts from "../views/Gifts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/gifts",
    name: "gifts",
    component: Gifts,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
