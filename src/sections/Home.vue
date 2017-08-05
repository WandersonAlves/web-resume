<style scoped>
.jumbotron {
  height: 100vh;
  background: transparent;
  margin-bottom: 0px;
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
  }
}
</script>
