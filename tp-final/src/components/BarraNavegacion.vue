<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/30/30" alt="gato" />
        </b-navbar-brand>
        <b-nav-item tag="h1" class="mb-0" disabled
          >OUR PLANT FINDER APP
        </b-nav-item>
        <b-nav-item v-b-popover.hover.bottomright="'Pagina principal'" to="/"
          >Home</b-nav-item
        >
        <b-nav-item
          v-if="nrolog === 0"
          disabled
          v-b-popover.hover.bottomright="
            'Ver tu perfil e información de contacto'
          "
          to="/#/miPerfil"
          >Mi Perfil</b-nav-item
        >
        <b-nav-item
          v-if="nrolog === 1"
          v-b-popover.hover.bottomright="
            'Ver tu perfil e información de contacto'
          "
          to="/#/miPerfil"
          >Mi Perfil</b-nav-item
        >
        <b-nav-item
          v-b-popover.hover.bottomright="
            'Conoce el listado de publicaciones que tenemos'
          "
          to="/#/listaPublicaciones"
          >Listado Publicaciones</b-nav-item
        >
        <b-nav-item
          v-b-popover.hover.bottomright="'Ubica tu buzón verde mas cercano!'"
          to="/#/mapaPublicaciones"
          >Mapa</b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-button style="display: inline-flex" pill variant="outline-success">
          <b-nav-item-dropdown right>
            <b-dropdown-item v-if="nrolog !== 0" to="/#/miPerfil"
              >Mi Perfil logueado</b-dropdown-item
            >
            <b-dropdown-item to="/#/login" v-if="nrolog === 0"
              >Mi Perfil</b-dropdown-item
            >
            <b-dropdown-item to="/#/login" @click="logout"  v-if="nrolog !== 0"
              >LOG OUT
            </b-dropdown-item>
            <b-dropdown-item to="/#/login" v-if="nrolog === 0"
              >LOG IN</b-dropdown-item
            > </b-nav-item-dropdown
          ><b>Menu-
            Permisos nivel: {{ nrolog }}-
            Hola usuario {{getUser}} !
            </b></b-button
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  BarraNavegacion: "BarraNavegacion",

  data() {
    return {};
  },
  computed: {
    nrolog() {
      return this.$store.getters.getRol;
    },
    getUser(){
      return this.$store.getters.getLoggedUser;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("desLoguear");
    },
  },
};
</script>

