import Vue from 'vue'
import App from './App.vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(bootstrap);

new Vue({
  el: '#app',
  render: h => h(App)
})
