import Vue from 'vue'
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import App from './App.vue';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import enUSTranslate from './i18n/enUS.js';
import ptBRTranslate from './i18n/ptBR.js';

import 'styles/_index.sass';

Vue.use(Vuex);
Vue.use(bootstrap);

const enUS = enUSTranslate;
const ptBR = ptBRTranslate;
const currentLocale = navigator.language;
const store = new Vuex.Store();

Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', enUS);
Vue.i18n.add('pt', ptBR);

if (currentLocale === 'pt-BR') {
  Vue.i18n.set('pt');
}
else {
  Vue.i18n.set('en');
}

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
});

Vue.filter('uppercase', (value) => {
  return value.toString().toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App),
});
