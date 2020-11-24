<template>
  <div>
    <b-container>
      <b-row class="text-center">
        <b-col> </b-col>
        <b-col cols="5">
          <b-card>
            <b-form-input
              v-model="usuario"
              placeholder="Ingrese su usuario"
            ></b-form-input>
            <b-form-input
              v-model="pass"
              placeholder="Ingrese su contraseña"
            ></b-form-input>
            <b-button @click="login" variant="success">Ingresar</b-button>
          </b-card>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: "",
      pass: "",
      dniUserList: [],
    };
  },
  computed: {
    userList() {
      return this.dniUserList;
    },
    adminKey() {
      return this.$store.getters.getAdminKey;
    },
  },
  methods: {
    login: function () {
      console.log(this.usuario);

      //validamos que el dni este dentro de la lista de usuarios
      if (this.userList.indexOf(this.usuario) !== -1) {
        this.$router.push({ path: "/miPerfil", name: "mi-perfil" });
        console.log("SE LOGUEA UN USARIO");
        this.$store.dispatch("logUser");
        this.$store.dispatch("setCurrentUser", this.usuario);
       
        //validamos para loguear admin si el user es 999
      } else if (this.adminKey == this.usuario) {
        this.$router.push({ path: "/" });
        console.log("SE LOGUEA AL ADMIN");
        this.$store.dispatch("logAdmin");

      } else {
        alert("El Usuario ingresado no esta registrado, intentelo de nuevo");
        this.usuario.clear();
      }
    },
  },
  async created() {
    try {
      const usuarios = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/Usuario"
      );
      console.log("SE GUARDA LA LISTA DE USUARIOS");
      //Este map nos guarda solo los DNI'S y lo guardamos en la lista de dnis correctos
      //asi podemos validar que el usuario exista
      this.dniUserList = usuarios.data.map((e) => e.dni);
    } catch (error) {
      alert("Ocurrio un error obteniendo la lista de dni de usuarios");
    }
  },
};
</script>
