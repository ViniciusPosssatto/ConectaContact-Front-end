import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "@/plugins/vuetify"
import Toasted from 'vue-toasted';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);
Vue.use(Toasted, {
  duration: 2000,
  position: 'top-center', // ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
  theme: 'bubble', // ['toasted-primary', 'outline', 'bubble']
  // iconPack: 'mdi' // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
