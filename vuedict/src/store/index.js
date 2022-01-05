import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    word: "",
    definition: "",
  },
  getters: {
    definition: (state) => state.definition,
  },
  mutations: {
    SET_DEFINITION: (state, payload) => (state.definition = payload),
  },
  actions: {
    async getDefinition(context, payload) {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${payload}`
      );
      if (response.ok) {
        context.commit("SET_DEFINITION", await response.json());
      } else {
        throw new Error(response.status);
      }
    },
  },
  modules: {},
});
