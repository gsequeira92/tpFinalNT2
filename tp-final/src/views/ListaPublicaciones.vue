<template>
  <div>
    <b-container fluid>
      <b-row class="vh-100">
        <b-col>
          <b-container>
            <b-card-group deck>
              <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://picsum.photos/600/300/?image=400"
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
                    pill
                    @click="reservaPubli"
                    class="card-link"
                    variant="success"
                    v-show="nrolog === 1"
                    >Reservar
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
                style="max-width: 20rem;"
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
                    pill
                    @click="reservaPubli1"
                    class="card-link"
                    variant="success"
                    v-show="nrolog === 1"
                    >Reservar
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
                style="max-width: 20rem;"
                img-src="https://picsum.photos/600/300/?image=400"
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
                    pill
                    href="#"
                    @click="reservaPubli2()"
                    class="card-link"
                    variant="success"
                    v-if="nrolog === 1"
                    >Reservar
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
      publicaciones : []
     
    };
  },
  computed: {
    nrolog() {
      return this.$store.getters.getRol;
    }, 
  },
  mounted() {
    console.log('mounted')
   this.publicaciones = this.getPublicaciones()

  },
  methods: {
    getPublicaciones() {
      // TODO traer todas las publicaciones menos la que tienen mi dni o  que esten reservadas
      const publicaciones = [];
      return publicaciones;
    },
    reservaPubli() {
      alert("confirmar reserva?");

      this.reservadoPubli1 = true;
    },
    reservaPubli1() {
      alert("confirmar reserva?");
      this.reservadoPubli2 = true;
    },
    reservaPubli2() {
      alert("confirmar reserva?");
      this.reservadoPubli3 = true;
    },

    esAdm() {
      return this.nrolog === 2;
    },
  },
};
</script>
