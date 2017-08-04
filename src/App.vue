<template>
  <div id="app">
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
</style>
