<template>
  <div class="hello">
    <hr width="100%" size="10" noshade="noshade" />
    <b-container>
      <b-row>
        <b-col style="display: grid;">
          <b-card-img
            src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1"
            alt="plant-image"
            style="max-width:35rem; padding:0px; max-height: 30rem;"
          ></b-card-img>
        </b-col>
        <b-col style="display: grid;">
          <b-card style="max-height: 30rem;">
            <b-row>
              <b-card-body title="Give Green">
                <b-card-text
                  >Conoce las variedades de plantas que tenemos!</b-card-text
                >
              </b-card-body>
            </b-row>
            <b-row>
              <b-icon
                font-scale="5"
                icon="award-fill"
                variant="dark"
                scale="0.75"
                shift-h="3"
                shift-v="2"
              ></b-icon>
              <b-icon font-scale="4" icon="bag" variant="dark" shift-h="7">
              </b-icon>
              <b-icon
                font-scale="4"
                icon="binoculars-fill"
                shift-h="14"
                variant="dark"
              ></b-icon>
              <b-icon
                font-scale="4"
                icon="bookmark-heart-fill"
                shift-h="21"
                variant="dark"
              ></b-icon>
              <b-icon
                font-scale="4"
                icon="bootstrap-reboot"
                shift-h="27"
                variant="dark"
              ></b-icon>
            </b-row>

            <b-row>
              <b-button
                block
                v-align="end"
                to="/#/listaPublicaciones"
                pill
                variant="success"
                >Ir a verlas</b-button
              >
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <b-container>
      <b-row>
        <b-col style="display: grid;">
          <b-card>
            <b-card-body title="Green Map">
              <b-card-text
                >Conoce donde estan nuestros Green Lockers</b-card-text
              >
              <b-row>
                <b-icon
                  font-scale="4"
                  icon="bounding-box"
                  variant="dark"
                  scale="0.75"
                  shift-h="7"
                ></b-icon>
                <b-icon
                  font-scale="4"
                  icon="broadcast-pin"
                  shift-h="14"
                  shift-v="2"
                  variant="dark"
                ></b-icon>
                <b-icon
                  font-scale="4"
                  icon="hourglass-split"
                  shift-h="21"
                  variant="dark"
                ></b-icon>
                <b-icon
                  font-scale="4"
                  icon="mailbox2"
                  shift-h="27"
                  variant="dark"
                ></b-icon>
              </b-row>
              <b-button block to="/#/MapaPublicaciones" pill variant="success"
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

