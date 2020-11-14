import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
    path: "/listaPublicaciones",
    name: "lista-publicacion",
    component: ListaPublicaciones
  },

  {
    path: "/mapaPublicaciones",
    name: "mapa-publicaciones",
    component: MapaPublicaciones
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue")
   
  },
  {
    path: "/reserva",
    name: "reserva",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Reserva.vue")
   
  },
];

const router = new VueRouter({
  routes
});

export default router;
