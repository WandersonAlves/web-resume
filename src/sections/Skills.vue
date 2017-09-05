<style scoped lang="sass">

</style>
<template>
  <section>
    <div class="container bg-orange container-padding-top">
      <h1>Under Construction</h1>
    </div>
    <arrow @click.native="nextPage()"></arrow>
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
      // this.$bus.$emit('route-text', 'skillsHeader', 'bg-orange');
    },
    beforeDestroy() {
      this.$bus.$emit('route-text', '', false);
    }
  }
</script>