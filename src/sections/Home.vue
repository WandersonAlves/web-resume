<style scoped>
.navbar-default {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0px 6px 15px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 6px 15px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 6px 15px 0px rgba(0,0,0,0.25);
}
.jumbotron {
    height: 100vh;
    background-image: url(/src/assets/home-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-bottom: 0px;
}
</style>

<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">enUS</a>
      </div>
    </div>
  </nav>
  <div class="jumbotron">
    <div class="container">
      <avatar></avatar>
    </div>
  </div>
</div>
</template>

<script>
import Avatar from '../components/Avatar.vue';
export default {
  name: 'Home',
  components: {
    Avatar
  }
}
</script>
