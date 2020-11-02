<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="2">ACA VAN A IR LOS FILTROS</b-col>
        <b-col> <b-table :items="items"></b-table></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "lista-publicaciones",
  data() {
    return {
      items: [
        { Planta: 40, Descripcion: "Dickerson", Usuario: "Macdonald" },
        { Planta: 21, Descripcion: "Larsen", Usuario: "Shaw" },
        { Planta: 89, Descripcion: "Geneva", Usuario: "Wilson" },
        { Planta: 38, Descripcion: "Jami", Usuario: "Carney" },
        { Planta: 40, Descripcion: "Dickerson", Usuario: "Macdonald" },
        { Planta: 21, Descripcion: "Larsen", Usuario: "Shaw" },
        { Planta: 89, Descripcion: "Geneva", Usuario: "Wilson" },
        { Planta: 38, Descripcion: "Jami", Usuario: "Carney" },
        { Planta: 40, Descripcion: "Dickerson", Usuario: "Macdonald" },
        { Planta: 21, Descripcion: "Larsen", Usuario: "Shaw" },
        { Planta: 89, Descripcion: "Geneva", Usuario: "Wilson" },
        { Planta: 38, Descripcion: "Jami", Usuario: "Carney" }
      ]
    };
  }
};
</script>