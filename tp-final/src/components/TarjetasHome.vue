<template>
  <div class="hello">
    <hr width="100%" size="10" noshade="noshade" />
    <b-container fluid>
      <b-row>
        <b-col style="display: grid;">
          <b-card-img
            src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1"
            alt="plant-image"
            style="max-width:35rem; padding:0px;"
          ></b-card-img>
        </b-col>
        <b-col style="display: grid;">
          <b-card>
            <b-card-body title="Give Green">
              <b-card-text
                >Conoce las variedades de plantas que tenemos!</b-card-text
              >
              <b-button to="/#/listaPublicaciones" pill variant="success"
                >Ir a verlas</b-button
              >
            </b-card-body></b-card
          >
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <b-container fluid>
      <b-row>
        <b-col style="display: grid;">
          <b-card>
            <b-card-body title="Green Map">
              <b-card-text
                >Conoce donde estan nuestros Green Lockers</b-card-text
              >

              <b-button to="/#/MapaPublicaciones" pill variant="success"
                >Ir a verlos</b-button
              >
            </b-card-body>
          </b-card>
        </b-col>
        <b-col style="display: grid;">
          <b-card-img
            src=" https://images.unsplash.com/photo-1505778276668-26b3ff7af103?ixlib=rb-1.2.1"
            alt="Green-map"
            style="max-width: 50rem;"
          ></b-card-img>
        </b-col>
      </b-row>
    </b-container>
    <hr />
  </div>
</template>

<script>
export default {
  TarjetasHome: "TarjetasHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

