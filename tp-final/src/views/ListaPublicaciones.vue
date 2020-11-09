<template>
  <div>
    <b-container fluid>
      <b-row class="vh-100">
        <b-col sm="2" >
          <h3>Filtrar por:</h3>
          <hr>
          <b-list-group >
            <b-list-group-item button variant="info">Filtro 1</b-list-group-item>
            <b-list-group-item button variant="info">Filtro 2</b-list-group-item>
            <b-list-group-item button variant="info">Filtro 3</b-list-group-item>
            <b-list-group-item button variant="info">Filtro 4</b-list-group-item>
            <b-list-group-item button variant="info">Filtro 5</b-list-group-item>
            
          </b-list-group>
        </b-col>
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