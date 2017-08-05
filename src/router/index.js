import Vue from 'vue';
import Router from 'vue-router';

const Home = r => require.ensure([], () => r(require('../sections/Home.vue')));
const About = r => require.ensure([], () => r(require('../sections/About.vue')));

Vue.use(Router);
// NOTE: Arquivo de rotas da aplicação. Bem mais simples se comparado com o Angular
export default new Router({
  base: '',
  routes: [
    {
      path: '/presentation',
      component: Home,
      name: 'presentation'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '*', redirect: '/presentation'
    }
  ]
});
