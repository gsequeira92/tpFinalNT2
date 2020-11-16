<template>
  <div>
    <h1>Nuestros Buzones:</h1>
    <hr />
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

            <gmaps-info-window :options="buzon1">
              <p><b-icon icon="geo-alt-fill"></b-icon><b> Buzon plaza irlanda</b></p>
              <p>Av. Gaona, C1416</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
            </gmaps-info-window>

            <gmaps-info-window :options="buzon2">
              <p><b-icon icon="geo-alt-fill"></b-icon><b>Buzon Parque Saavedra</b></p>
              <p>Superí 4204, CABA</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
            </gmaps-info-window>

            <gmaps-info-window :options="buzon3">
              <p><b-icon icon="geo-alt-fill"></b-icon><b>Buzon Parque Centenario</b></p>
              <p>Av. Díaz Vélez, C1414</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
            </gmaps-info-window>

            <gmaps-info-window :options="buzon4">
              <p><b-icon icon="geo-alt-fill"></b-icon><b>Buzon Agronomia</b></p>
              <p>Tinogasta 2685</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
            </gmaps-info-window>

            <gmaps-info-window :options="buzon5">
              <p><b-icon icon="geo-alt-fill"></b-icon><b>Buzon Bosques de Palermo</b></p>
              <p>Av. Infanta Isabel 410</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
            </gmaps-info-window>

            <gmaps-info-window :options="buzon6">
              <p><b-icon icon="geo-alt-fill"></b-icon><b>Buzon Recoleta</b></p>
              <p>Junín 1760, C1113 CABA</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
            </gmaps-info-window>

            <gmaps-info-window :options="buzon7">
              <p><b-icon icon="geo-alt-fill"></b-icon><b>Buzon Congreso</b></p>
              <p>Av. Rivadavia 1700, CABA</p>
              <b-icon icon="star-fill"></b-icon>
              <b-icon icon="star-fill"></b-icon>
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

      buzon3: {
        position: { lat: -34.602, lng: -58.435875 },
      },

      buzon4: {
        position: { lat: -34.589, lng: -58.489948 },
      },

      buzon5: {
        position: { lat: -34.567, lng: -58.416048 },
      },
      buzon6: {
        position: { lat: -34.579, lng: -58.409573 },
      },
      buzon7: {
        position: { lat: -34.605, lng: -58.390068 },
      },

      buzon2: {
        position: { lat: -34.545, lng: -58.480165 },
      },
      buzon1: {
        position: { lat: -34.609, lng: -58.458122 },
      },

      items: [
        {
          position: { lat: -34.606868, lng: -58.435875 },
          icon: greenMarker,
        },

        {
          position: { lat: -34.593988, lng: -58.489948 },

          icon: greenMarker,
        },
        {
          position: { lat: -34.571406, lng: -58.416048 },

          icon: greenMarker,
        },
        {
          position: { lat: -34.583528, lng: -58.409573 },

          icon: greenMarker,
        },
        {
          position: { lat: -34.60967, lng: -58.390068 },

          icon: greenMarker,
        },
        {
          position: { lat: -34.551013, lng: -58.480165 },

          icon: greenMarker,
        },
        {
          position: { lat: -34.614216, lng: -58.458122 },

          icon: greenMarker,
        },
      ],
    };
  },
};
</script>
