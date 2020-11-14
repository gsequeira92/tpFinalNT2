import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // 0 = no logueado, 1 = logueado, 2 = admin
    nroLoguin: 0,
  },
  mutations: {
    loguearUser(state) {
      state.nroLoguin = 1;
    },
    desLog(state) {
      state.nroLoguin = 0;
    },
    loguearAdm(state) {
      state.nroLoguin = 2;
    },
  },
  actions: {
    logUser({ commit }) {
      commit("loguearUser");
    },
    desLoguear({ commit }) {
      commit("desLog");
    },
    logAdmin({ commit }) {
      commit("loguearAdm");
    },
  },
  getters: {
    logueado: (state) => {
      return state.nroLoguin;
    },
  },
});
