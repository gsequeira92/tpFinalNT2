import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OurMission from "../views/OurMission.vue"
import ListaPublicaciones from "../views/ListaPublicaciones.vue"
import MapaPublicaciones from "../views/MapaPublicaciones.vue"

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/miPerfil",
    name: "mi-perfil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MiPerfil.vue")
  },

  {
    path: "/mission",
    name: "OurMission",
    component: OurMission
  },

  {
    path: "/listaPublicaciones",
    name: "lista-publicacion",
    component: ListaPublicaciones
  },

  {
    path: "/mapaPublicaciones",
    name: "mapa-publicaciones",
    component: MapaPublicaciones
  },
];

const router = new VueRouter({
  routes
});

export default router;
