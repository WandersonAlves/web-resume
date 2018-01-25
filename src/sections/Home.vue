<style scoped>
.gradient-background {
  background: linear-gradient(270deg, #f4376d, #66349d);
  background-size: 400% 400%;

  animation: GradientAnimation 30s ease infinite;
}
@keyframes GradientAnimation { 
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
    </div>     
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
  }
}
</script>
