<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/30/30" alt="gato" />
        </b-navbar-brand>
        <b-nav-item tag="h1" class="mb-0" disabled
          >OUR PLANT FINDER APP</b-nav-item
        >
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/#/miPerfil">Mi Perfil</b-nav-item>
        <b-nav-item to="/#/listaPublicaciones"
          >Listado Publicaciones</b-nav-item
        >
        <b-nav-item to="/#/mapaPublicaciones">Mapa</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
<<<<<<< HEAD
        <b-button style="display:inline-flex;" pill variant="outline-success">
          <b-nav-item-dropdown right> 
          <b-dropdown-item  v-if="nrolog!==0" to="/#/miPerfil" >Mi Perfil logueado</b-dropdown-item>
          <b-dropdown-item   to="/#/login" v-if="nrolog===0">Mi Perfil</b-dropdown-item>
          <b-dropdown-item to="/#/login"  v-if="nrolog!==0" >LOG OUT </b-dropdown-item>
          <b-dropdown-item to="/#/login"  @click="logout"  v-if="nrolog===0">LOG IN</b-dropdown-item>
          </b-nav-item-dropdown><b>User Menu</b></b-button>
=======
        <b-button style="display: inline-flex" pill variant="outline-success">
          <b-nav-item-dropdown right>
            <b-dropdown-item :v-show="nrolog === 1" to="/#/miPerfil"
              >Mi Perfil logueado</b-dropdown-item
            >
            <b-dropdown-item to="/#/login">Mi Perfil</b-dropdown-item>
            <b-dropdown-item to="/#/login"
              >LogIn</b-dropdown-item
            > </b-nav-item-dropdown
          ><b> User Menu</b></b-button
        >
>>>>>>> f3c765b12f6fcd4b8d7df4b9dadd9caffa4378f5
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
<<<<<<< HEAD

export default { 
  BarraNavegacion: "BarraNavegacion",
  name: "lista-publicaciones",
  data() {
    return {
     
    };
    
  },
  computed :{
    nrolog(){
       return this.$store.getters.logueado;
    }
  },
  methods :{
    logout(){
       this.$store.dispatch("desLoguear");
    }
  }
=======
export default {
  BarraNavegacion: "BarraNavegacion",
>>>>>>> f3c765b12f6fcd4b8d7df4b9dadd9caffa4378f5
};
</script>

