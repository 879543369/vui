import Vue from 'vue'
import App from './App'
import router from './config/router.js'
import store from './config/store.js'
import './assets/sass/common.scss'
import api from './api/api'
import VUI from '../VUI/index.js'
Vue.use(VUI)

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  el: '#app',
  render : h => h(App),
  router,
  store,
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = from.name === 'Home' ? 'slide-left' : 'slide-right'
    }
  }
})
