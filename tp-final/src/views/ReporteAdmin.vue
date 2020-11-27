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
            :value="value"
            :max="max"
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
export default {
  data() {
    return {

      valorDisponibles:0,
      valorReservadas:0,
      valorEliminadas:0,
      valorUsuariosActivos:0,

    };
  },


};
</script>