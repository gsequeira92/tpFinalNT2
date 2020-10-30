<template>
  <div id="footer">
    <hr width="100%" size="10" noshade="noshade" />
    <b-container fluid>
      <b-row align-v="stretch">
        <b-col>
          <b-card>
            <ul>
              <li>Telefono</li>
              <li>Email</li>
              <li>Direccion</li>
              <li>Pais</li>
            </ul></b-card
          >
        </b-col>
        <b-col
          ><b-card>
            <ul>
              <li>FB</li>
              <li>IG</li>
              <li>TWT</li>
              <li>LinkedIn</li>
            </ul></b-card
          ></b-col
        >
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
</style>