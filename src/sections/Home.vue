<style scoped>
.navbar-default {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.25);
}

.jumbotron {
  height: 100vh;
  background-image: url(/src/assets/home-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 0px;
}

.navbar-brand {
  height: none;
}
</style>

<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header navbar-right">
        <a class="navbar-brand" href="#">
        <img alt="Brand" @click="changeLocale()" :src="currentFlag">
        </a>
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
  },
  computed: {
    currentFlag: function() {
      if (this.$i18n.locale() === 'pt') {
        return '/src/assets/ptBR.png'
      } else if (this.$i18n.locale() === 'en') {
        return '/src/assets/enUS.png'
      }
    }
  },
  methods: {
    changeLocale: function() {
      if (this.$i18n.locale() === 'pt') {
        this.$i18n.set('en');
      } else if (this.$i18n.locale() === 'en') {
        this.$i18n.set('pt');
      }
    }
  }
}
</script>
