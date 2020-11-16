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
                    @click="reservar"
                    class="card-link"
                    variant="success"
                    v-show="nrolog !== 0"
                    >Reservar
                  </b-button>
                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="success"
                    v-show="nrolog !== 0"
                    >Editar</b-button
                  >
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
                v-show="reservado == false"
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
                    @click="reservar"
                    class="card-link"
                    variant="success"
                    v-show="nrolog !== 0"
                    >Reservar
                  </b-button>
                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="success"
                    v-show="nrolog !== 0"
                    >Editar</b-button
                  >
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
                    v-if="nrolog === 1"
                    >Editar</b-button
                  >
                  <b-button
                    pill
                    href="#"
                    class="card-link"
                    variant="danger"
                    v-else
                    >Editar</b-button
                  >
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
      reservado: false,
    };
  },
  computed: {
    nrolog() {
      return this.$store.getters.logueado;
    },
  },
  methods: {
    reservar() {
      alert("confirmar reserva?");
      this.reservado = true;
    },
  },
};
</script>
