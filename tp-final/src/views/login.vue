<template>
  <div>
    <container>
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
            <b-button variant="success">Ingresar</b-button>
          </b-card>
        </b-col>
        <b-col> </b-col>
       
      </b-row>
    </container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      pass: ""
    };
  }
};
</script>