import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router/routes'

Vue.config.productionTip = false
import { 
  BootstrapVue, 
  IconsPlugin, 
  PaginationPlugin, 
  FormCheckboxPlugin} from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue, IconsPlugin, PaginationPlugin, FormCheckboxPlugin)
// Optionally install the BootstrapVue icon components plugin

Vue.use(VueRouter)


new Vue({
 router,
 // store,
  render: h => h(App)
}).$mount('#app');
