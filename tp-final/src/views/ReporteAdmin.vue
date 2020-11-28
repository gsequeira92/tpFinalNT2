<template>
  <div>
    <h1>Reporte de publicaciones:</h1>
    <hr />
    <b-container>
      <b-row>
        <b-col>
          <h5>Disponibles</h5>
          <b-progress
            :value="valorDisponibles"
            show-value
            variant="success"
            class="mb-3"
            animated
          ></b-progress>

          <h5>Reservadas</h5>
          <b-progress
            :value="valorReservadas"
            show-value
            variant="sucess"
            class="mb-3"
            animated
          ></b-progress>

          <h5>Eliminadas</h5>
          <b-progress
            :value="valorEliminadas"
            show-value
            variant="danger"
            class="mb-3"
            animated
          ></b-progress>
        </b-col>
      </b-row>
      <hr />
    </b-container>
    <h1>Reporte de Usuarios:</h1>
    <b-container>
      <b-row>
        <b-col>
          <h5>Activos</h5>
          <b-progress
            :value="valorUsuariosActivos"
            show-value
            variant="primary"
            class="mb-3"
            animated
          ></b-progress>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valorDisponibles: 0,
      valorReservadas: 0,
      valorEliminadas: 0,
      valorUsuariosActivos: 0,
    };
  },
  async created() {
    console.log("SE CARGAN TODAS LAS PUBLICACIONES DE LA API PARA REPORTES");
    try {
      const publicaciones = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/publiPlantas?estaReservada=false"
      );
      this.valorDisponibles = publicaciones.data.length;

      const publicacionesReservadas = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/publiPlantas/?estaReservada=true"
      );
      this.valorReservadas = publicacionesReservadas.data.length;
//
      const publicacionesEliminadas = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/Eliminadas"
      );
      this.valorEliminadas = publicacionesEliminadas.data.length; 
      // HACER ESTO CON LAS ELIMINADAS
      //Guardamos las eliminadas en el store para poder accederlas despues de eliminarlas
     
     //this.valorEliminadas = this.$store.getters.getPlantasEliminadas.length;
 
      const usuarios = await axios.get(
        "https://5fbbcc9fc09c200016d4122c.mockapi.io/Usuario"
      );
      this.valorUsuariosActivos = usuarios.data.length;
    } catch (error) {
      alert("hubo un error, auxilio");
    }
  },
};
</script>