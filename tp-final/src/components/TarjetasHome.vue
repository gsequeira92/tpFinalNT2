<template>
  <div class="hello">
     <hr width=100% size="10" noshade="noshade"/>
    <b-container >
      <b-row align-content="center">
        <b-col align-self="center"> <b-card title=" Give Green"
        img-src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1"
        img-alt="plant-image"
        img-top
        style="max-width: 23rem;"
        ><b-card-text>Conoce las variedades de plantas que tenemos!</b-card-text>
        <b-button to="/#/listaPublicaciones" pill variant="success">Ir a verlas</b-button></b-card> </b-col>
  
        <b-col> <b-card title="Green Map " 
        img-src=" https://images.unsplash.com/photo-1505778276668-26b3ff7af103?ixlib=rb-1.2.1"
        img-alt="Green-map"
        img-top
        style="max-width: 50rem;"
         ><b-card-text>Conoce donde estan nuestros Green Lockers .</b-card-text>
        <b-button to="/#/MapaPublicaciones" pill variant="success">Ir a verlos</b-button></b-card> </b-col>
       
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  TarjetasHome: "TarjetasHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

