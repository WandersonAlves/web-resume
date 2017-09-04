<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
.arrow {
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  left: 50%
}

.bounce {
  animation: bounce 2s infinite;
}


</style>
<template>
  <div class="down" v-bind:class="{'bounce': bounce}">
    <img class="arrow" v-bind:src="arrowComposition"/>
  </div>
</template>
<script>
  export default {
    name: 'Arrow',
    props: {
      bounce: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'down'
      },
      color: {
        type: String,
        default: 'white'
      }
    },
    computed: {
      arrowComposition() {
        return `/src/assets/${this.direction}-${this.color}.svg`
      }
    }
  }
</script>
