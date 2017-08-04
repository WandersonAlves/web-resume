<template>
  <div id="app" v-cloak>
    <home></home>
  </div>
</template>

<script>
import Home from './sections/Home.vue';
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif !important;
}
[v-cloak] {
    display:none;
}
</style>
