<style scoped lang="sass">
.container
  width: 100vw
  height: 100vh

</style>
<template>
  <section>
    <div class="container bg-yellow container-padding-top">
      <h1>Under Construction</h1>
    </div>
    <arrow></arrow>
  </section>
</template>
<script>
  import Arrow from '../components/Arrow.vue';
  export default {
    name: 'Skills',
    components: {
      Arrow
    },
    mounted() {
      //this.$bus.$emit('change-animation');
      this.$bus.$emit('route-text', 'SKILLS');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '');
    }
  }
</script>