import Vue from 'vue'
import App from './App.vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import fa from 'font-awesome/css/font-awesome.css';

Vue.use(bootstrap);
Vue.use(fa);

new Vue({
  el: '#app',
  render: h => h(App)
})
