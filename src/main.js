import Vue from 'vue'
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import App from './App.vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import enUSTranslate from './i18n/enUS.js';
import ptBRTranslate from './i18n/ptBR.js';

Vue.use(Vuex);

const store = new Vuex.Store();
const enUS = enUSTranslate;
const ptBR = ptBRTranslate;

Vue.use(vuexI18n.plugin, store);
Vue.use(bootstrap);

Vue.i18n.add('en', enUS);
Vue.i18n.add('pt', ptBR);

Vue.i18n.set('pt');

new Vue({
  el: '#app',
  render: h => h(App)
})
