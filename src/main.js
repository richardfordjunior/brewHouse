import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router/routes'

import { 
  BootstrapVue, 
  PaginationPlugin} from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue, PaginationPlugin)
// Optionally install the BootstrapVue icon components plugin

Vue.use(VueRouter)


new Vue({
router,
BootstrapVue,
PaginationPlugin,
  render: h => h(App)
}).$mount('#app');
