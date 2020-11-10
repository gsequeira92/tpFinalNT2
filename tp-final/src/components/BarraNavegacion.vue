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
        <b-button style="display:inline-flex;" pill variant="outline-success">
          <b-nav-item-dropdown right> 
            <b-dropdown-item to="/#/login">Mi Perfil</b-dropdown-item>
            <b-dropdown-item to="/#/login">LogIn</b-dropdown-item>
          </b-nav-item-dropdown><b>User Menu</b></b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  BarraNavegacion: "BarraNavegacion"
};
</script>