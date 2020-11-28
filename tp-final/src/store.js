import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

    //-agregar dni al estado centralizado - DONE
    //-lista de dni's para loguearse - DONE

export const store = new Vuex.Store({
  state: {
    // 0 = no logueado, 1 = logueado, 2 = admin
    rol: 0,
    adminKey: 999,
    loggedUser: -1,
    plantaPorReservar: "",
    ///plantasEliminadas:[], // BORRAR ESTO LUEGO

  },
  mutations: {
    loguearUser(state, rolNuevo) {
      state.rol = rolNuevo;
    },
    //G:-Setea el dni del usuario actual del state
    setearDni(state,dni){
      console.log("mutacion", dni)
      state.loggedUser= dni
    },
    setearPlantaPorReservar(state,planta){
      console.log("mutacionPlanta")
      state.plantaPorReservar = planta
    },

  /* // ESTO VUELA TMB
    agregarPlantaEliminada(state,planta){
      console.log("mutacionPlanta")
      state.plantasEliminadas.push(planta)
    }
*/
  },
  actions: {
    logUser({ commit }) {
      const rolNuevo = 1;
      commit("loguearUser", rolNuevo);
    },

    desLoguear({ commit }) {
      const rolNuevo = 0;
      const logNuevo = -1
      commit("loguearUser", rolNuevo);
      commit("setearDni", logNuevo)
    },
    logAdmin({ commit }) {
      const rolNuevo = 2;
      commit("loguearUser", rolNuevo);
    },
    //G:-Agrego esta action para la mutation que setea el dni actual loggeado
    setCurrentUser({commit}, dni){
      console.log("Action", dni)
      commit("setearDni",dni)
    },
    setPlantaPorReservar({commit}, planta){
      console.log("ActionPlanta1", planta)
      commit("setearPlantaPorReservar",planta)
    },
  /*// VOLAR
    addPlantaEliminada({commit}, planta){
      console.log("ActionPlanta3", planta)
      commit("agregarPlantaEliminada",planta)

    }
*/
  },
  getters: {
    getRol: (state) => {
      return state.rol;
    },
    getAdminKey: (state) => {
      return state.adminKey;
    },
    //G: -Agrego esto para usar en el mounted de la lista de publicaciones
    //Esto deberia usarse para filtrar todo lo que se muestra, segun el usuario logueado
    getLoggedUser:(state) =>{
      return state.loggedUser
    },
    getPlantaPorReservar:(state)=>{
      return state.plantaPorReservar
    },
  /* //VOLAR
    getPlantasEliminadas:(state)=>{
      return state.plantasEliminadas
    }*/
  },

});
