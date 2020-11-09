<template>
  <div>
    <hr />
    <b-container fluid>
      <b-row class="vh-100">
        <b-col cols="2">
          <h3>Filtrar por:</h3>
          <hr />
          <b-list-group>
            <b-list-group-item button variant="info">Buzón 1</b-list-group-item>
            <b-list-group-item button variant="info">Buzón 2</b-list-group-item>
            <b-list-group-item button variant="info">Buzón 3</b-list-group-item>
            <b-list-group-item button variant="info">Buzón 4</b-list-group-item>
            <b-list-group-item button variant="info">Buzón 5</b-list-group-item>
            <b-list-group-item button variant="info">Buzón 6</b-list-group-item>
            <b-list-group-item button variant="info">Buzón 7</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <gmapsMap :options="mapOptions">
            <gmapsMarker
              v-for="(item, i) in items"
              :key="i"
              :position="item.position"
              :icon="item.icon"
            >
            </gmapsMarker>
          </gmapsMap>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { gmapsMap, gmapsMarker } from "x5-gmaps";

const greenMarker = require("../assets/campfire.png");

export default {
  name: "MapaBuzon",
  components: {
    gmapsMap,
    gmapsMarker
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
        zoomControl: true
      },
      items: [
        {
          position: { lat: -34.606868, lng: -58.435875 },
          icon: greenMarker
        },

        {
          position: { lat: -34.593988, lng: -58.489948 },
          icon: greenMarker
        },
        {
          position: { lat: -34.571406, lng: -58.416048 },
          icon: greenMarker
        },
        {
          position: { lat: -34.583528, lng: -58.409573 },
          icon: greenMarker
        },
        {
          position: { lat: -34.60967, lng: -58.390068 },
          icon: greenMarker
        },
        {
          position: { lat: -34.551013, lng: -58.480165 },
          icon: greenMarker
        },
        {
          position: { lat: -34.614216, lng: -58.458122 },
          icon: greenMarker
        }
      ]
    };
  },
  mounted() {
    this.items.forEach(element => {
      this.$GMaps().then(GMaps => (element.animation = GMaps.Animation.BOUNCE));
    });
  }
};
</script>
