<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Carrusel></Carrusel>
    <Descripcion></Descripcion>
    <MapaHome></MapaHome>
    <TarjetasHome></TarjetasHome>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TarjetasHome from "@/components/TarjetasHome.vue";
import Descripcion from "../components/DescripcionHome.vue";
import Footer from "../components/FooterHome.vue";
import Carrusel from "../components/CarruselHome.vue";
import MapaHome from "../components/MapaHome.vue";

export default {
  name: "Home",
  components: {
    TarjetasHome,
    Descripcion,
    Footer,
    Carrusel,
    MapaHome
  }
};
</script>
