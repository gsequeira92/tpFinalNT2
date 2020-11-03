<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Carrusel></Carrusel>
    <Descripcion></Descripcion>
    <TarjetasHome></TarjetasHome>
    <GoogleMap></GoogleMap>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TarjetasHome from "@/components/TarjetasHome.vue";
import GoogleMap from "../components/MapaHome.vue";
import Descripcion from "../components/DescripcionHome.vue";
import Footer from "../components/FooterHome.vue";
import Carrusel from "../components/CarruselHome.vue";

export default {
  name: "Home",
  components: {
    TarjetasHome,
    GoogleMap,
    Descripcion,
    Footer,
    Carrusel
  }
};
</script>
