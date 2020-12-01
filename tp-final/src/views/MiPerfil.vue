<template>
  <div class="MiPerfil">
    <b-container>
      <h1>Mi Perfil</h1>

      <b-row align-v="stretch">
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                :src="imagenUsuario"
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
                  src="https://picsum.photos/600/300/?image=400"
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
      baseUrl: "https://5fbbcc9fc09c200016d4122c.mockapi.io/Usuario/",
      usuarioLogueado: "",
      imagenUsuario: ""
    };
  },
 
  async created() {
    try {
      const unUsuario = await axios.get(
        this.baseUrl += this.$store.getters.getLoggedUser
      );
      this.usuarioLogueado = unUsuario.data;
      console.log("EL USUARIO LOGUEADO ES " + this.usuarioLogueado.dni);
      this.usuario = this.usuarioLogueado.dni;
      this.descripcionUsuario = this.usuarioLogueado.Descripcion;
      this.informacionPersonal = this.usuarioLogueado.InformacionPersonal;
      this.primerIntercambio = this.usuarioLogueado.PrimerIntercambio;
      this.imagenUsuario = this.usuarioLogueado.Imagen;
    } catch (error) {
      alert("hubo un error, auxilio");
    }
  },
};
</script>

