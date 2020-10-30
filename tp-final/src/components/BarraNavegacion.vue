<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item tag="h1" class="mb-0" disabled
          >OUR PLANT FINDER APP</b-nav-item
        >
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/#/miPerfil">Mi Perfil</b-nav-item>
        <b-nav-item to="/#/mission">Our Mission</b-nav-item>
        <b-nav-item to="/#/listaPublicaciones"
          >Listado Publicaciones</b-nav-item
        >
        <b-nav-item to="/#/mapaPublicaciones">Mapa</b-nav-item>
        <b-button href="#" pill variant="dark"> LOGIN</b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  BarraNavegacion: "BarraNavegacion"
};
</script>