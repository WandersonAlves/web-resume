<style scoped lang="sass">
.container
  width: 100vw
  height: 100vh

</style>
<template>
  <section>
    <div class="container container-padding-top">
      <h1>Under Construction</h1>
    </div>
    <arrow class="black" @click.native="nextPage()"></arrow>
  </section>
</template>
<script>
  import Arrow from '../components/Arrow.vue';
  export default {
    name: 'About',
    components: {
      Arrow
    },
    mounted() {
      //this.$bus.$emit('change-animation');
      this.$bus.$emit('route-text', 'ABOUT');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '');
    },
    methods: {
       nextPage() {
        this.$router.push({ name: 'skills' });
      }
    }
  }
</script>