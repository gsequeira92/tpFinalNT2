<template>
  <div>
    <h1 left>Publicaciones Disponibles:</h1>
    <hr width="100%" size="10" noshade="noshade" />
    <b-row class="vh-100">
      <b-button v-if="nrolog == 2" block to="/reportes"
        ><b-icon icon="clipboard-check"></b-icon> Ver reporte
        Publicaciones</b-button
      >
      <hr width="100%" size="10" noshade="noshade" />
      <b-card-group columns>
        <b-container deck>
          <b-card
            v-for="(publi, p) in publicaciones"
            :key="p"
            no-body
            style="max-width: 20rem"
            :img-src="publi.img"
            img-alt="Image"
            img-top
            v-show="
              publi.estaReservada === false && publi.dni_usuario != getUser
            "
          >
            <b-card-body>
              <b-card-title>{{ publi.nombrePlanta }}</b-card-title>
              <b-card-sub-title class="mb-2"
                >Usuario: {{ publi.dni_usuario }}</b-card-sub-title
              >
              <b-card-text>
                {{ publi.descripcion }}
              </b-card-text>
            </b-card-body>
            <b-card-body>
              <b-button
                v-if="nroLog == 1"
                class="card-link"
                variant="success"
                @click="reservaPubli(publi)"
              >
                Reservar
              </b-button>
              <b-button
                v-if="nroLog == 2"
                class="mt-2"
                variant="danger"
                @click="eliminarPublicacion(publi)"
              >
                Eliminar
              </b-button>
            </b-card-body>
          </b-card>
        </b-container>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lista-publicaciones",
  data() {
    return {
      publicaciones: [],
      baseUrl: "https://5fbbcc9fc09c200016d4122c.mockapi.io/publiPlantas/",
    };
  },
  computed: {
    nrolog() {
      return this.$store.getters.getRol;
    },
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
  async created() {
    console.log("SE CARGAN TODAS LAS PUBLICACIONES DE LA API");
    try {
      const publicaciones = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/publiPlantas"
      );
      this.publicaciones = publicaciones.data;
    } catch (error) {
      alert("hubo un error, auxilio");
    }
  },
  methods: {
    //siempre llega la ultima del array en posicion 7 y id=8
    async reservaPubli(publi) {
      const indiceApi = publi.id;
      console.log("Esta es la publicacion nro", publi.id);
      const publicacion = this.publicaciones.find(
        (element) => element.id == publi.id
      );

      if (indiceApi != -1) {
        console.log("Entro al if");
        this.$store.dispatch("setPlantaPorReservar", publicacion);

        try {
          await axios.put(this.baseUrl + indiceApi, {
            estaReservada: true,
            dni_usuario: this.$store.getters.getLoggedUser,
          });
          this.$bvModal.hide("modal-0");
          this.$router.push({ path: "/reserva" });
        } catch (error) {
          alert("hubo un error reservando la publicacion");
          console.log(error);
        }
      }
    },

    async cancelarReserva(publi) {
      let indice = this.publicaciones.indexOf(publi);

      try {
        let publicacion = await axios.put(this.baseUrl + indice, {
          estaReservada: false,
        });
        console.log(publicacion.data);
        this.$bvModal.hide("modal-0");
      } catch (error) {
        alert("hubo un error reservando la publicacion");
        console.log(error);
      }
    },

    async eliminarPublicacion(publi) {
      let indice = publi.id;
      console.log(indice);
      try {
        let publicacion = await axios.delete(this.baseUrl + indice);
        // llamada a la api para hacer el POST mandando publicacion
        await axios.post(
          "https://5fbbcc9fc09c200016d4122c.mockapi.io/Eliminadas",
          publi
        );
        const indiceAborrar = this.publicaciones.findIndex(
          (e) => e.id == publicacion.id
        );
        if (indiceAborrar != -1) {
          this.publicaciones.splice(indiceAborrar, 1);
        }
        this.$bvModal.hide("modal-1");
      } catch (error) {
        alert("hubo un error eliminando la publicacion");
        console.log(error);
      }
    },
  },
};
</script>
