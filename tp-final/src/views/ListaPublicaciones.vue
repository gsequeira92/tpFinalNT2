<template>
  <div>
    <b-container fluid>
      <b-row class="vh-100">
        <b-col>
          <b-container>
            <b-card-group deck>
              <b-card
                no-body
                style="max-width: 20rem"
                img-src="https://picsum.photos/600/300/?image=412"
                img-alt="Image"
                img-top
                v-show="reservadoPubli1 === false"
              >
                <b-card-body>
                  <b-card-title>Nombre Planta</b-card-title>
                  <b-card-sub-title class="mb-2"
                    >Nombre Usuario</b-card-sub-title
                  >
                  <b-card-text>
                    Descripcion de nuestra amada planta por intercambiarse log
                    in {{ nrolog }}
                  </b-card-text>
                </b-card-body>

                <b-card-body>
                  <b-button
                    v-b-modal.modal-0
                    pill
                    @click="reservaPubli"
                    class="card-link"
                    variant="success"
                    v-show="nrolog === 1"
                    ><b-modal ref="nuevoModal" id="modal-0" hide-footer title="Confirmar reserva">
                      <p>Seguro desea reservar esta planta?</p>
                      <b-button
                        class="mt-3"
                        variant="outline-success"
                        block
                        @click="reservaPubli"
                        >Aceptar</b-button
                      >
                      <b-button
                        class="mt-2"
                        variant="outline-danger"
                        block
                        @click="cancelarReserva"
                        >Cancelar</b-button
                      >
                    </b-modal>

                    Reservar
                  </b-button>
                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="success"
                    disabled
                    v-if="nrolog === 2"
                    >Reservar
                  </b-button>

                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="secondary"
                    v-if="nrolog === 2"
                    >Eliminar</b-button
                  >
                </b-card-body>
              </b-card>

              <b-card
                no-body
                style="max-width: 20rem"
                img-src="https://picsum.photos/600/300/?image=400"
                img-alt="Image"
                img-top
                v-show="reservadoPubli2 !== true"
              >
                <b-card-body>
                  <b-card-title>Nombre Planta</b-card-title>
                  <b-card-sub-title class="mb-2"
                    >Nombre Usuario</b-card-sub-title
                  >
                  <b-card-text>
                    Descripcion de nuestra amada planta por intercambiarse
                    publicacion 2
                  </b-card-text>
                </b-card-body>

                <b-card-body>
                  <b-button
                    v-b-modal.modal-1
                    pill
                    @click="reservaPubli1"
                    class="card-link"
                    variant="success"
                    v-show="nrolog === 1"
                    ><b-modal ref="nuevoModal" id="modal-1" hide-footer title="Confirmar reserva">
                      <p>Seguro desea reservar esta planta?</p>
                      <b-button
                        class="mt-3"
                        variant="outline-success"
                        block
                        @click="reservaPubli"
                        >Aceptar</b-button
                      >
                      <b-button
                        class="mt-2"
                        variant="outline-danger"
                        block
                        @click="cancelarReserva2"
                        >Cancelar</b-button
                      >
                    </b-modal>

                    Reservar
                  </b-button>
                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="success"
                    disabled
                    v-if="nrolog === 2"
                    >Reservar
                  </b-button>

                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="secondary"
                    v-if="nrolog === 2"
                    >Eliminar</b-button
                  >
                </b-card-body>
              </b-card>

              <b-card
                no-body
                style="max-width: 20rem"
                img-src="https://picsum.photos/600/300/?image=406"
                img-alt="Image"
                img-top
                v-show="reservadoPubli3 === false"
              >
                <b-card-body>
                  <b-card-title>Nombre Planta</b-card-title>
                  <b-card-sub-title class="mb-2"
                    >Nombre Usuario</b-card-sub-title
                  >
                  <b-card-text>
                    Descripcion de nuestra amada planta por intercambiarse
                  </b-card-text>
                </b-card-body>

                <b-card-body>
                  <b-button
                    v-b-modal.modal-2
                    pill
                    href="#"
                    @click="reservaPubli2()"
                    class="card-link"
                    variant="success"
                    v-if="nrolog === 1"
                    ><b-modal ref="nuevoModal" id="modal-2" hide-footer title="Confirmar reserva">
                      <p>Seguro desea reservar esta planta?</p>
                      <b-button
                        class="mt-3"
                        variant="outline-success"
                        block
                        @click="reservaPubli"
                        >Aceptar</b-button
                      >
                      <b-button
                        class="mt-2"
                        variant="outline-danger"
                        block
                        @click="cancelarReserva3"
                        >Cancelar</b-button
                      >
                    </b-modal>

                    Reservar
                  </b-button>
                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="success"
                    disabled
                    v-if="nrolog === 2"
                    >Reservar
                  </b-button>

                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="secondary"
                    v-if="esAdm()"
                    >Eliminar</b-button
                  >
                </b-card-body>
              </b-card>
            </b-card-group>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "lista-publicaciones",
  data() {
    return {
      reservadoPubli1: false,
      reservadoPubli2: false,
      reservadoPubli3: false,
    };
  },
  computed: {
    nrolog() {
      return this.$store.getters.logueado;
    },
  },
  methods: {
    reservaPubli() {
      this.reservadoPubli1 = true;
      this.$refs['nuevoModal'].hide()
    },
    reservaPubli1() {
   
      this.reservadoPubli2 = true;
      this.$refs['nuevoModal'].hide()
    },
    reservaPubli2() {
      this.reservadoPubli3 = true;
      this.$refs['nuevoModal'].hide()
    },
    esAdm() {
      return this.nrolog === 2;
    },
    cancelarReserva(){
      this.reservadoPubli1 = false;
      this.$refs['nuevoModal'].hide()

    },
        cancelarReserva2(){
      this.reservadoPubli2 = false;
      this.$refs['nuevoModal'].hide()

    },
        cancelarReserva3(){
      this.reservadoPubli3 = false;
      this.$refs['nuevoModal'].hide()

    }
  },
};
</script>
