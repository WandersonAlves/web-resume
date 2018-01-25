<template>
  <div id="app" v-cloak>   
    <home></home>
    <about ref="about"></about>
    <skills></skills>
    <portfolio></portfolio>
    <contact></contact>
  </div>
</template>

<script>
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Skills from './sections/Skills.vue';
import Portfolio from './sections/Portfolio.vue';
import Contact from './sections/Contact.vue';

export default {
  name: 'app',
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact
  }
}
</script>

<style>
[v-cloak] {
    display:none;
}
.navbar-default {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.34);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
}
.navbar-brand {
  height: none;
}
</style>
