<style scoped>
#gradient-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  width:100%;
  background: linear-gradient(270deg, #f4376d, #66349d);
  background-size: 400% 400%;

  animation: AnimationName 30s ease infinite;
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>

<template>
<section>
    <div id="gradient-background">
    </div>
    <div class="container container-viewport">
      <avatar v-once></avatar>
    </div>
  <arrow @click.native="nextPage()" bounce direction="down" color="white"></arrow>
</section>
</template>

<script>
import Avatar from '../components/Avatar.vue';
import Arrow from '../components/Arrow.vue';

export default {
  name: 'Home',
  components: {
    Avatar,
    Arrow
  },
  data() {
    return {
    }
  },
  methods: {
    nextPage() {
      this.$router.push({name: 'about'});
    }
  }
}
</script>
