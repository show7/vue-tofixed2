import Vue from 'vue'
import App from './App.vue'
import Rounding from './lib/index.js'
Vue.use(Rounding)
new Vue({
  el: '#app',
  render: h => h(App)
})
