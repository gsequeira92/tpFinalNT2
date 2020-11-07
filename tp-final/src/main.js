import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import x5GMaps from 'x5-gmaps'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false;

Vue.use(x5GMaps, 'AIzaSyDepqCDefpySWOThDij3luS--95K-vhP-s')



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
