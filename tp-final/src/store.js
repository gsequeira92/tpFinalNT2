import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // 0 = no logueado, 1 = logueado, 2 = admin
    rol: 0,
    dniUserList: [123, 654, 987],
    adminKey: 999,
    //agregar dni al estado centralizado
    //lista de dni's para loguearse
    //mounted() va a buscar lista de publicaciones
  },
  mutations: {
    loguearUser(state, rolNuevo) {
      state.rol = rolNuevo;
    },
  },
  actions: {
    logUser({ commit }) {
      const rolNuevo = 1;
      commit("loguearUser", rolNuevo);
    },

    desLoguear({ commit }) {
      const rolNuevo = 0;
      commit("loguearUser", rolNuevo);
    },
    logAdmin({ commit }) {
      const rolNuevo = 2;
      commit("loguearUser", rolNuevo);
    },
  },
  getters: {
    getRol: (state) => {
      return state.rol;
    },
    getUserList: (state) => {
      return state.dniUserList;
    },
    getAdminKey: (state) => {
      return state.adminKey;
    },
  },
});
