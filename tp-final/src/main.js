import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import x5GMaps from 'x5-gmaps'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import secrets from "./secrets.js"
import {store}from "./store.js"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false;
Vue.use(x5GMaps, secrets.mapKey )

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
