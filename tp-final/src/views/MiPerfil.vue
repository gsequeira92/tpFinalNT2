<template>
  <div class="MiPerfil">
    <b-container>
      <h1>Mi Perfil</h1>

      <b-row align-v="stretch">
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                src="https://picsum.photos/600/300/?image=40"
                blank-color="#ccc"
                width="250"
                alt="placeholder"
              ></b-img>
            </template>

            <h5 class="mt-0">Usuario {{ usuario }}</h5>
            <p>
              {{ descripcionUsuario }}
            </p>
            <p>
              {{ informacionPersonal }}
            </p>
            <hr />
            <b-media>
              <template #aside>
                <b-img
                  src="https://picsum.photos/600/300/?image=35"
                  blank-color="#ccc"
                  width="80"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0">
                <b-icon
                  font-scale="2"
                  icon="award-fill"
                  variant="dark"
                  scale="0.75"
                  shift-h="3"
                  shift-v="-1"
                ></b-icon>
                Primer intercambio del usuario {{ usuario }}
              </h5>
              <p class="mb-0">
                {{ primerIntercambio }}
              </p>
            </b-media>
            <hr />
          </b-media>
        </b-card>
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
      descripcionUsuario: "",
      informacionPersonal: "",
      primerIntercambio: "",
      apiUser: [],
    };
  },
  mounted() {
    //Toda esta data dinamica la vamos a traer con
    //1) El dni del usuario logueado desde el store
    //2)Buscando al usuario con ese DNI en la persistencia que tuvieramos y seteando los valores de data()
    // const usuarioDNI = this.$store.getters.getLoggedUser
  },
  async created() {
    try {
      const usuarios = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/Usuario"
      );
      this.apiUser = usuarios.data;
      const usuarioLogueado = this.apiUser.find((e) => e.dni == this.$store.getter.getLoggedUser);
      this.usuario = usuarioLogueado.dni
      this.descripcionUsuario = usuarioLogueado.Descripcion;
      this.informacionPersonal = usuarioLogueado.InformacionPersonal;
      this.primerIntercambio = usuarioLogueado.PrimerIntercambio;
     
    } catch (error) {
      alert("hubo un error, auxilio");
    }
  },

};
</script>

