<template>
  <div>
    <h1 left>Publicaciones Disponibles:</h1>
    <hr width="100%" size="10" noshade="noshade" />
    <b-row class="vh-100">
      <b-container fluid>
        <b-card-group columns>
          <b-col v-for="(publi, p) in publicaciones" :key="p">
            <b-card
              no-body
              style="max-width: 20rem"
              :img-src="publi.img"
              img-alt="Image"
              img-top
              :v-show="publi.estado === false"
            >
              <b-card-body>
                <b-card-title>{{ publi.nombrePlanta }}</b-card-title>
                <b-card-sub-title class="mb-2">{{
                  publi.dni_usuario
                }}</b-card-sub-title>
                <b-card-text>
                  {{ publi.descripcion }}
                </b-card-text>
              </b-card-body>

              <b-card-body>
                <b-button
                  v-b-modal.modal-0
                  pill
                   v-if="nrolog == 1"
                  @click="reservaPubli"
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
                      @click="reservaPubli()"
                      >Aceptar</b-button
                    >
                    <b-button
                      class="mt-2"
                      variant="outline-danger"
                      block
                      @click="cancelarReserva()"
                      >Cancelar</b-button
                    >
                  </b-modal>

                  Reservar
                </b-button>
                <b-button pill  v-if="nrolog == 2" href="#" class="card-link" variant="danger"
                  >Eliminar</b-button
                >
              </b-card-body>
            </b-card>
          </b-col>
        </b-card-group>
      </b-container>
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
    };
  },
  computed: {
    nrolog() {
      return this.$store.getters.getRol;
    },

  },
  mounted() {
    console.log("mounted");
    console.log(this.$store.getters.getLoggedUser);
    //this.publicaciones = this.getPublicaciones();
    
    //Ahora esta filtrando las publicaciones por NO RESERVADAS Y QUE NO TENGAN MI DNI
    const publiFiltradas = this.publicaciones.filter(
      (e) =>
        e.estaReservada == false &&
        e.dni_usuario !== this.$store.getters.getLoggedUser
    );

    this.publicaciones = publiFiltradas;
    console.log(this.publicaciones);
  },

  async created() {
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
    reservaPubli(nroPubli) {
      const publicacion = this.publicaciones.find(
        (e) => e.indexOf() === nroPubli
      );
      publicacion.reservada = true;
      this.$refs["nuevoModal"].hide();
    },

    cancelarReserva(nroPubli) {
      const publicacion = this.publicaciones.find(
        (e) => e.indexOf() === nroPubli
      );
      publicacion.reservada = false;
      this.$refs["nuevoModal"].hide();
    },
  },
};
</script>
