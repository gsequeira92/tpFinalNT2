<template>
  <div>
    <b-container fluid>
      <b-row>
        <h1>Reserva Completa!</h1>
      </b-row>
    </b-container>
    <hr />
    <b-row>
      <h2><b-icon icon="bag"></b-icon>Resumen:</h2>
      <b-icon
        icon="arrow-right-circle"
        shift-h="470"
        shift-v="-20"
        scale="2.8"
        variant="success"
        animation="cylon"
      ></b-icon>
    </b-row>
    <div>
      <b-card-group deck>
        <b-card
          title="Desde:"
          :img-src="imagenPlanta"
          img-alt="Avatar"
          img-bottom
        >
          <b-card-text> *Usuario: {{ nombreDueñoAnterior }} </b-card-text>
          *{{ nombrePlanta }}</b-card
        >

        <b-card
          title="Hacia:"
          :img-src="imagenPlanta"
          img-alt="Avatar"
          img-bottom
        >
          <b-card-text> *Usuario: {{ nombreNuevoDueño }} </b-card-text>

          *{{ nombrePlanta }}</b-card
        >
      </b-card-group>
      <hr />
      <h2 class="text-center">Muchas gracias por intercambiar!</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombreDueñoAnterior: "",
      nombreNuevoDueño: "",
      imagenPlanta: "",
      nombrePlanta: "",
    };
  },
  computed: {
    obtenerPlantaAReservar() {
      return this.$store.getters.getPlantaPorReservar;
    },
  },
  created() {
    const publicacionOriginal = this.obtenerPlantaAReservar;

    this.nombreDueñoAnterior = publicacionOriginal.dni_usuario;
    this.imagenPlanta = publicacionOriginal.img;
    this.nombrePlanta = publicacionOriginal.nombrePlanta;
    this.nombreNuevoDueño = this.$store.getters.getLoggedUser;
  },
};
</script>