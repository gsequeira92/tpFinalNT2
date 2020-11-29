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
                v-b-modal.modal-0
                pill
                v-if="nrolog == 1"
                class="card-link"
                variant="success"
                ><b-modal
                  ref="nuevoModal"
                  id="modal-0"
                  hide-footer
                  title="Confirmar reserva"
                >
                  <p>Seguro desea reservar esta planta?</p>
                  <b-button
                    class="mt-3"
                    variant="outline-success"
                    block
                    @click="reservaPubli(publi)"
                    >Aceptar</b-button
                  >
                  <b-button
                    class="mt-2"
                    variant="outline-danger"
                    block
                    @click="cancelarReserva(publi)"
                    >Cancelar</b-button
                  >
                </b-modal>
                Reservar
              </b-button>
              <b-button
                v-b-modal.modal-1
                pill
                v-if="nrolog == 2"
                href="#"
                class="card-link"
                variant="danger"
                ><b-modal
                  ref="nuevoModalCancelacion"
                  id="modal-1"
                  hide-footer
                  title="Confirmar Borrado"
                >
                  <p>Seguro desea Eliminar esta publicacion?</p>
                  <b-button
                    class="mt-2"
                    variant="outline-danger"
                    block
                    @click="eliminarPublicacion(publi)"
                    >Eliminar</b-button
                  > </b-modal
                >Eliminar</b-button
              >
            </b-card-body>
          </b-card>
        </b-container>
      </b-card-group>
    </b-row>
  </div>
</template>



<script>
/**
 * FALTA RESOLVER PARA EL BORRADO:
 * QUE EL EVENTO BORRE EXACTAMENTE LA PUBLICACION QUE DEBERIA POR INDICE
 * POR ALGUNA RAZON AHORA ESTA BORRANDO EN ORDEN DESCENDENTE DEL ARRAY
 *
 * PARA LA RESERVA:
 * CREO QUE YA ESTARIA RESUELTO, HAY QUE VER QUE HACEMOS POST RESERVA, SI SE LA ASIGNAMOS AL USUARIO LOGUEADO
 * O SI LO DEJAMOS ASI (CAMBIANDO EL FLAG A "RESERVADA" NADA MAS)
 *
 * AXIOS/MOCKAPI:
 * LA RESERVA Y EL BORRADO ESTAN PEGANDOLE DIRECTO A LA API, ASI QUE LOS CAMBIOS SE PUEDEN VER EN MOCKAPI A MEDIDA
 * QUE SE VAN HACIENDO
 */
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
    async reservaPubli(publi) {
      let indice = publi.id;
      console.log(indice);

      try {
        const publicacion = await axios.put(this.baseUrl + indice, {
          estaReservada: true,
          dni_usuario: this.$store.getters.getLoggedUser,
        });
        console.log(publicacion.data);
        this.$store.dispatch(
            "setPlantaPorReservar",
            publicacion.data
          );


          
        this.$bvModal.hide("modal-0");
        this.$router.push({ path: "/reserva" });
      } catch (error) {
        alert("hubo un error reservando la publicacion");
        console.log(error);
      }
    },

    async cancelarReserva(publi) {
      let indice = this.publicaciones.indexOf(publi);
      console.log(indice);
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
        //this.$store.dispatch("addPlantaEliminada", publicacion);
        const indiceAborrar = this.publicaciones.findIndex(
          (e) => e.id == publicacion.id // antes decia publicacion,id
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
