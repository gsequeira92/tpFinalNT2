<template>
  <div>
    <hr />
    <b-container fluid>
      <b-row class="vh-100">
        <b-col cols="2">
          <h3>Filtrar por:</h3>
          <hr />
          <b-list-group>
            <b-list-group-item button variant="info" @click="activarItems"
              >Buzón 1</b-list-group-item
            >
            <!-- <b-list-group-item
              button
              variant="info"
              @click="activarItem(items[1])"
              >Buzón 2</b-list-group-item
            >
            <b-list-group-item
              button
              variant="info"
              @click="activarItem(items[2])"
              >Buzón 3</b-list-group-item
            >
            <b-list-group-item
              button
              variant="info"
              @click="activarItem(items[3])"
              >Buzón 4</b-list-group-item
            >
            <b-list-group-item
              button
              variant="info"
              @click="activarItem(items[4])"
              >Buzón 5</b-list-group-item
            >
            <b-list-group-item
              button
              variant="info"
              @click="activarItem(items[5])"
              >Buzón 6</b-list-group-item
            >
            <b-list-group-item
              button
              variant="info"
              @click="activarItem(items[6])" -->
            <!-- >Buzón 7</b-list-group-item
            > -->
          </b-list-group>
        </b-col>
        <b-col>
          <gmapsMap :options="mapOptions">
            <gmapsMarker
              v-for="(item, i) in items"
              :key="i"
              :position="item.position"
              :icon="item.icon"
               @click="mostrarVentana">
            </gmapsMarker>



            <gmaps-info-window :v-show="!mostrar" :options="options" >
              </gmaps-info-window>
          </gmapsMap>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { gmapsMap, gmapsMarker, gmapsInfoWindow } from "x5-gmaps";

const greenMarker = require("../assets/campfire.png");

export default {
  name: "MapaBuzon",
  components: {
    gmapsMap,
    gmapsMarker,
    gmapsInfoWindow,
  },
  data() {
    return {
      mapOptions: {
        center: { lat: -34.6083, lng: -58.445 },
        zoom: 13,
        fullscreenControl: false,
        mapTypeControl: true,
        rotateControl: true,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: true,
      },

      options: {
        position: { lat: -34.607979, lng: -58.435875 },
        content: 'Buzon 3',
      },
      items: [
        {
          position: { lat: -34.606868, lng: -58.435875 },
          seMuestra: false,
          icon: greenMarker,
        },

        {
          position: { lat: -34.593988, lng: -58.489948 },
          seMuestra: false,
          icon: greenMarker,
        },
        {
          position: { lat: -34.571406, lng: -58.416048 },
          seMuestra: false,
          icon: greenMarker,
        },
        {
          position: { lat: -34.583528, lng: -58.409573 },
          seMuestra: false,
          icon: greenMarker,
        },
        {
          position: { lat: -34.60967, lng: -58.390068 },
          seMuestra: false,
          icon: greenMarker,
        },
        {
          position: { lat: -34.551013, lng: -58.480165 },
          seMuestra: false,
          icon: greenMarker,
        },
        {
          position: { lat: -34.614216, lng: -58.458122 },
          seMuestra: false,
          icon: greenMarker,
        },
      ],
      mostrar: false
    };
  },
  methods: {
    mostrarVentana() {
      this.mostrar = true
    }
  },
  computed: {
    // itemsActivados() {
    //   return this.items.filter((e) => e.seMuestra === true);
    // },

    activarItems() {
      return this.items.map((e) => e.seMuestra === false);
    },
  },
};
</script>
