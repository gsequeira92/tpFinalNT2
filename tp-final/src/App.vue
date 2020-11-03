<template>
  <div id="app">
    <div id="nav">
      <BarraNavegacion></BarraNavegacion>
    </div>
    <router-view />
  </div>
</template>


<script>
import BarraNavegacion from "../src/components/BarraNavegacion.vue";
export default {
  name:"app",
  components:{
      BarraNavegacion
  }

};
</script>






