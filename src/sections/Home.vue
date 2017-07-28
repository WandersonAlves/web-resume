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
  background-image: url(/src/assets/bg.png);
  background-position: center center;
  margin-bottom: 0px;
  -webkit-animation: 100s scroll infinite linear;
  -moz-animation: 100s scroll infinite linear;
  -o-animation: 100s scroll infinite linear;
  -ms-animation: 100s scroll infinite linear;
  animation: 100s scroll infinite linear;
}

.navbar-brand {
  height: none;
}

.white {
  color: white;
}

@-webkit-keyframes scroll {
  100% {
    background-position: 0px -3000px;
  }
}

@-moz-keyframes scroll {
  100% {
    background-position: 0px -3000px;
  }
}

@-o-keyframes scroll {
  100% {
    background-position: 0px -3000px;
  }
}

@-ms-keyframes scroll {
  100% {
    background-position: 0px -3000px;
  }
}

@keyframes scroll {
  100% {
    background-position: 0px -3000px;
  }
}
</style>

<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
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
  data() {
    return {
    }
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
