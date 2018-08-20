// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/sass/common.scss'
import VUI from '../VUI/index.js'
Vue.use(VUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
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
