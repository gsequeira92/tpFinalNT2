<template>
  <div>
    <b-container>
      <b-row class="text-center">
        <b-col> </b-col>
        <b-col cols="5">
          <b-card>
            <b-form-input
              :v-model="usuario"
              placeholder="Ingrese su usuario"
              type="text"
            ></b-form-input>
            <b-form-input
              :v-model="pass"
              placeholder="Ingrese su contraseña"
            ></b-form-input>
            <b-button @submit="login" to="/#/miPerfil" variant="success"
              >Ingresar</b-button
            >
          </b-card>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: null,
      pass: null,
    };
  },
  computed: {
    userList() {
      return this.$store.getters.getUserList;
    },
    adminKey() {
      return this.$store.getters.getAdminKey;
    },
  },
  methods: {
    login: function (usuario) {
      this.usuario = usuario;
      console.log(usuario);

      //Preguntar mañana al profe por parametros del evento y como usarlos como payload
      if (this.userList.includes(this.usuario)) {
        this.$store.dispatch("logUser");
        this.$store.dispatch("setCurrentUser", this.usuario);
      } else if (this.usuario === this.adminKey) {
        this.$store.dispatch("logAdmin");
      }
    },
  },
};
</script>
