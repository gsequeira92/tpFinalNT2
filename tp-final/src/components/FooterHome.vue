<template>
  <div id="footer">
    <hr width="100%" size="10" noshade="noshade" />
    <b-container>
      <b-row class="h2 mb-0">
        <h3>Encontranos :</h3>

        <b-icon icon="phone" variant="success" shift-h="120"></b-icon>
        <b-icon icon="triangle-half" variant="warning" shift-h="140"></b-icon>
        <b-icon icon="star-fill" variant="danger" shift-h="160"></b-icon>
        <b-icon icon="rss-fill" variant="info" shift-h="180"></b-icon>
        <b-icon icon="person-square" variant="primary" shift-h="200"></b-icon>

        <hr width="100%" size="10" noshade="noshade" />
      </b-row>
      <b-row>
        <b-col style="display: grid;">
          <ul>
            <li>Telefono: 4836-9912</li>
            <li>Email: plantfinder@outlook.com</li>
            <li>Direccion: Yatay 240</li>
            <li>Ubicación: Buenos Aires, Argentina</li>
          </ul>
        </b-col>
        <b-col>
          <ul>
            <li><b-link to="/#/miPerfil">MI PERFIL</b-link></li>
            <li><b-link to="/#/mapaPublicaciones">GREEN MAP</b-link></li>
            <li><b-link to="/#/listaPublicaciones">GIVE GREEN</b-link></li>
            <li><b-link to="/#/login">LOG-IN</b-link></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  Footer: "footer"
};
</script>
<style scoped>
.align-items-stretch {
  align-items: stretch !important;
  background-color: #17a2b8;
}
#footer {
  background-color: #343a40;
  color: rgba(255, 255, 255, 0.5);
}
</style>