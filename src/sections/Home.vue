<style scoped>
.gradient-background {
  background: linear-gradient(270deg, #f4376d, #66349d);
  background-size: 400% 400%;

  animation: AnimationName 30s ease infinite;
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

.arrow {
  position: relative;
  bottom: 48px;
}
</style>

<template>
<section>
    <div class="gradient-background container container-viewport">
      <avatar v-once></avatar>      
      <div class="arrow">
        <arrow bounce direction="down" color="white"></arrow>
      </div> 
    </div>     
</section>
</template>

<script>
import Avatar from '../components/Avatar.vue';
import Arrow from '../components/Arrow.vue';
import Mixin from '../mixins/RouterNavigation.mixin';

export default {
  name: 'Home',
  mixins: [Mixin],
  components: {
    Avatar,
    Arrow
  },
  data() {
    return {
    }
  }
}
</script>
