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
  background: transparent;
  margin-bottom: 0px;
}

.navbar-brand {
  height: none;
}

.white {
  color: white;
}

#video-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  width:100%;
}
@media (max-width: 1023px) {
  #video-background {
    width: auto;
    height: 100vh;
  }
}
</style>

<template>
<section>
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
    <video id="video-background" muted autoplay loop poster="/src/assets/bg.jpg">
      <source src="/src/assets/video.mp4" type="video/mp4">
      <source src="/src/assets/video.webm" type="video/webm">
    </video>
    <div class="container">
      <avatar v-once></avatar>
    </div>
  </div>
</section>
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
    currentFlag () {
      if (this.$i18n.locale() === 'pt') {
        return '/src/assets/ptBR.png'
      } else if (this.$i18n.locale() === 'en') {
        return '/src/assets/enUS.png'
      }
    }
  },
  methods: {
    changeLocale () {
      if (this.$i18n.locale() === 'pt') {
        this.$i18n.set('en');
      } else if (this.$i18n.locale() === 'en') {
        this.$i18n.set('pt');
      }
    }
  },
  mounted () {
    let video = document.querySelector('#video-background');
    video.play();
  }
}
</script>
