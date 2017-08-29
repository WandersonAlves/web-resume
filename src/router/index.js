import Vue from 'vue';
import Router from 'vue-router';

const Home = r => require.ensure([], () => r(require('../sections/Home.vue')));
const About = r => require.ensure([], () => r(require('../sections/About.vue')));
const Skills = r => require.ensure([], () => r(require('../sections/Skills.vue')));
const Contact = r => require.ensure([], () => r(require('../sections/Contact.vue')));

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
      path: '/skills',
      component: Skills,
      name: 'skills'
    },
    {
      path: '/contact',
      component: Contact,
      name: 'contact'
    },
    {
      path: '*', redirect: '/presentation'
    }
  ]
});
