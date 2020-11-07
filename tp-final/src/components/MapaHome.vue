<template>
  <div id="HomeMap">
    <hr width="100%" size="10" noshade="noshade" />
    <b-container fluid>
      <b-row class="vh-100">
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
    <hr width="100%" size="10" noshade="noshade" />
  </div>
</template>
<script>
import { gmapsMap,gmapsMarker } from "x5-gmaps";

const greenMarker = require("../assets/campfire.png")

export default {
  Map: "Home-map",
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
};
</script>

