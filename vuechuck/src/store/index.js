import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    joke: "",
  },
  getters: {
    categories: (state) => state.categories,
    joke: (state) => state.joke,
  },
  mutations: {
    SET_CATEGORIES: (state, payload) => (state.categories = payload),
    SET_JOKE: (state, payload) => (state.joke = payload.value),
  },
  actions: {
     async loadCategories(context) {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      if (response.ok) {
        context.commit("SET_CATEGORIES", await response.json());
      } else {
        throw new Error(response.status);
      }
    },

    async loadRandomJokeFromCategory(context, payload) {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${payload}`
      );
      if (response.ok) {
        context.commit("SET_JOKE", await response.json());
      } else {
        throw new Error(response.status);
      }
    },
  },
  modules: {},
});
