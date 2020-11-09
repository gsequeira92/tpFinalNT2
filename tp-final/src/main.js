import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import x5GMaps from 'x5-gmaps'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import fs from 'fs';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false;

async function recibirArchivo() {
  return await fs.readFile('C:/Gaston Folder/ORT/PNT2/mapsKey.txt', 'uft8')
}

Vue.use(x5GMaps, recibirArchivo())

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
